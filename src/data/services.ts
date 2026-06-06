import { getProfessionalsByAreas } from "@/data/professionals";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

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
  faq: ServiceFaqItem[];
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
      "Un piano alimentare personalizzato non è solo una lista di alimenti da seguire: è un percorso che parte dall'ascolto, passa per la valutazione della composizione corporea e degli obiettivi, e si costruisce nel tempo. Il nutrizionista lavora per migliorare le abitudini alimentari, supportare il benessere metabolico e accompagnare la persona verso risultati duraturi, che si tratti di dimagrimento, aumento della massa muscolare, gestione di intolleranze o ottimizzazione della performance sportiva.",
    highlights: [
      "Valutazione iniziale e definizione degli obiettivi",
      "Impostazione di un piano alimentare personalizzato e sostenibile",
      "Supporto concreto al cambiamento delle abitudini nel tempo",
    ],
    audience: [
      "Persone che vogliono migliorare il proprio equilibrio alimentare e il benessere quotidiano",
      "Sportivi e persone attive con obiettivi di performance o composizione corporea",
      "Chi gestisce intolleranze, carenze nutrizionali o condizioni particolari",
    ],
    whenHelpful: [
      "Quando si vuole perdere o aumentare peso con un percorso guidato da un professionista",
      "Quando si desidera migliorare l'energia, la concentrazione e la qualità della vita attraverso l'alimentazione",
      "Quando l'obiettivo riguarda la performance sportiva o il recupero muscolare",
    ],
    relatedAreas: ["Nutrizione"],
    pageNote:
      "La struttura della pagina è pensata per essere chiara fin da subito e pronta a futuri approfondimenti.",
    faq: [
      {
        question: "Quante sedute sono necessarie per un percorso nutrizionale?",
        answer:
          "Dipende dagli obiettivi e dalla situazione di partenza. In genere si inizia con una valutazione iniziale seguita da incontri di follow-up periodici per monitorare i progressi e adattare il piano. Il nutrizionista ti darà indicazioni precise dopo il primo colloquio.",
      },
      {
        question: "Il piano alimentare tiene conto di intolleranze o preferenze specifiche?",
        answer:
          "Sì. Il percorso è costruito attorno alle esigenze individuali: intolleranze alimentari, allergie, preferenze dietetiche (come vegano o vegetariano) e stile di vita sono tutti elementi che il nutrizionista integra nella definizione del piano.",
      },
      {
        question: "Come posso iniziare il percorso di nutrizione?",
        answer:
          "Il modo più semplice è scrivere su WhatsApp o contattarci dalla pagina contatti. Spiegaci brevemente la tua situazione e ti aiutiamo a organizzare un primo incontro con il nutrizionista.",
      },
    ],
    seoTitle: "Nutrizione",
    seoDescription:
      "Servizio di nutrizione a Virtus: piani alimentari personalizzati per salute, benessere, dimagrimento e performance sportiva con un nutrizionista specializzato.",
  },
  {
    slug: "fisioterapia",
    href: "/servizi/fisioterapia",
    title: "Fisioterapia",
    kicker: "Recupero funzionale e prevenzione",
    shortDescription:
      "Trattamenti e percorsi pensati per recuperare movimento, funzionalità e qualità della vita.",
    intro:
      "Il servizio di fisioterapia supporta il recupero funzionale e aiuta a gestire dolore, limitazioni e ritorno alle attività quotidiane o sportive.",
    description:
      "La fisioterapia interviene su problemi muscoloscheletrici, neurologici e post-chirurgici attraverso una valutazione accurata e un trattamento personalizzato. Il fisioterapista lavora per ridurre il dolore, recuperare la mobilità articolare e la forza muscolare, e prevenire le recidive. Il percorso include esercizi terapeutici, terapia manuale e indicazioni per la gestione autonoma del problema nel lungo periodo.",
    highlights: [
      "Valutazione del quadro funzionale e delle cause del dolore",
      "Percorsi personalizzati di recupero, riabilitazione e mantenimento",
      "Supporto per il ritorno all'attività quotidiana e sportiva in sicurezza",
    ],
    audience: [
      "Persone con dolore cronico o acuto, limitazioni funzionali e problemi posturali",
      "Chi ha necessità di un percorso post-infortunio, post-operatorio o di riabilitazione",
      "Sportivi che vogliono prevenire infortuni e migliorare la performance motoria",
    ],
    whenHelpful: [
      "Quando un dolore o una limitazione interferisce con la vita quotidiana o con lo sport",
      "Quando si sta recuperando dopo un infortunio, un intervento chirurgico o un lungo periodo di inattività",
      "Quando si vuole lavorare sulla prevenzione e sul mantenimento della funzionalità nel tempo",
    ],
    relatedAreas: ["Fisioterapia"],
    pageNote:
      "Il contenuto permette di capire rapidamente se il servizio è adatto al proprio bisogno, con spazio per futuri approfondimenti.",
    faq: [
      {
        question: "La fisioterapia è utile anche in prevenzione, non solo dopo un infortunio?",
        answer:
          "Sì. La fisioterapia preventiva aiuta a identificare e correggere squilibri muscolari, problemi posturali e compensazioni prima che diventino sintomatici, riducendo il rischio di infortuni futuri.",
      },
      {
        question: "Quante sedute servono per un percorso di fisioterapia?",
        answer:
          "Il numero dipende dal tipo di problema, dalla sua durata e dagli obiettivi. Il fisioterapista definisce un piano di trattamento dopo la valutazione iniziale, aggiornandolo in base ai progressi.",
      },
      {
        question: "Come prenoto una valutazione fisioterapica?",
        answer:
          "Puoi contattarci su WhatsApp o dalla pagina contatti. Descrivi brevemente il tuo problema e organizziamo insieme la prima valutazione con il fisioterapista.",
      },
    ],
    seoTitle: "Fisioterapia",
    seoDescription:
      "Servizio di fisioterapia a Virtus: recupero funzionale, riabilitazione post-infortunio, terapia manuale e prevenzione con un fisioterapista specializzato.",
  },
  {
    slug: "osteopatia",
    href: "/servizi/osteopatia",
    title: "Osteopatia",
    kicker: "Equilibrio, mobilità e approccio globale",
    shortDescription:
      "Un supporto mirato per accompagnare la persona nel recupero dell'equilibrio funzionale.",
    intro:
      "L'osteopatia è un approccio manuale che considera la persona nella sua globalità, lavorando su mobilità, tensioni e compensazioni per favorire il benessere funzionale.",
    description:
      "L'osteopata valuta la relazione tra le strutture del corpo — sistema muscolo-scheletrico, viscerale e craniosacrale — per individuare tensioni e restrizioni di mobilità che possono generare dolore o disfunzioni. Il trattamento osteopatico è personalizzato, non invasivo e può integrarsi con altri percorsi terapeutici del centro per un approccio multidisciplinare più completo.",
    highlights: [
      "Approccio globale e personalizzato in base al bisogno della persona",
      "Attenzione alla mobilità articolare, alle tensioni muscolari e all'equilibrio funzionale",
      "Percorso integrabile con fisioterapia, nutrizione e altri servizi del centro",
    ],
    audience: [
      "Persone con tensioni muscolo-scheletriche ricorrenti, mal di schiena o dolori posturali",
      "Chi cerca un supporto complementare e integrato nel proprio percorso di benessere",
      "Pazienti che desiderano un approccio globale coordinato con altri professionisti",
    ],
    whenHelpful: [
      "Quando si percepiscono tensioni, rigidità o dolori ricorrenti senza una causa specifica identificata",
      "Quando si desidera un approccio più globale al proprio benessere fisico",
      "Quando si vuole affiancare il lavoro di altri professionisti del centro con un trattamento manuale integrato",
    ],
    relatedAreas: ["Osteopatia"],
    pageNote:
      "La pagina è pronta a ospitare in seguito approfondimenti specifici, ma già adesso è utile per orientare il primo contatto.",
    faq: [
      {
        question: "Qual è la differenza tra osteopatia e fisioterapia?",
        answer:
          "La fisioterapia si concentra principalmente sul recupero funzionale e sulla riabilitazione di strutture specifiche, mentre l'osteopatia adotta un approccio più globale, valutando le connessioni tra diverse aree del corpo. Le due discipline sono complementari e spesso vengono integrate nello stesso percorso.",
      },
      {
        question: "L'osteopatia è adatta anche a chi non ha dolori acuti?",
        answer:
          "Sì. Molte persone si rivolgono all'osteopata in modo preventivo o per migliorare il benessere generale, non solo per risolvere un problema acuto. La valutazione osteopatica può individuare tensioni e squilibri prima che diventino sintomatici.",
      },
      {
        question: "Come posso prenotare una seduta di osteopatia?",
        answer:
          "Scrivici su WhatsApp o contattaci dalla pagina contatti con una breve descrizione della tua situazione. Ti aiutiamo a organizzare un primo appuntamento con l'osteopata.",
      },
    ],
    seoTitle: "Osteopatia",
    seoDescription:
      "Servizio di osteopatia a Virtus: approccio manuale globale per tensioni muscolo-scheletriche, dolori posturali ed equilibrio funzionale.",
  },
  {
    slug: "osteopatia-pediatrica",
    href: "/servizi/osteopatia-pediatrica",
    title: "Osteopatia pediatrica",
    kicker: "Supporto dedicato ai più piccoli",
    shortDescription:
      "Un approccio dolce e specializzato per i bambini, con attenzione e comunicazione chiara verso le famiglie.",
    intro:
      "L'osteopatia pediatrica utilizza tecniche manuali delicate adattate all'età evolutiva per supportare il benessere dei bambini, dalla nascita all'adolescenza.",
    description:
      "Il trattamento osteopatico in età pediatrica richiede competenze specifiche e un approccio particolarmente attento. L'osteopata pediatrico lavora con tecniche dolci e non invasive, valutando lo sviluppo posturale, le asimmetrie craniche e le tensioni legate alla crescita. La comunicazione con i genitori è parte integrante del percorso, per accompagnare le famiglie con chiarezza e rassicurazione.",
    highlights: [
      "Tecniche manuali delicate e adattate all'età evolutiva del bambino",
      "Comunicazione trasparente e rassicurante con la famiglia durante tutto il percorso",
      "Possibile integrazione con altre figure del centro per un approccio multidisciplinare",
    ],
    audience: [
      "Famiglie con neonati o bambini che presentano asimmetrie posturali, coliche o difficoltà di sonno",
      "Genitori che cercano supporto professionale nella valutazione dello sviluppo del bambino",
      "Famiglie che preferiscono un approccio integrato con altre figure specialistiche del centro",
    ],
    whenHelpful: [
      "Quando una famiglia vuole ricevere una valutazione professionale dopo il parto o durante la crescita",
      "Quando si osservano asimmetrie posturali, difficoltà di allattamento o tensioni nel neonato",
      "Quando è utile confrontarsi con un professionista in un centro che lavora in modo multidisciplinare",
    ],
    relatedAreas: ["Osteopatia pediatrica"],
    pageNote:
      "La struttura è già adatta a futuri approfondimenti dedicati ai dubbi più frequenti delle famiglie.",
    faq: [
      {
        question: "Da che età si può portare un bambino dall'osteopata?",
        answer:
          "L'osteopatia pediatrica può essere indicata fin dalla nascita. Il trattamento neonatale utilizza tecniche estremamente delicate e non causa dolore. Prima della prima seduta, il professionista effettua sempre una valutazione per capire se l'approccio osteopatico è appropriato per la situazione.",
      },
      {
        question: "Quante sedute servono per un bambino?",
        answer:
          "Il numero di sedute dipende dall'età del bambino e dalla situazione. Spesso bastano 2-4 sedute per problemi specifici, mentre per uno sviluppo monitorato nel tempo il percorso può essere più continuativo. L'osteopata pediatrico lo valuterà caso per caso.",
      },
      {
        question: "Come preparo mio figlio alla prima visita?",
        answer:
          "Non è necessaria nessuna preparazione particolare. È utile portare eventuali referti o documentazione medica precedente e arrivare in un momento in cui il bambino non sia troppo stanco o affamato. L'osteopata vi guiderà passo per passo.",
      },
    ],
    seoTitle: "Osteopatia pediatrica",
    seoDescription:
      "Servizio di osteopatia pediatrica a Virtus: tecniche manuali dolci per neonati e bambini, con comunicazione attenta alle famiglie.",
  },
  {
    slug: "ortottica",
    href: "/servizi/ortottica",
    title: "Ortottica",
    kicker: "Benessere visivo e valutazione specialistica",
    shortDescription:
      "Valutazione e rieducazione della funzione visiva per adulti e bambini, con professioniste dedicate.",
    intro:
      "Il servizio di ortottica si occupa della valutazione e del trattamento dei disturbi della funzione visiva binoculare, del movimento oculare e dell'equilibrio visivo.",
    description:
      "L'ortottista valuta e tratta problemi come strabismo, ambliopia, visione doppia e difficoltà di coordinazione oculare. Attraverso esercizi di rieducazione visiva, prismi e collaborazione con l'oculista, il percorso ortottico mira a migliorare la qualità della visione e ridurre i sintomi legati alla fatica visiva. Il servizio è adatto sia ai bambini, per un intervento precoce fondamentale, sia agli adulti.",
    highlights: [
      "Valutazione specialistica della funzione visiva binoculare e del movimento oculare",
      "Percorsi di rieducazione visiva personalizzati per bambini e adulti",
      "Collaborazione con l'oculista per una presa in carico integrata",
    ],
    audience: [
      "Bambini con strabismo, ambliopia o difficoltà di apprendimento legate alla visione",
      "Adulti con fatica visiva, visione doppia o problemi di convergenza oculare",
      "Persone indirizzate dall'oculista per una valutazione ortottica specialistica",
    ],
    whenHelpful: [
      "Quando si osservano difficoltà di lettura, cefalee frequenti o chiusura di un occhio nel bambino",
      "Quando l'oculista consiglia una valutazione della funzione visiva binoculare",
      "Quando si avvertono sintomi di fatica visiva, visione instabile o difficoltà di messa a fuoco",
    ],
    relatedAreas: ["Ortottica"],
    pageNote:
      "La pagina è pronta per ampliare i contenuti con casi trattati e approfondimenti specifici.",
    faq: [
      {
        question: "L'ortottica è diversa dall'optometria?",
        answer:
          "Sì. L'ortottista è un professionista sanitario che si occupa della valutazione e riabilitazione dei disturbi della motilità oculare e della visione binoculare, in collaborazione con l'oculista. L'optometrista si concentra principalmente sulla misurazione e correzione del difetto refrattivo (miopia, astigmatismo, ecc.).",
      },
      {
        question: "A che età è consigliabile una prima valutazione ortottica?",
        answer:
          "Prima è meglio: idealmente tra i 3 e i 5 anni, così da intercettare strabismo o ambliopia nella finestra evolutiva più favorevole al trattamento. Tuttavia anche gli adulti possono beneficiare di una valutazione ortottica per problemi di visione binoculare.",
      },
      {
        question: "Come prenoto una valutazione ortottica?",
        answer:
          "Scrivici su WhatsApp o contattaci dalla pagina contatti. Se hai già una prescrizione o una lettera dell'oculista, portala con te: aiuterà l'ortottista a inquadrare meglio la situazione fin dal primo incontro.",
      },
    ],
    seoTitle: "Ortottica",
    seoDescription:
      "Servizio di ortottica a Virtus: valutazione della funzione visiva binoculare, trattamento di strabismo e ambliopia, rieducazione visiva per bambini e adulti.",
  },
  {
    slug: "logopedia",
    href: "/servizi/logopedia",
    title: "Logopedia",
    kicker: "Comunicazione, linguaggio e supporto mirato",
    shortDescription:
      "Percorsi di valutazione e trattamento per disturbi del linguaggio, della comunicazione e della voce.",
    intro:
      "Il servizio di logopedia si occupa della valutazione e del trattamento dei disturbi del linguaggio, della comunicazione, della voce e della deglutizione, in età evolutiva e adulta.",
    description:
      "La logopedista valuta le competenze linguistiche e comunicative della persona attraverso una valutazione clinica approfondita, individuando le aree di difficoltà e costruendo un percorso riabilitativo personalizzato. Il lavoro logopedico può riguardare disturbi del linguaggio e della parola nei bambini, difficoltà di lettura e scrittura (dislessia, disortografia), disturbi della voce negli adulti e problemi di deglutizione.",
    highlights: [
      "Valutazione clinica approfondita delle competenze linguistiche e comunicative",
      "Trattamento logopedico personalizzato per bambini e adulti",
      "Supporto per disturbi di linguaggio, voce, lettura e scrittura",
    ],
    audience: [
      "Bambini con ritardi del linguaggio, disturbi articolatori o difficoltà di apprendimento scolastico",
      "Adulti con disturbi della voce, balbuzie o difficoltà comunicative acquisite",
      "Famiglie che cercano un primo orientamento su difficoltà linguistiche del figlio",
    ],
    whenHelpful: [
      "Quando un bambino presenta difficoltà nel linguaggio, nella pronuncia o nell'apprendimento della lettura",
      "Quando si avvertono problemi alla voce, come raucedine persistente o affaticamento vocale",
      "Quando la scuola segnala difficoltà di apprendimento potenzialmente legate a un disturbo specifico",
    ],
    relatedAreas: ["Logopedia"],
    pageNote:
      "La struttura coerente con gli altri servizi mantiene il sito ordinato e facilita l'espansione futura.",
    faq: [
      {
        question: "A che età è consigliabile iniziare un percorso logopedico?",
        answer:
          "Prima si interviene, migliori sono i risultati. Se un bambino di 2-3 anni mostra un ritardo nel linguaggio rispetto ai coetanei, è già indicato richiedere una valutazione logopedica. Non bisogna aspettare che 'si arrangi da solo': l'intervento precoce fa una differenza significativa.",
      },
      {
        question: "La logopedia aiuta anche per i problemi di lettura e scrittura?",
        answer:
          "Sì. La logopedista può valutare e trattare disturbi specifici dell'apprendimento come dislessia e disortografia, che spesso hanno radici in difficoltà di elaborazione fonologica o linguistica. La diagnosi precoce e il trattamento adeguato migliorano significativamente il percorso scolastico.",
      },
      {
        question: "Come iniziare un percorso logopedico?",
        answer:
          "Il primo passo è una valutazione logopedica. Puoi contattarci via WhatsApp o dalla pagina contatti per organizzare un primo colloquio e capire se e come iniziare un percorso.",
      },
    ],
    seoTitle: "Logopedia",
    seoDescription:
      "Servizio di logopedia a Virtus: valutazione e trattamento di disturbi del linguaggio, della voce, della comunicazione e dei DSA per bambini e adulti.",
  },
  {
    slug: "ostetricia",
    href: "/servizi/ostetricia",
    title: "Ostetricia",
    kicker: "Supporto alla donna e ai percorsi di maternità",
    shortDescription:
      "Accompagnamento professionale durante la gravidanza, il parto e il periodo post-nascita.",
    intro:
      "Il servizio di ostetricia offre supporto professionale e continuo alla donna durante la gravidanza, il travaglio, il parto e il puerperio.",
    description:
      "L'ostetrica è la figura di riferimento per l'accompagnamento della donna in tutte le fasi della maternità. Il percorso ostetrico include visite di controllo in gravidanza, corsi di preparazione al parto, supporto all'allattamento e assistenza nel periodo post-nascita. L'approccio è centrato sulla donna, rispettoso dei suoi tempi e delle sue scelte, con attenzione al benessere fisico ed emotivo.",
    highlights: [
      "Accompagnamento personalizzato durante gravidanza, parto e puerperio",
      "Corsi di preparazione al parto e supporto all'allattamento",
      "Tono accogliente e professionale centrato sul benessere della donna",
    ],
    audience: [
      "Donne in gravidanza che cercano un supporto professionale e continuo",
      "Neo-mamme che desiderano supporto nell'allattamento e nel periodo post-nascita",
      "Coppie che si preparano al parto e cercano un percorso guidato",
    ],
    whenHelpful: [
      "Quando si desidera un accompagnamento professionale e personalizzato in gravidanza",
      "Quando si cerca supporto per l'allattamento o per le prime settimane dopo il parto",
      "Quando si vogliono affrontare la gravidanza e il parto con maggiore consapevolezza e serenità",
    ],
    relatedAreas: ["Ostetricia"],
    pageNote:
      "La struttura attuale permette di presentare bene il servizio già da ora, lasciando spazio a future estensioni.",
    faq: [
      {
        question: "Quando è consigliabile iniziare un percorso con l'ostetrica?",
        answer:
          "Idealmente dal primo trimestre di gravidanza, per avere un punto di riferimento professionale fin dall'inizio. Tuttavia l'ostetrica può essere una risorsa preziosa anche in fasi successive, incluso il periodo post-nascita.",
      },
      {
        question: "L'ostetrica sostituisce il ginecologo?",
        answer:
          "No, le due figure sono complementari. L'ostetrica affianca e supporta la donna in tutte le fasi fisiologiche della maternità, mentre il ginecologo gestisce gli aspetti medici e clinici. Le due professionalità lavorano in sinergia per il benessere della madre e del bambino.",
      },
      {
        question: "Come posso iniziare un percorso ostetrico?",
        answer:
          "Scrivici su WhatsApp o contattaci dalla pagina contatti con una breve descrizione della tua situazione. Ti aiuteremo a organizzare un primo colloquio con l'ostetrica del centro.",
      },
    ],
    seoTitle: "Ostetricia",
    seoDescription:
      "Servizio di ostetricia a Virtus: accompagnamento professionale in gravidanza, parto, allattamento e puerperio con un'ostetrica dedicata.",
  },
  {
    slug: "massoterapia",
    href: "/servizi/massoterapia",
    title: "Massoterapia",
    kicker: "Trattamento manuale e benessere muscolare",
    shortDescription:
      "Trattamenti di massaggio professionale per il benessere muscolare, il recupero e la gestione delle tensioni.",
    intro:
      "La massoterapia utilizza tecniche manuali professionali per agire su tensioni muscolari, contratture, affaticamento e benessere psicofisico generale.",
    description:
      "Il massoterapista applica tecniche manuali specifiche per lavorare sulla muscolatura, favorire il rilascio delle tensioni, migliorare la circolazione locale e supportare il recupero fisico. Il trattamento può essere orientato al benessere, al recupero sportivo o alla gestione del dolore muscolare cronico. Nel contesto di un centro multiservizio come Virtus, la massoterapia si integra naturalmente con fisioterapia e osteopatia per percorsi più completi.",
    highlights: [
      "Tecniche manuali professionali per tensioni muscolari e benessere psicofisico",
      "Trattamenti personalizzati per recupero sportivo, contratture e rilassamento",
      "Integrazione naturale con fisioterapia e osteopatia nel percorso del centro",
    ],
    audience: [
      "Persone con tensioni muscolari, contratture o affaticamento fisico ricorrente",
      "Sportivi che vogliono ottimizzare il recupero muscolare dopo l'allenamento",
      "Chi cerca un approccio al benessere fisico integrato con altri servizi del centro",
    ],
    whenHelpful: [
      "Quando si avvertono tensioni, contratture o dolori muscolari che limitano il benessere quotidiano",
      "Quando si cerca un supporto per il recupero fisico dopo attività sportiva intensa",
      "Quando si desidera un trattamento di benessere come parte di un percorso più ampio",
    ],
    relatedAreas: ["Massoterapia"],
    pageNote:
      "Il focus resta avere una pagina pulita, credibile e subito utile alla conversione.",
    faq: [
      {
        question: "Qual è la differenza tra massoterapia e fisioterapia?",
        answer:
          "La massoterapia utilizza tecniche manuali per lavorare principalmente sul tessuto muscolare, favorendo il benessere e il recupero. La fisioterapia ha un campo d'azione più ampio e clinico, che include la valutazione e il trattamento di disfunzioni motorie e dolorose. Le due discipline sono spesso complementari.",
      },
      {
        question: "Con quale frequenza è utile fare massoterapia?",
        answer:
          "Dipende dall'obiettivo. Per il benessere generale e la gestione dello stress, una seduta ogni 2-4 settimane è una buona frequenza. Per il recupero sportivo o la gestione di tensioni croniche, il massoterapista indicherà la frequenza più adeguata alla tua situazione.",
      },
      {
        question: "Come prenoto una seduta di massoterapia?",
        answer:
          "Scrivici su WhatsApp o contattaci dalla pagina contatti. Indica brevemente il tuo obiettivo (benessere, recupero sportivo, tensioni specifiche) e organizziamo insieme la prima seduta.",
      },
    ],
    seoTitle: "Massoterapia",
    seoDescription:
      "Servizio di massoterapia a Virtus: trattamenti manuali professionali per tensioni muscolari, recupero sportivo e benessere psicofisico.",
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
