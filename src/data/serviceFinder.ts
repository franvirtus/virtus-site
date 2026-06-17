// Dati per il componente ServiceFinder (orientamento interattivo).
// IMPORTANTE: questo strumento ha funzione orientativa, non diagnostica.
// Non usare mai linguaggio diagnostico nei testi dei risultati.

export const FINDER_DISCLAIMER =
  "Questo strumento ha solo funzione orientativa e non sostituisce una valutazione professionale.";

export type FinderStep = {
  id: string;
  question: string;
  choices: FinderChoice[];
};

export type FinderChoice = {
  id: string;
  label: string;
  /** step id → prossima domanda; "result:xxx" → risultato finale */
  next: string;
};

export type FinderResult = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctas: { label: string; href: string; primary?: boolean }[];
};

// ────────────────────────────────────────────────────
// STEPS (albero delle domande)
// ────────────────────────────────────────────────────

export const finderSteps: Record<string, FinderStep> = {
  start: {
    id: "start",
    question: "Qual è il tuo bisogno principale?",
    choices: [
      { id: "schiena",      label: "Mal di schiena",                           next: "schiena-dove" },
      { id: "cervicale",    label: "Dolore cervicale",                          next: "result:fisio-osteo" },
      { id: "articolare",   label: "Dolore a spalla, ginocchio o anca",         next: "result:fisioterapia" },
      { id: "infortunio",   label: "Recupero da infortunio",                    next: "result:fisioterapia" },
      { id: "postura",      label: "Postura o qualità del movimento",            next: "postura-obiettivo" },
      { id: "alimentazione",label: "Alimentazione, peso o sport",               next: "result:nutrizione" },
      { id: "gravidanza",   label: "Gravidanza o post-parto",                   next: "result:ostetricia" },
      { id: "bambino",      label: "Bambino: linguaggio, sviluppo o vista",     next: "bambino-cosa" },
      { id: "altro",        label: "Altro / non saprei",                        next: "result:orientamento" },
    ],
  },

  "schiena-dove": {
    id: "schiena-dove",
    question: "Dove senti principalmente il dolore?",
    choices: [
      { id: "lombare",   label: "Zona lombare",              next: "schiena-come" },
      { id: "dorsale",   label: "Zona dorsale (tra le spalle)",next: "schiena-come" },
      { id: "cervicale", label: "Zona cervicale (collo)",    next: "result:fisio-osteo" },
      { id: "tutta",     label: "Tutta la schiena",          next: "schiena-come" },
      { id: "non-so",    label: "Non saprei definirlo bene", next: "result:orientamento" },
    ],
  },

  "schiena-come": {
    id: "schiena-come",
    question: "Com'è iniziato il dolore?",
    choices: [
      { id: "sforzo",     label: "Dopo uno sforzo o movimento preciso",  next: "result:fisioterapia" },
      { id: "graduale",   label: "Gradualmente, senza causa chiara",     next: "result:osteopatia" },
      { id: "seduto",     label: "Dopo tante ore seduto o in piedi",     next: "result:osteopatia" },
      { id: "sport",      label: "Dopo sport o allenamento",             next: "result:fisioterapia" },
      { id: "trauma",     label: "Dopo un trauma o una caduta",          next: "result:fisioterapia" },
      { id: "ricorrente", label: "È un problema ricorrente da tempo",    next: "result:osteopatia" },
    ],
  },

  "postura-obiettivo": {
    id: "postura-obiettivo",
    question: "Cosa vorresti migliorare?",
    choices: [
      { id: "dolore",    label: "Ridurre un dolore legato alla postura",          next: "result:fisioterapia" },
      { id: "movimento", label: "Migliorare la qualità del movimento quotidiano",  next: "result:fisioterapia" },
      { id: "sport",     label: "Tornare ad allenarmi o migliorare le prestazioni",next: "result:fisioterapia" },
      { id: "prevenire", label: "Prevenire problemi in modo generale",            next: "result:osteopatia" },
      { id: "non-so",    label: "Non saprei con precisione",                      next: "result:orientamento" },
    ],
  },

  "bambino-cosa": {
    id: "bambino-cosa",
    question: "Di cosa ha bisogno tuo figlio?",
    choices: [
      { id: "linguaggio", label: "Linguaggio, voce o comunicazione",      next: "result:logopedia" },
      { id: "vista",      label: "Vista o problemi alla visione",         next: "result:ortottica" },
      { id: "sviluppo",   label: "Sviluppo motorio, postura o crescita",  next: "result:osteopedia" },
      { id: "altro",      label: "Altro / non sono sicuro",               next: "result:orientamento" },
    ],
  },
};

// ────────────────────────────────────────────────────
// RESULTS
// ────────────────────────────────────────────────────

// Aggiorna whatsappHref con il numero reale del centro
const WA = "https://wa.me/390000000000";

export const finderResults: Record<string, FinderResult> = {
  fisioterapia: {
    id: "fisioterapia",
    title: "Valutazione fisioterapica",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile partire da una valutazione fisioterapica. Il fisioterapista può aiutarti a valutare dolore, mobilità, forza e funzione, costruendo un percorso adatto al tuo caso — che si tratti di recupero, riabilitazione o ritorno all'attività.",
    ctas: [
      { label: "Prenota una valutazione", href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",    href: WA },
      { label: "Scopri la fisioterapia",  href: "/servizi/fisioterapia" },
    ],
  },

  osteopatia: {
    id: "osteopatia",
    title: "Valutazione osteopatica",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile partire da una valutazione osteopatica. L'osteopata può valutare mobilità, tensioni, compensi e la relazione tra diverse aree del corpo — soprattutto quando il problema è ricorrente, diffuso o comparso senza una causa precisa.",
    ctas: [
      { label: "Prenota una valutazione",  href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",     href: WA },
      { label: "Scopri l'osteopatia",      href: "/servizi/osteopatia" },
    ],
  },

  "fisio-osteo": {
    id: "fisio-osteo",
    title: "Fisioterapia o osteopatia",
    subtitle: "Due percorsi possibili: possono essere entrambi un buon punto di partenza",
    description:
      "In questo caso potrebbe essere utile confrontarsi sia con un fisioterapista che con un osteopata. Entrambi lavorano su dolore e movimento, con approcci complementari. Scrivici per capire insieme da dove partire.",
    ctas: [
      { label: "Chiedi dove iniziare", href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp", href: WA },
    ],
  },

  nutrizione: {
    id: "nutrizione",
    title: "Percorso nutrizionale",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile iniziare con una consulenza nutrizionale. Il nutrizionista può costruire un percorso personalizzato basato sulle tue abitudini, obiettivi e condizioni di salute.",
    ctas: [
      { label: "Prenota una consulenza",  href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",    href: WA },
      { label: "Scopri la nutrizione",    href: "/servizi/nutrizione" },
    ],
  },

  ostetricia: {
    id: "ostetricia",
    title: "Supporto ostetrico",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile parlare con un'ostetrica. L'ostetrica accompagna la donna durante la gravidanza, il parto e il post-parto, offrendo supporto su salute, benessere e scelte legate a questa fase.",
    ctas: [
      { label: "Prenota una consulenza", href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",   href: WA },
      { label: "Scopri l'ostetricia",    href: "/servizi/ostetricia" },
    ],
  },

  logopedia: {
    id: "logopedia",
    title: "Valutazione logopedica",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile partire da una valutazione logopedica. Il logopedista può valutare linguaggio, comunicazione, voce, deglutizione e difficoltà specifiche — sia nei bambini che negli adulti.",
    ctas: [
      { label: "Prenota una valutazione", href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",    href: WA },
      { label: "Scopri la logopedia",     href: "/servizi/logopedia" },
    ],
  },

  ortottica: {
    id: "ortottica",
    title: "Valutazione ortottica",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile partire da una valutazione ortottica. L'ortottista valuta la funzione visiva, la coordinazione oculare e eventuali difficoltà della visione binoculare — con attenzione particolare all'età evolutiva.",
    ctas: [
      { label: "Prenota una valutazione", href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",    href: WA },
      { label: "Scopri l'ortottica",      href: "/servizi/ortottica" },
    ],
  },

  osteopedia: {
    id: "osteopedia",
    title: "Valutazione osteopatica pediatrica",
    subtitle: "Un possibile punto di partenza",
    description:
      "Potrebbe essere utile partire da una valutazione osteopatica pediatrica. L'osteopata specializzato in età evolutiva utilizza tecniche dolci e adeguate al bambino, con attenzione allo sviluppo motorio, posturale e globale.",
    ctas: [
      { label: "Prenota una valutazione",          href: "/contatti", primary: true },
      { label: "Scrivici su WhatsApp",             href: WA },
      { label: "Scopri l'osteopatia pediatrica",   href: "/servizi/osteopatia-pediatrica" },
    ],
  },

  orientamento: {
    id: "orientamento",
    title: "Prima valutazione di orientamento",
    subtitle: "Quando non è chiaro da dove partire, Virtus può aiutarti a capirlo",
    description:
      "Quando il bisogno non è immediatamente chiaro, il punto migliore è una prima valutazione di orientamento. Raccontaci la tua situazione su WhatsApp: ti aiutiamo a capire quale professionista coinvolgere e da dove partire.",
    ctas: [
      { label: "Scrivici su WhatsApp",  href: WA, primary: true },
      { label: "Prenota una consulenza",href: "/contatti" },
    ],
  },
};
