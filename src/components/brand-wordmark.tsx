type BrandWordmarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandWordmark({
  compact = false,
  light = false,
}: BrandWordmarkProps) {
  const titleClass = compact ? "text-2xl" : "text-3xl";
  const titleToneClass = light ? "text-white" : "text-brand-dark";
  const subtitleToneClass = light ? "text-white/65" : "text-foreground/50";

  return (
    <div className="flex flex-col">
      <span className={`font-display leading-none tracking-[0.04em] ${titleClass} ${titleToneClass}`}>
        Virtus
      </span>
      <span
        className={`mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${subtitleToneClass}`}
      >
        Salute benessere performance
      </span>
    </div>
  );
}
