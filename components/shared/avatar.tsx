// آواتار موقت با حرف اول نام؛ بعداً با عکس واقعی جایگزین می‌شود.
const palette = ["#B8C4D6", "#C7B8E0", "#B5DCC6", "#F1CFA8", "#A9C0E0"];

export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const bg = palette[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % palette.length];
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full font-medium text-gray-700"
      style={{ width: size, height: size, background: bg, fontSize: size * 0.4 }}
      aria-hidden
    >
      {name[0]}
    </span>
  );
}
