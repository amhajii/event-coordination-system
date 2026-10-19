"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Heart, Paperclip, Send } from "lucide-react";
import { Avatar } from "@/components/shared/avatar";
import { StatusChip } from "@/components/shared/status-chip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";

import { Massage } from "./massage";
import { SendBox } from "./SendBox";

export function TopicView({ eventId, topicId }: { eventId: string; topicId: string }) {
  const { ready, topics, getDetail, addMessage, toggleLike, selectOption, decide } = useStore();
  const [text, setText] = useState("");

  const topic = topics.find((t) => t.id === topicId);
  if (!ready) return null;
  if (!topic) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-gray-500">
        این بحث پیدا نشد.
        <Link href={`/events/${eventId}/discussions`} className="text-sm text-blue-600">بازگشت به بحث‌ها</Link>
      </div>
    );
  }
  const d = getDetail(topicId);
  const chosen = d.options.find((o) => o.selected);

  function send() {
    if (!text.trim()) return;
    addMessage(topicId, text);
    setText("");
  }

  return (


    // grid gap-8 lg:grid-cols-[260px_1fr]
    <div className="

      w-full
      flex flex-row-reverse lg:flex-row-reverse lg:justify-between
      
    ">












      <aside className="p-10 w-100 bg-blue-50/50 flex flex-col items-end gap-5 text-sm text-gray-600 lg:border-e lg:border-gray-100 lg:pe-7">
        <b className="text-sm text-gray-900">خلاصه بحث</b>
        <div className="flex flex-col items-end gap-3 text-xs text-gray-500">
          وضعیت:
          <span> <StatusChip tone={d.status.tone}>{d.status.label}</StatusChip></span>
        </div>
        <div className="flex flex-col items-end gap-1.5 text-xs text-gray-500">
          گزینه‌های پیشنهادی
          <span className="text-sm text-gray-700">{d.options.length} گزینه</span>
        </div>
        <div className="flex flex-col items-end gap-1.5 text-xs text-gray-500">
          مشارکت‌کنندگان · {d.participants} نفر
          <div className="flex -space-x-2 rtl:space-x-reverse">
            {["سارا", "علی", "مهدی", "نگین"].slice(0, Math.max(1, Math.min(4, d.participants))).map((n) => (
              <span key={n} className="rounded-full border-2 border-white"><Avatar name={n} size={26} /></span>
            ))}
          </div>
        </div>
        {d.result && (
          <>
            <b className="mt-6 text-sm text-gray-900">نتیجه نهایی</b>
            <div className="flex flex-col items-end gap-1 rounded-xl bg-green-100 p-3.5 text-xs">
              <b className="flex items-center gap-2 text-[13px] text-gray-900">
                <span className="flex size-5 items-center justify-center rounded-full bg-green-500 text-white"><Check size={13} strokeWidth={3} /></span>
                {d.result.title}
              </b>
              <span className="text-gray-500">{d.result.note}</span>
              <span className="text-[11px] text-gray-400">توسط {d.result.by} · {d.result.when}</span>
            </div>
          </>
        )}
        {d.actions.length > 0 && (
          <>
            <b className="mt-2 text-sm text-gray-900">اقدامات بعدی</b>
            {d.actions.map((a) => (
              <div key={a.id} className="cursor-pointer transition hover:bg-gray-100 p-3 rounded-xl w-full flex justify-between items-center ">
                <span className="mt-0.5 size-[18px] shrink-0 rounded-full border-[1.5px] border-gray-300" />
                <div className="flex flex-col items-end gap-0.5 text-[13px]">
                  {a.title}
                  <span className="text-[11px] text-gray-400">{a.meta}</span>
                </div>
              </div>
            ))}
          </>
        )}
      </aside>












      <div className="py-10 px-10 w-full flex items-end min-h-[560px] flex-col gap-5">
        <Link href={`/events/${eventId}/discussions`} className="flex items-center gap-1.5 text-[13px] text-gray-500">
          همه‌ی بحث‌ها
          <ChevronRight size={20} className="p-1 box-content bg-blue-100 rounded-full" />
        </Link>
        <div className="flex items-center gap-1">
          <StatusChip tone={d.status.tone}>{d.status.label}</StatusChip>
          <h3 className="lg:text-xl font-bold">{topic.title}</h3>
        </div>
        <span className="-mt-3 text-xs text-gray-400">شروع‌شده توسط <span className="text-gray-700 cursor-pointer"> {topic.starter}</span> · <span className="text-gray-700 cursor-pointer">{topic.when}</span>  </span>







        <div id="chats" className="h-full overflow-y-scroll w-full">


          {d.messages.length === 0 && (
            <p className="rounded-2xl bg-slate-50 p-6 text-center text-sm text-gray-400">هنوز پیامی در این بحث نیست. اولین نفر باشید.</p>
          )}
          {d.messages.map((m) => (
            <Massage
              key={m.id}
              id={m.id}
              when={m.when}
              text={m.text}
              author={m.author}
              likes={m.likes}
              liked={!!m.liked}
              topicId={topicId}
              onLike={(id) => toggleLike(topicId, id)}
            />    
          ))}

          {d.options.length > 0 && (
            <>
              <div className="mt-1.5 flex items-center justify-between">
                <b className="text-sm">گزینه‌های مطرح‌شده</b>
                {!d.result && (
                  <Button size="sm" disabled={!chosen} onClick={() => decide(topicId)} className="h-9 rounded-xl px-4">
                    ثبت تصمیم
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-2" role="radiogroup" aria-label="گزینه‌ها">
                {d.options.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    role="radio"
                    aria-checked={!!o.selected}
                    disabled={!!d.result}
                    onClick={() => selectOption(topicId, o.id)}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-[18px] py-4 text-start transition enabled:hover:bg-blue-50/60 disabled:cursor-default"
                  >
                    <span className={`size-[18px] shrink-0 rounded-full ${o.selected ? "border-[5px] border-blue-500" : "border-[1.5px] border-gray-300"}`} />
                    <span className="flex flex-1 flex-col gap-1">
                      <b className="text-sm">{o.title}</b>
                      <span className="text-xs text-gray-400">{o.note}</span>
                    </span>
                    <span className="text-sm font-medium">{o.price} تومان</span>
                  </button>
                ))}
              </div>
            </>
          )}


        </div>



        <SendBox text={text} setText={setText} handleSend={send} />

        
      </div>
    </div>
  );
}
