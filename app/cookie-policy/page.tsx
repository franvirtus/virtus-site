import { SectionHeading } from "@/components/section-heading";

export default function CookiePolicyPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
        <SectionHeading
          eyebrow="Cookie Policy"
          title="Pagina base pronta per la configurazione finale dei cookie."
          description="Per ora il sito e impostato come vetrina semplice. La cookie policy va completata quando saranno confermati strumenti di analytics, mappe o integrazioni esterne."
        />

        <div className="mt-8 space-y-6 text-sm leading-8 text-foreground/80">
          <p>
            Cookie tecnici: <strong>[DA CONFERMARE]</strong>.
          </p>
          <p>
            Cookie analitici: <strong>[DA CONFERMARE]</strong>.
          </p>
          <p>
            Servizi terzi presenti sul sito: <strong>[DA CONFERMARE]</strong>.
          </p>
          <p>
            Inserire qui il riferimento al banner cookie e alla piattaforma di gestione
            del consenso quando verranno attivati.
          </p>
        </div>
      </div>
    </div>
  );
}
