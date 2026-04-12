import { SectionHeading } from "@/components/section-heading";

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-border/70 bg-white p-8 shadow-[var(--shadow)]">
        <SectionHeading
          eyebrow="Privacy Policy"
          title="Informativa privacy provvisoria da completare con i dati definitivi."
          description="Questa pagina e stata predisposta come placeholder strutturato. Prima della pubblicazione va validata con i dati reali del titolare del trattamento."
        />

        <div className="mt-8 space-y-6 text-sm leading-8 text-foreground/80">
          <p>
            Titolare del trattamento: <strong>[RAGIONE SOCIALE / TITOLARE]</strong>.
          </p>
          <p>
            Contatti privacy: <strong>[EMAIL PRIVACY]</strong>.
          </p>
          <p>
            Finalita del trattamento: gestione delle richieste inviate dal sito,
            ricontatto informativo e obblighi amministrativi eventualmente connessi.
          </p>
          <p>
            Base giuridica, tempi di conservazione, destinatari dei dati e diritti
            dell&apos;interessato devono essere completati prima del go-live.
          </p>
        </div>
      </div>
    </div>
  );
}
