import { getProfessionalsByAreas } from "@/data/professionals";

export type ServiceSlug =
  | "nutrizione"
  | "fisioterapia"
  | "osteopatia"
  | "osteopatia-pediatrica"
  | "ortottica"
  | "logopedia"
  | "ostetricia"
  | "massoterapia";

export type Service = {
  slug: ServiceSlug;
  href: `/servizi/${ServiceSlug}`;
  title: string;
  kicker: string;
  shortDescription: string;
  intro: string;
  description: string;
  highlights: string[];
  audience: string[];
  whenHelpful: string[];
  relatedAreas: string[];
  pageNote: string;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "nutrizione",
    href: "/servizi/nutrizione",
    title: "Nutrizione",
    kicker: "Salute metabolica e alimentazione consapevole",
    shortDescription:
      "Percorsi nutrizionali personalizzati per benessere, prevenzione e performance.",
    intro:
      "Il servizio di nutrizione aiuta a costruire un percorso alimentare chiaro, sostenibile e coerente con le esigenze della persona.",
    description:
      "La pagina presenta la nutrizione come un servizio utile per chi vuole migliorare abitudini, composizione corporea, equilibrio alimentare o performance, con un approccio professionale e comprensibile.",
    highlights: [
      "Valutazione iniziale e definizione degli obiettivi",
      "Impostazione di un percorso alimentare personalizzato",
      "Supporto concreto al cambiamento delle abitudini",
    ],
    audience: [
      "Persone che vogliono migliorare il proprio equilibrio alimentare",
      "Sportivi o persone attive con obiettivi di performance",
      "Chi desidera un percorso strutturato e professionale",
    ],
    whenHelpful: [
      "Quando si vuole perdere o aumentare peso con un percorso guidato",
      "Quando si desidera migliorare l'organizzazione dell'alimentazione quotidiana",
      "Quando l'obiettivo riguarda energia, composizione corporea o performance",
    ],
    relatedAreas: ["Nutrizione"],
    pageNote:
      "La struttura della pagina e pensata per essere chiara fin da subito e pronta a futuri approfondimenti.",
    seoTitle: "Nutrizione",
    seoDescription:
      "Servizio di nutrizione di Virtus: percorsi alimentari personalizzati per salute, benessere e performance.",
  },
  {
    slug: "fisioterapia",
    href: "/servizi/fisioterapia",
    title: "Fisioterapia",
    kicker: "Recupero funzionale e prevenzione",
    shortDescription:
      "Trattamenti e percorsi pensati per recuperare movimento, funzionalita e qualita della vita.",
    intro:
      "Il servizio di fisioterapia supporta il recupero funzionale e aiuta a gestire dolore, limitazioni e ritorno alle attivita quotidiane o sportive.",
    description:
      "La fisioterapia viene presentata come un percorso professionale orientato alla valutazione del bisogno e alla costruzione di un lavoro personalizzato nel tempo.",
    highlights: [
      "Valutazione del quadro funzionale",
      "Percorsi personalizzati di recupero e mantenimento",
      "Supporto per dolore, limitazioni e ritorno all'attivita",
    ],
    audience: [
      "Persone con dolore o limitazioni funzionali",
      "Chi necessita di un percorso post-infortunio o post-operatorio",
      "Persone che vogliono prevenire ricadute e migliorare il movimento",
    ],
    whenHelpful: [
      "Quando un dolore o una limitazione interferiscono con la vita quotidiana",
      "Quando si sta recuperando dopo un infortunio o un intervento",
      "Quando si vuole tornare in attivita con maggiore sicurezza e continuita",
    ],
    relatedAreas: ["Fisioterapia"],
    pageNote:
      "Il contenuto resta semplice ma piu utile per capire rapidamente se il servizio e adatto al proprio bisogno.",
    seoTitle: "Fisioterapia",
    seoDescription:
      "Servizio di fisioterapia di Virtus: recupero funzionale, prevenzione e supporto personalizzato.",
  },
  {
    slug: "osteopatia",
    href: "/servizi/osteopatia",
    title: "Osteopatia",
    kicker: "Equilibrio, mobilita e approccio globale",
    shortDescription:
      "Un supporto mirato per accompagnare la persona nel recupero dell'equilibrio funzionale.",
    intro:
      "L'osteopatia viene presentata come un servizio dedicato alla persona nella sua globalita, con attenzione alla mobilita e all'equilibrio funzionale.",
    description:
      "La pagina chiarisce in modo diretto cosa comunica il servizio: ascolto del bisogno, approccio personalizzato e integrazione possibile con altri professionisti del centro.",
    highlights: [
      "Approccio personalizzato in base al bisogno",
      "Attenzione alla mobilita e all'equilibrio funzionale",
      "Percorso integrabile con altri servizi del centro",
    ],
    audience: [
      "Persone con fastidi muscolo-scheletrici ricorrenti",
      "Chi cerca un supporto complementare nel proprio percorso di benessere",
      "Pazienti che desiderano un approccio globale e coordinato",
    ],
    whenHelpful: [
      "Quando si percepiscono tensioni o rigidita ricorrenti",
      "Quando si desidera un approccio piu globale al proprio benessere",
      "Quando si vuole affiancare il lavoro di altre figure professionali del centro",
    ],
    relatedAreas: ["Osteopatia"],
    pageNote:
      "La pagina e pronta a ospitare in seguito approfondimenti specifici, ma gia adesso e utile per orientare il primo contatto.",
    seoTitle: "Osteopatia",
    seoDescription:
      "Servizio di osteopatia di Virtus: supporto personalizzato per equilibrio, mobilita e benessere.",
  },
  {
    slug: "osteopatia-pediatrica",
    href: "/servizi/osteopatia-pediatrica",
    title: "Osteopatia pediatrica",
    kicker: "Supporto dedicato ai piu piccoli",
    shortDescription:
      "Una pagina pensata per comunicare attenzione, delicatezza e orientamento alle famiglie.",
    intro:
      "L'osteopatia pediatrica e presentata con un tono rassicurante, chiaro e attento alle esigenze delle famiglie.",
    description:
      "Questa pagina aiuta genitori e caregiver a capire rapidamente il taglio del servizio e la possibilita di richiedere informazioni in modo semplice.",
    highlights: [
      "Approccio delicato e orientato all'eta evolutiva",
      "Comunicazione chiara con la famiglia",
      "Possibile integrazione con altre figure del centro",
    ],
    audience: [
      "Famiglie che desiderano un confronto professionale",
      "Genitori in cerca di una presa in carico attenta e chiara",
      "Percorsi integrati con altre figure del centro se necessario",
    ],
    whenHelpful: [
      "Quando una famiglia vuole ricevere un orientamento professionale chiaro",
      "Quando si cerca un approccio delicato e centrato sul bambino",
      "Quando e utile confrontarsi con un centro che lavora in modo multidisciplinare",
    ],
    relatedAreas: ["Osteopatia pediatrica"],
    pageNote:
      "La struttura e gia adatta a futuri approfondimenti dedicati ai dubbi piu frequenti delle famiglie.",
    seoTitle: "Osteopatia pediatrica",
    seoDescription:
      "Servizio di osteopatia pediatrica di Virtus: un approccio professionale e delicato pensato per le famiglie.",
  },
  {
    slug: "ortottica",
    href: "/servizi/ortottica",
    title: "Ortottica",
    kicker: "Benessere visivo e valutazione specialistica",
    shortDescription:
      "Presentazione essenziale del servizio per intercettare richieste informative in modo chiaro.",
    intro:
      "Il servizio di ortottica viene presentato in modo semplice per aiutare famiglie e adulti a capire quando puo essere utile richiedere informazioni.",
    description:
      "La pagina valorizza la presenza di professioniste dedicate e costruisce una base chiara per futuri approfondimenti sui percorsi del servizio.",
    highlights: [
      "Servizio specialistico integrato nel centro",
      "Comunicazione chiara per famiglie e adulti",
      "Pagina pronta per ampliare contenuti e casi trattati",
    ],
    audience: [
      "Famiglie che cercano una valutazione specialistica",
      "Adulti che necessitano di approfondimento o supporto visivo",
      "Persone che vogliono informazioni rapide e affidabili",
    ],
    whenHelpful: [
      "Quando si desidera capire se e utile una valutazione specialistica",
      "Quando si cercano informazioni chiare prima del primo contatto",
      "Quando serve un centro che presenti il servizio senza tecnicismi inutili",
    ],
    relatedAreas: ["Ortottica"],
    pageNote:
      "L'impostazione resta essenziale ma piu utile per accompagnare l'utente verso la richiesta di informazioni.",
    seoTitle: "Ortottica",
    seoDescription:
      "Servizio di ortottica di Virtus: informazioni chiare per famiglie e adulti che cercano supporto specialistico.",
  },
  {
    slug: "logopedia",
    href: "/servizi/logopedia",
    title: "Logopedia",
    kicker: "Comunicazione, linguaggio e supporto mirato",
    shortDescription:
      "Uno spazio chiaro per presentare il servizio e favorire il primo contatto con il centro.",
    intro:
      "La pagina logopedia aiuta a capire rapidamente il taglio del servizio e rende piu semplice il primo contatto con il centro.",
    description:
      "Il servizio viene raccontato con un linguaggio accessibile, mantenendo un tono professionale e utile per famiglie e utenti che cercano orientamento.",
    highlights: [
      "Presentazione semplice del servizio",
      "Focus sul valore del confronto professionale",
      "Pagina pronta a futuri approfondimenti specifici",
    ],
    audience: [
      "Famiglie che cercano orientamento sul servizio",
      "Persone che desiderano maggiori informazioni prima del contatto",
      "Utenti che apprezzano una presentazione chiara e rassicurante",
    ],
    whenHelpful: [
      "Quando si desidera un primo orientamento sul servizio",
      "Quando si vuole capire se confrontarsi con una professionista puo essere utile",
      "Quando si cerca una spiegazione semplice e leggibile",
    ],
    relatedAreas: ["Logopedia"],
    pageNote:
      "La struttura coerente con gli altri servizi mantiene il sito ordinato e facilita l'espansione futura.",
    seoTitle: "Logopedia",
    seoDescription:
      "Servizio di logopedia di Virtus: una presentazione chiara per famiglie e utenti che cercano un primo orientamento.",
  },
  {
    slug: "ostetricia",
    href: "/servizi/ostetricia",
    title: "Ostetricia",
    kicker: "Supporto alla donna e ai percorsi di maternita",
    shortDescription:
      "Una base solida per comunicare il servizio in modo professionale e orientato alla fiducia.",
    intro:
      "Il servizio di ostetricia e raccontato con un tono accogliente e professionale, pensato per accompagnare il primo contatto con chiarezza.",
    description:
      "La pagina mette al centro la relazione, la leggibilita del servizio e la possibilita di richiedere informazioni senza barriere o passaggi complessi.",
    highlights: [
      "Presentazione chiara del servizio",
      "Tono accogliente e professionale",
      "Perfetta per future integrazioni con percorsi dedicati",
    ],
    audience: [
      "Donne che cercano un primo contatto informativo",
      "Persone interessate a un percorso seguito da professioniste del centro",
      "Utenti che vogliono capire rapidamente come essere ricontattati",
    ],
    whenHelpful: [
      "Quando si vuole un primo confronto con un servizio dedicato",
      "Quando si cerca una comunicazione chiara e rassicurante",
      "Quando si desidera essere orientati verso il percorso piu adatto",
    ],
    relatedAreas: ["Ostetricia"],
    pageNote:
      "La struttura attuale permette di presentare bene il servizio gia da ora, lasciando spazio a future estensioni.",
    seoTitle: "Ostetricia",
    seoDescription:
      "Servizio di ostetricia di Virtus: informazioni chiare e primo contatto semplice per orientarsi al meglio.",
  },
  {
    slug: "massoterapia",
    href: "/servizi/massoterapia",
    title: "Massoterapia",
    kicker: "Trattamento manuale e benessere muscolare",
    shortDescription:
      "Una pagina orientata alla conversione per presentare il servizio con immediatezza.",
    intro:
      "La massoterapia viene presentata in modo diretto per aiutare le persone a capire subito se puo essere il servizio giusto da cui partire.",
    description:
      "La pagina mette in evidenza beneficio percepito, professionalita del centro e facilita di contatto, senza sovraccaricare di contenuti.",
    highlights: [
      "Servizio presentato in modo immediato e comprensibile",
      "Integrazione naturale con salute e benessere",
      "Pagina pronta per evolvere con ulteriori dettagli",
    ],
    audience: [
      "Persone che cercano sollievo e benessere muscolare",
      "Utenti che desiderano un primo contatto informativo",
      "Clienti interessati a un centro con piu specializzazioni",
    ],
    whenHelpful: [
      "Quando si desidera intervenire su tensioni o affaticamento muscolare",
      "Quando si cerca un primo orientamento sul servizio",
      "Quando si preferisce un contatto semplice prima di approfondire",
    ],
    relatedAreas: ["Massoterapia"],
    pageNote:
      "Il focus resta avere una pagina pulita, credibile e subito utile alla conversione.",
    seoTitle: "Massoterapia",
    seoDescription:
      "Servizio di massoterapia di Virtus: una pagina chiara per richiedere informazioni e orientarsi al primo contatto.",
  },
];

export function getServiceBySlug(slug: ServiceSlug) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Service not found: ${slug}`);
  }

  return service;
}

export function getServiceProfessionals(service: Service) {
  return getProfessionalsByAreas(service.relatedAreas);
}
