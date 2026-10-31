"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { NewTopicDialog } from "@/components/shared/new-topic-dialog";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import DiscussionCard from "./discussion-card";

const filters = ["همه", "در حال بحث", "در انتظار تصمیم", "تصمیم‌گیری‌شده"];


export function DiscussionList({ eventId }: { eventId: string }) {
  const { topics, ready } = useStore();
  const [filter, setFilter] = useState("همه");
  const [open, setOpen] = useState(false);

  const mine = topics.filter((t) => t.eventId === eventId);
  const count = (f: string) => (f === "همه" ? mine.length : mine.filter((t) => t.status === f).length);
  const shown = filter === "همه" ? mine : mine.filter((t) => t.status === filter);

  return (
    <div className="flex flex-col gap-5 px-6 py-8 md:px-25 md:py-18 w-full ">
      
      {/*== Banner ==*/}
      <div
       className="w-full h-20 rounded-b-0 bg-[#036aa115] absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
       style={{
          backgroundImage: "url('/images/001.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
       >
      </div>


      <div className="flex md:items-center mt-18 gap-6 md:justify-between mb-3 flex-col justify-stretch md:flex-row">
        
        <div className="flex flex-col">
          <b className="md:text-xl text-xl font-black">بحث‌ها</b>
          <span className="md:text-xs text-xs text-gray-400">هر عضو می‌تواند تازه بحث ای را شروع کند</span>
        </div>

        <Button variant="secondary" className="cursor-pointer rounded-xl text-sm h-11 px-3  md:h-11 md:px-5" onClick={() => setOpen(true)}>
          <Plus size={16} />
          بحث جدید
        </Button>
        
      </div>


      {/*== Filter ==*/}
      <div className="flex justify-center flex-wrap gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`flex gap-1 rounded-full cursor-pointer px-2.5 py-1.5 text-xs  md:px-4 md:py-2 md:text-[13px] transition ${filter === f ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 "}`}
            >
            {/* <span>{count(f)} </span> */}
            <span>{f} </span>
          </button>
        ))}
      </div>


      <ul className={`flex flex-col gap-3 h-200  ${ready ? "" : "opacity-0"}`}>

        {shown.map((t) => (
          <li key={t.id}>
            <DiscussionCard href={`/events/${eventId}/discussions/${t.id}`} data={t} />
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
