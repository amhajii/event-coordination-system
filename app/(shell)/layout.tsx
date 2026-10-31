import { EventList , Sidebar } from "@/components/index";

import { StoreProvider } from "@/lib/store";

// StoreProvider حالت محلی (بحث‌ها، پیام‌ها، تصمیم‌ها) را برای همه‌ی صفحات نگه می‌دارد.
export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <div dir="ltr" className="h-screen bg-blue-400 ">
        <div className="relative bg-white flex w-screen mx-auto overflow-hidden">
          {/* <Sidebar /> */}
          {/* <EventList /> */}
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}
