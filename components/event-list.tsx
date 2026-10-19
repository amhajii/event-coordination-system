"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { MoreVertical, Plus, Search } from "lucide-react";
import { events } from "@/lib/mock-data";
import { EventCover } from "./features/events/event-cover";
import { StatusChip } from "./shared/status-chip";

export function EventList() {
  const { id } = useParams<{ id?: string }>();
  return (
    <main dir="rtl" className="flex min-w-0 flex-1 flex-col gap-6 px-7 py-8">
    
    
      <div className="flex gap-2.5">
        <div className="flex min-h-11 flex-1 items-center gap-2.5 rounded-xl bg-gray-100 px-4 text-[13px] text-gray-400">
          <Search size={16} />
          جستجو در رویدادها…
        </div>
        <button aria-label="رویداد جدید" className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600">
          <Plus size={18} />
        </button>
      </div>


      <div>
        <h1 className="text-[22px] font-bold">رویدادها</h1>
        <span className="text-xs text-gray-400">{events.length} مورد</span>
      </div>


      <ul className="flex flex-col gap-2">
        {events.map((e) => (

          <li key={e.id}>
            <Link
              href={`/events/${e.id}/discussions`}
              className={`flex items-center gap-3.5 rounded-2xl p-4 transition hover:bg-gray-50 ${
                id === e.id ? "bg-blue-50/70" : ""
              }`}
            >
              <EventCover hue={e.hue} className="h-15 w-16 rounded-xl" />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-[16px] font-bold">{e.title}</span>
                <span className="text-xs text-gray-400">{e.subtitle}</span>
                <div className="flex items-center gap-2.5 text-[11px] text-gray-400">
                  {e.date}
                  <StatusChip tone={e.tone}>{e.status}</StatusChip>
                </div>
              </div>
              <MoreVertical size={18} className="text-gray-400 mx-2" />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
