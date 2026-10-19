import type { Tone } from "./mock-data";

export type Message = { id: string; author: string; when: string; text: string; likes: number };
export type Option = { id: string; title: string; note: string; price: string; selected?: boolean };
export type TopicDetail = {
  status: { label: string; tone: Tone };
  participants: number;
  messages: Message[];
  options: Option[];
  result?: { title: string; note: string; by: string; when: string };
  actions: { id: string; title: string; meta: string }[];
};

export const emptyDetail: TopicDetail = {
  status: { label: "در حال بحث", tone: "blue" },
  participants: 0,
  messages: [],
  options: [],
  actions: [],
};

// فعلاً فقط بحث «محل برگزاری» داده‌ی کامل دارد.
export const topicDetails: Record<string, TopicDetail> = {
  venue: {
    status: { label: "در انتظار تصمیم", tone: "amber" },
    participants: 8,
    messages: [
      { id: "m1", author: "سارا", when: "۲ روز پیش", likes: 3, text: "به نظرم فضای کار اشتراکی الف مناسب‌تره. ظرفیتش ۱۰۰ نفره و هزینه‌اش ۸ میلیون تومنه." },
      { id: "m2", author: "علی", when: "۲ روز پیش", likes: 5, text: "بودجه‌مون محدوده. مکان با ظرفیت ۹۰ نفر و هزینه ۵ میلیون هم می‌تونه گزینه خوبی باشه." },
    ],
    options: [
      { id: "o1", title: "فضای کار اشتراکی الف", note: "ظرفیت ۱۰۰ نفر · امکانات کامل", price: "۸,۰۰۰,۰۰۰" },
      { id: "o2", title: "سالن ب", note: "ظرفیت ۹۰ نفر · هزینه کمتر", price: "۵,۰۰۰,۰۰۰", selected: true },
    ],
    result: { title: "سالن ب انتخاب شد", note: "با ظرفیت ۹۰ نفر و هزینه ۵ میلیون تومان", by: "علی", when: "۲ روز پیش" },
    actions: [
      { id: "a1", title: "پیگیری قرارداد سالن", meta: "مسئول: علی · مهلت: ۲ روز دیگر" },
      { id: "a2", title: "ثبت هزینه در بودجه", meta: "مسئول: مهدی · مهلت: ۳ روز دیگر" },
    ],
  },
};
