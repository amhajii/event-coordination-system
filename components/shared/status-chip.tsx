import type { Tone } from "@/lib/mock-data";

const tones: Record<Tone, string> = {
  blue: "bg-blue-400 ",
  amber: "bg-amber-500",
  green: "bg-green-500",
  gray: "bg-gray-500",


  // blue: "bg-gray-100 text-black",
  // amber: "bg-gray-100 text-black",
  // green: "bg-gray-100 text-black",
  // gray: "bg-gray-100 text-black",

};

export function StatusChip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`flex items-center gap-2 h-6 w-fit whitespace-nowrap rounded-full text-[0.70rem] px-3 py-0.5  md:px-3 md:py-1 md:text-[11px] bg-gray-100 text-black`}>
      <span className={`w-1 h-1 bg-amber-500 rounded-full ${tones[tone]}`}></span>
      {children}
    </span>
  );
}

