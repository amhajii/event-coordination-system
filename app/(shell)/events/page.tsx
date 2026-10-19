import Link from "next/link";
import { ArrowUpLeft, CalendarDays, Users } from "lucide-react";
import { EventCover } from "@/components/features/events/event-cover";
import { StatusChip } from "@/components/shared/status-chip";
import { events } from "@/lib/mock-data";


export default function EventsPage() {



  const activeEvents = events.filter((event) => event.tone === "blue").length;
  const draftEvents = events.filter((event) => event.status === "پیش‌نویس").length;

  return (
    <section dir="rtl" className="flex min-w-0 flex-1 flex-col gap-7 bg-white px-8 py-9">
   
      <header>
        <p className="mb-2 text-sm font-medium text-blue-600">فضای کاری شما</p>
        <h1 className="text-2xl font-bold text-gray-900">رویدادهای شما</h1>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          همه‌ی رویدادها و برنامه‌ریزی‌های تیمتان را از اینجا دنبال کنید.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <span className="text-xs text-gray-500">همه‌ی رویدادها</span>
          <p className="mt-2 text-2xl font-bold text-gray-900">{events.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <span className="text-xs text-gray-500">در جریان</span>
          <p className="mt-2 text-2xl font-bold text-blue-600">{activeEvents}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <span className="text-xs text-gray-500">پیش‌نویس</span>
          <p className="mt-2 text-2xl font-bold text-gray-900">{draftEvents}</p>
        </div>
      </div>



      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">فهرست رویدادها</h2>
          <span className="text-xs text-gray-400">{events.length} رویداد</span>
        </div>

        <ul className="flex flex-col gap-3">
          {events.map((event) => (
            <li key={event.id}>
              <Link
                href={`/events/${event.id}/discussions`}
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 p-3 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <EventCover hue={event.hue} className="h-14 w-14 rounded-xl" />
                
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-sm font-bold text-gray-900">{event.title}</h3>
                    <StatusChip tone={event.tone}>{event.status}</StatusChip>
                  </div>
                  <p className="mt-1 truncate text-xs text-gray-500">{event.subtitle}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={13} />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={13} />
                      {event.members} عضو
                    </span>
                  </div>
                </div>

                <ArrowUpLeft
                  size={17}
                  className="mx-5 shrink-0 text-gray-400 transition group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
