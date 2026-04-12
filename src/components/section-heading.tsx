type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-3xl leading-tight text-brand-dark sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-8 text-foreground/75">{description}</p>
      ) : null}
    </div>
  );
}
