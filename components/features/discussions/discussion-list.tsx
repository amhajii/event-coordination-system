"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Plus, Users ,CalendarDays, Clock  } from "lucide-react";

import { Avatar } from "@/components/shared/avatar";
import { NewTopicDialog } from "@/components/shared/new-topic-dialog";
import { StatusChip } from "@/components/shared/status-chip";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";

const filters = ["همه", "در حال بحث", "در انتظار تصمیم", "تصمیم‌گیری‌شده"];

export function DiscussionList({ eventId }: { eventId: string }) {
  const { topics, ready } = useStore();
  const [filter, setFilter] = useState("همه");
  const [open, setOpen] = useState(false);

  const mine = topics.filter((t) => t.eventId === eventId);
  const count = (f: string) => (f === "همه" ? mine.length : mine.filter((t) => t.status === f).length);
  const shown = filter === "همه" ? mine : mine.filter((t) => t.status === filter);

  return (
    <div className="flex flex-col gap-5   px-8 py-10   md:px-25 md:py-18 w-full ">


      <div className="flex md:items-center gap-6 md:justify-between mb-3 flex-col justify-stretch md:flex-row">
        <div className="flex flex-col">
          <b className="md:text-xl text-xl font-black">بحث‌ها</b>
          <span className="md:text-xs text-xs text-gray-400">هر عضو می‌تواند تازه بحث ای را شروع کند</span>
        </div>
        <Button variant="secondary" className="cursor-pointer rounded-xl text-sm h-11 px-3  md:h-11 md:px-5" onClick={() => setOpen(true)}>
          <Plus size={16} />
          بحث جدید
        </Button>
      </div>


      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full cursor-pointer px-2.5 py-1.5 text-xs  md:px-4 md:py-2 md:text-[13px] transition ${filter === f ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {f} {count(f)}
          </button>
        ))}
      </div>




      <ul className={`flex flex-col gap-3 h-200  ${ready ? "" : "opacity-0"}`}>
        {shown.map((t) => (
          <li key={t.id}>

            <Link href={`/events/${eventId}/discussions/${t.id}`} className="flex md:items-center gap-4 rounded-2xl bg-gray-50/50 px-7 py-7  md:px-8 md:py-9 transition hover:bg-gray-100">

              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <b className="text-[16px]">{t.title}</b>
                <span className="truncate text-[13px] text-gray-500">{t.lastMessage}</span>
                <div className="flex flex-col mbs-2 md:my-0 md:items-center md:flex-row gap-1 md:gap-4 font-light text-[0.70rem] md:text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={12} />{t.starter} · {t.when}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={11} />{t.messages} پیام</span>
                  <span className="flex items-center gap-1"><Users size={11} />{t.people} نفر</span>
                </div>
              </div>

              <div>
                <StatusChip tone={t.tone}>{t.status}</StatusChip>
              </div>
              {/* <ChevronLeft size={18} className="text-gray-400 rtl:rotate-180 me-5" /> */}
              
            </Link>
          </li>
        ))}
        {ready && shown.length === 0 && (
          <li className="rounded-2xl bg-slate-50 p-6 text-center text-sm text-gray-400">بحثی با این وضعیت وجود ندارد.</li>
        )}
        <li>
          <button type="button" onClick={() => setOpen(true)} className="flex cursor-pointer w-full items-center gap-3 rounded-2xl border-[1.5px] border-dashed border-gray-300 px-5 py-[18px] text-sm text-gray-500 transition mb-10 hover:border-blue-400 hover:text-blue-600">
            <Plus size={18} />
            شروع بحث جدید درباره‌ی موضوعی دیگر…
          </button>
        </li>
      </ul>



      <NewTopicDialog eventId={eventId} open={open} onOpenChange={setOpen} />
    </div>
  );
}
