import { SectionHeading } from "@/components/section-heading";
import { professionals } from "@/data/professionals";

const activeProfessionals = professionals.filter((professional) => !professional.isUpdating);
const updatingProfessionals = professionals.filter((professional) => professional.isUpdating);

const groupedProfessionals = Object.entries(
  activeProfessionals.reduce<Record<string, typeof activeProfessionals>>(
    (groups, professional) => {
      const key = professional.area;
      groups[key] ??= [];
      groups[key].push(professional);
      return groups;
    },
    {},
  ),
);

export default function ProfessionalsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-border/70 bg-white px-6 py-10 shadow-[0_24px_52px_rgba(15,61,56,0.06)] sm:px-8">
          <SectionHeading
            eyebrow="Professionisti"
            title="Un team multidisciplinare presentato in modo piu ordinato, leggibile e professionale."
            description="La pagina e costruita per valorizzare il gruppo di lavoro con una struttura piu pulita, mantenendo il progetto semplice e facile da espandere."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.4rem] border border-border/60 bg-surface-muted px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Professionisti attivi
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {activeProfessionals.length}
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-border/60 bg-surface-muted px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Aree presenti
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {groupedProfessionals.length}
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-border/60 bg-surface-muted px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Profili in aggiornamento
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {updatingProfessionals.length}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {groupedProfessionals.map(([group, members]) => (
            <section
              key={group}
              className="rounded-[1.9rem] border border-border/70 bg-white p-7 shadow-[0_18px_40px_rgba(15,61,56,0.05)]"
            >
              <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Area
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-brand-dark">{group}</h2>
                </div>
                <span className="inline-flex rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                  {members.length} professionist{members.length > 1 ? "i" : "a"}
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {members.map((professional) => (
                  <article
                    key={professional.name}
                    className="rounded-[1.5rem] border border-border/60 bg-surface-muted px-5 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                      {professional.area}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-dark">
                      {professional.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/74">
                      {professional.role}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[1.9rem] border border-border/70 bg-white p-7 shadow-[0_18px_40px_rgba(15,61,56,0.05)]">
          <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                Profili non ancora assegnati
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-brand-dark">
                Area in aggiornamento
              </h2>
            </div>
            <span className="inline-flex rounded-full border border-brand/15 bg-brand-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
              In aggiornamento
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {updatingProfessionals.map((professional) => (
              <article
                key={professional.name}
                className="rounded-[1.5rem] border border-dashed border-border bg-surface-muted px-5 py-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight text-brand-dark">
                    {professional.name}
                  </h3>
                  <span className="rounded-full border border-brand/15 bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-dark">
                    Area in aggiornamento
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground/72">
                  {professional.role}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
