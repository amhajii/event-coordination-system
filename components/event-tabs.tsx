"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckSquare, Info, MessageSquare, Star, Wallet } from "lucide-react";

const tabs = [
  { slug: "discussions", label: "بحث‌ها", icon: MessageSquare },
  { slug: "finance", label: "مالی", icon: Wallet },
  { slug: "tasks", label: "مأموریت‌ها", icon: CheckSquare },
  { slug: "decisions", label: "تصمیم‌ها", icon: Star },
  { slug: "info", label: "اطلاعات", icon: Info },
];

export function EventTabs({ eventId }: { eventId: string }) {
  const pathname = usePathname();
  return (
    <div className="flex justify-center border-b border-gray-100 pt-3">
      <nav className="-mb-6 flex rounded-full bg-white px-4 shadow-[0_4px_18px_rgba(0,0,0,.07)]">
        {tabs.map(({ slug, label, icon: Icon }) => {
          const active = pathname.startsWith(`/events/${eventId}/${slug}`);
          return (
            <Link
              key={slug}
              href={`/events/${eventId}/${slug}`}
              className={`flex min-h-12 items-center gap-2 border-b-2 px-4 text-sm ${
                active ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500"
              }`}
            >
              <Icon size={17} />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
