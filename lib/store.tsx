"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { topics as seedTopics, type Topic } from "./mock-data";
import { emptyDetail, topicDetails, type Message, type TopicDetail } from "./topic-details";

// حالت محلی: بدون دیتابیس. داده‌ها در localStorage مرورگر نگه داشته می‌شوند.
// بعداً فقط همین فایل با فراخوانی دیتابیس/API جایگزین می‌شود.
export type LiveMessage = Message & { liked?: boolean };
export type LiveDetail = Omit<TopicDetail, "messages"> & { messages: LiveMessage[] };
type State = { topics: Topic[]; details: Record<string, LiveDetail> };

export const ME = "امیرعلی";
const KEY = "log-state-v1";
const seed = (): State => ({ topics: seedTopics, details: topicDetails });
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

type Store = {
  ready: boolean;
  topics: Topic[];
  getDetail: (topicId: string) => LiveDetail;
  addTopic: (eventId: string, title: string, firstMessage: string) => string;
  addMessage: (topicId: string, text: string) => void;
  toggleLike: (topicId: string, messageId: string) => void;
  selectOption: (topicId: string, optionId: string) => void;
  decide: (topicId: string) => void;
  reset: () => void;
};

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(seed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {}
  }, [state, ready]);

  const getDetail = useCallback((id: string) => state.details[id] ?? emptyDetail, [state.details]);

  const patchTopic = (s: State, id: string, patch: Partial<Topic>): Topic[] =>
    s.topics.map((t) => (t.id === id ? { ...t, ...patch } : t));

  const addTopic: Store["addTopic"] = (eventId, title, firstMessage) => {
    const id = uid();
    const text = firstMessage.trim();
    const topic: Topic = {
      id, eventId, title: title.trim(), starter: ME, when: "الان",
      lastMessage: text ? `${ME}: ${text}` : "بحث تازه شروع شد",
      messages: text ? 1 : 0, people: 1, status: "در حال بحث", tone: "blue",
    };
    const messages: LiveMessage[] = text ? [{ id: uid(), author: ME, when: "الان", text, likes: 0 }] : [];
    setState((s) => ({
      topics: [topic, ...s.topics],
      details: { ...s.details, [id]: { ...emptyDetail, participants: 1, messages } },
    }));
    return id;
  };

  const addMessage: Store["addMessage"] = (topicId, text) => {
    const t = text.trim();
    if (!t) return;
    setState((s) => {
      const d = s.details[topicId] ?? emptyDetail;
      const msg: LiveMessage = { id: uid(), author: ME, when: "الان", text: t, likes: 0 };
      const topic = s.topics.find((x) => x.id === topicId);
      return {
        topics: patchTopic(s, topicId, { lastMessage: `${ME}: ${t}`, messages: (topic?.messages ?? 0) + 1 }),
        details: { ...s.details, [topicId]: { ...d, messages: [...d.messages, msg] } },
      };
    });
  };

  const toggleLike: Store["toggleLike"] = (topicId, messageId) =>
    setState((s) => {
      const d = s.details[topicId];
      if (!d) return s;
      const messages = d.messages.map((m) =>
        m.id === messageId ? { ...m, liked: !m.liked, likes: m.likes + (m.liked ? -1 : 1) } : m
      );
      return { ...s, details: { ...s.details, [topicId]: { ...d, messages } } };
    });

  const selectOption: Store["selectOption"] = (topicId, optionId) =>
    setState((s) => {
      const d = s.details[topicId];
      if (!d || d.result) return s; // بعد از ثبت تصمیم تغییر نمی‌کند
      const options = d.options.map((o) => ({ ...o, selected: o.id === optionId }));
      return { ...s, details: { ...s.details, [topicId]: { ...d, options } } };
    });

  const decide: Store["decide"] = (topicId) =>
    setState((s) => {
      const d = s.details[topicId];
      const chosen = d?.options.find((o) => o.selected);
      if (!d || !chosen) return s;
      const result = { title: `${chosen.title} انتخاب شد`, note: `${chosen.note} · ${chosen.price} تومان`, by: ME, when: "الان" };
      return {
        topics: patchTopic(s, topicId, { status: "تصمیم‌گیری‌شده", tone: "green" }),
        details: { ...s.details, [topicId]: { ...d, result, status: { label: "تصمیم‌گیری‌شده", tone: "green" } } },
      };
    });

  const reset = () => setState(seed());

  return (
    <Ctx.Provider value={{ ready, topics: state.topics, getDetail, addTopic, addMessage, toggleLike, selectOption, decide, reset }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore باید داخل StoreProvider استفاده شود");
  return v;
}
