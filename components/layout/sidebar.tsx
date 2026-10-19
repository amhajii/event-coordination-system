import { Calendar, Settings, Users } from "lucide-react";
import { Avatar } from "../shared/avatar";

const items = [
  { label: "رویدادها", icon: Calendar, active: true },
  { label: "اعضا", icon: Users, active: false },
  { label: "تنظیمات", icon: Settings, active: false },
];

export function Sidebar() {
  return (
    <aside dir="rtl" className="flex w-[220px] shrink-0 flex-col gap-8 bg-gray-50 px-4 py-8">
      <span className="px-3.5 text-xl font-bold tracking-wide flex flex-row-reverse" >Event Manager</span>
      <nav className="flex flex-col gap-1.5">
        {items.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-sm ${
              active ? "bg-blue-50 text-blue-600" : "text-gray-600"
            } ${active ? "cursor-pointer" : "cursor-not-allowed hover:bg-gray-100"}`}
          >
            <Icon size={19} />
            {label}
          </div>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2.5 px-3.5 text-[13px]">
        <Avatar name="امیرعلی" size={32} />
        امیرعلی
      </div>
    </aside>
  );
}
