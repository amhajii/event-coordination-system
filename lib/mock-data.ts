export type Tone = "blue" | "amber" | "green" | "gray";

export type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  members: number;
  status: string;
  tone: Tone;
  hue: number; // رنگ پیش‌فرض تصویر تا زمانی که عکس واقعی داریم
};

export type Topic = {
  id: string;
  eventId: string;
  title: string;
  starter: string;
  when: string;
  lastMessage: string;
  messages: number;
  people: number;
  status: string;
  tone: Tone;
};

export const events: EventItem[] = [
  { id: "log", title: "لاگ", subtitle: "Meetup برنامه‌نویسان", date: "۲۵ مهر ۱۴۰۳", members: 12, status: "در حال برنامه‌ریزی", tone: "blue", hue: 215 },
  { id: "ux", title: "طراحی تجربه کاربری", subtitle: "کارگاه آموزشی", date: "۳ آبان ۱۴۰۳", members: 9, status: "در حال برگزاری", tone: "blue", hue: 30 },
  { id: "frontend", title: "دورهمی فرانت‌اند", subtitle: "توسعه وب", date: "۱۱ آبان ۱۴۰۳", members: 15, status: "در حال برگزاری", tone: "blue", hue: 250 },
  { id: "pay", title: "رویداد پایدار", subtitle: "نشست تخصصی", date: "۲۰ آبان ۱۴۰۳", members: 6, status: "پیش‌نویس", tone: "gray", hue: 150 },
];

export const topics: Topic[] = [
  { id: "venue", eventId: "log", title: "انتخاب محل برگزاری", starter: "سارا", when: "۲ روز پیش", lastMessage: "علی: بودجه‌مون محدوده. مکان با ظرفیت ۹۰ نفر هم می‌تونه گزینه خوبی باشه.", messages: 18, people: 8, status: "در حال بحث", tone: "blue" },
  { id: "talks", eventId: "log", title: "برنامه‌ی سخنرانی‌ها", starter: "علی", when: "۳ روز پیش", lastMessage: "سارا: پیشنهاد می‌کنم سخنران اول درباره‌ی Next.js باشه.", messages: 12, people: 6, status: "در حال بحث", tone: "blue" },
  { id: "promo", eventId: "log", title: "تبلیغات و معرفی", starter: "مهدی", when: "۵ روز پیش", lastMessage: "مهدی: پوستر نهایی شد و برای انتشار آماده‌ست.", messages: 7, people: 5, status: "تصمیم‌گیری‌شده", tone: "green" },
  { id: "food", eventId: "log", title: "تدارکات و پذیرایی", starter: "نگین", when: "۶ روز پیش", lastMessage: "نگین: برای ۹۰ نفر پذیرایی سبک کافیه؟", messages: 4, people: 4, status: "در انتظار تصمیم", tone: "amber" },
];

export const getEvent = (id: string) => events.find((e) => e.id === id);
export const getTopics = (eventId: string) => topics.filter((t) => t.eventId === eventId);
