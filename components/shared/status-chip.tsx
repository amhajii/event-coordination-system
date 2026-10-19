import type { Tone } from "@/lib/mock-data";

const tones: Record<Tone, string> = {
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-green-100 text-green-700",
  gray: "bg-gray-100 text-gray-500",
};

export function StatusChip({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] ${tones[tone]}`}>
      {children}
    </span>
  );
}
