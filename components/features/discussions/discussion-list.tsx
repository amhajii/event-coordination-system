"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, MessageSquare, Plus, Users } from "lucide-react";

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
    <div className="flex flex-col gap-5 mx-25 my-18 w-full ">


      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
          <b className="text-xl font-black">بحث‌ها</b>
          <span className="text-xs text-gray-400">هر عضو می‌تواند درباره‌ی موضوعی تازه بحث را شروع کند</span>
        </div>
        <Button variant="secondary" className="cursor-pointer h-11 rounded-xl px-5" onClick={() => setOpen(true)}>
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
            className={`rounded-full cursor-pointer px-4 py-2 text-[13px] transition ${filter === f ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            {f} {count(f)}
          </button>
        ))}
      </div>




      <ul className={`flex flex-col gap-3 overflow-y-scroll ${ready ? "" : "opacity-0"}`}>
        {shown.map((t) => (
          <li key={t.id}>
            <Link href={`/events/${eventId}/discussions/${t.id}`} className="flex items-center gap-4 rounded-2xl bg-slate-50/50 px-8 py-9 transition hover:bg-gray-100">
              {/* <Avatar name={t.starter} /> */}
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <b className="text-[16px]">{t.title}</b>
                <span className="truncate text-[13px] text-gray-500">{t.lastMessage}</span>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{t.starter} · {t.when}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={14} />{t.messages} پیام</span>
                  <span className="flex items-center gap-1"><Users size={14} />{t.people} نفر</span>
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
