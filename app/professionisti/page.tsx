import { SectionHeading } from "@/components/section-heading";
import { professionals } from "@/data/professionals";

const groupedProfessionals = Object.entries(
  professionals.reduce<Record<string, typeof professionals>>((groups, professional) => {
    const key = professional.area;
    groups[key] ??= [];
    groups[key].push(professional);
    return groups;
  }, {}),
);

export default function ProfessionalsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Professionisti"
          title="Un team costruito per offrire competenze complementari."
          description="Nomi, aree e struttura della pagina sono gia pronti per aggiungere in seguito bio, immagini e disponibilita."
        />

        <div className="mt-10 space-y-8">
          {groupedProfessionals.map(([group, members]) => (
            <section
              key={group}
              className="rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-[var(--shadow)]"
            >
              <div className="flex flex-col gap-2 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-semibold text-brand-dark">{group}</h2>
                <p className="text-sm text-foreground/70">
                  {members.length} professionist{members.length > 1 ? "i" : "a"}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {members.map((professional) => (
                  <article
                    key={professional.name}
                    className="rounded-[1.25rem] border border-border/60 bg-surface-muted p-5"
                  >
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {professional.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/75">
                      {professional.role}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
