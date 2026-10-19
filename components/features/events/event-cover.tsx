// تصویر موقت رویداد: گرادیان بر اساس hue. بعداً با عکس واقعی (next/image) عوض می‌شود.
export function EventCover({ hue, className = "" }: { hue: number; className?: string }) {
  return (
    <div
      className={`shrink-0 ${className}`}
      style={{ background: `linear-gradient(135deg, hsl(${hue} 30% 70%), hsl(${hue} 30% 40%))` }}
      aria-hidden
    />
  );
}
