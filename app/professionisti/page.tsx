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
        <div className="border-b border-border/60 pb-10">
          <SectionHeading
            eyebrow="Professionisti"
            title="Un team multidisciplinare presentato in modo piu ordinato, leggibile e professionale."
            description="La pagina e costruita per valorizzare il gruppo di lavoro con una struttura piu pulita, mantenendo il progetto semplice e facile da espandere."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border-l-2 border-brand/12 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Professionisti attivi
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {activeProfessionals.length}
              </p>
            </div>
            <div className="border-l-2 border-brand/12 pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                Aree presenti
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {groupedProfessionals.length}
              </p>
            </div>
            <div className="border-l-2 border-brand/12 pl-4">
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
              className="border-t border-border/60 pt-6"
            >
              <div className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Area
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-brand-dark">{group}</h2>
                </div>
                <span className="inline-flex border border-brand/10 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                  {members.length} professionist{members.length > 1 ? "i" : "a"}
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {members.map((professional) => (
                  <article
                    key={professional.name}
                    className="border-l border-border/60 pl-4"
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

        <section className="mt-10 border-t border-border/60 pt-6">
          <div className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                Profili non ancora assegnati
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-brand-dark">
                Area in aggiornamento
              </h2>
            </div>
            <span className="inline-flex border border-brand/15 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
              In aggiornamento
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {updatingProfessionals.map((professional) => (
              <article
                key={professional.name}
                className="border-l border-dashed border-border pl-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight text-brand-dark">
                    {professional.name}
                  </h3>
                  <span className="border border-brand/15 bg-brand-soft px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-dark">
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
