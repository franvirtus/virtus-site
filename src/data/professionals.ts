export type Professional = {
  name: string;
  area: string;
  role: string;
  isUpdating?: boolean;
};

export const professionals: Professional[] = [
  { name: "Dott. Gaetano Messineo", area: "Nutrizione", role: "Professionista area nutrizione" },
  { name: "Dott. Buizza", area: "Nutrizione", role: "Professionista area nutrizione" },
  { name: "Dott. Cucchi", area: "Nutrizione", role: "Professionista area nutrizione" },
  { name: "Dott. Nicolini", area: "Nutrizione", role: "Professionista area nutrizione" },
  {
    name: "Dott.ssa Veronica Lorenzini",
    area: "Osteopatia pediatrica",
    role: "Professionista area osteopatia pediatrica",
  },
  { name: "Dott. Tognazzi", area: "Osteopatia", role: "Professionista area osteopatia" },
  { name: "Dott. Mosconi", area: "Fisioterapia", role: "Professionista area fisioterapia" },
  { name: "Dott.ssa Elisa Strano", area: "Ortottica", role: "Professionista area ortottica" },
  { name: "Dott.ssa Angela Lucente", area: "Ortottica", role: "Professionista area ortottica" },
  { name: "Dott.ssa Serioli", area: "Logopedia", role: "Professionista area logopedia" },
  { name: "Dott.ssa Scattolini", area: "Ostetricia", role: "Professionista area ostetricia" },
  {
    name: "Dott. Lorenzo Quaresima",
    area: "Massoterapia",
    role: "Professionista area massoterapia",
  },
  {
    name: "Dott. Luca Taesi",
    area: "Area in aggiornamento",
    role: "Profilo in aggiornamento",
    isUpdating: true,
  },
  {
    name: "Dott.ssa Morelli",
    area: "Area in aggiornamento",
    role: "Profilo in aggiornamento",
    isUpdating: true,
  },
  {
    name: "Dott.ssa Elisa Manara",
    area: "Area in aggiornamento",
    role: "Profilo in aggiornamento",
    isUpdating: true,
  },
  {
    name: "Hintime",
    area: "Area in aggiornamento",
    role: "Profilo in aggiornamento",
    isUpdating: true,
  },
  {
    name: "Estetica Virtus",
    area: "Area in aggiornamento",
    role: "Profilo in aggiornamento",
    isUpdating: true,
  },
];

export function getProfessionalsByAreas(areas: string[]) {
  return professionals.filter((professional) => areas.includes(professional.area));
}
