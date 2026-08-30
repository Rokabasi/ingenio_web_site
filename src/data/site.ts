export const site = {
  name: "Ingenio Consulting SARL",
  shortName: "Ingenio",
  slogan: "L'ingénierie au service d'un avenir durable.",
  tagline: "L'ingénierie au service d'un avenir durable.",
  founded: 2021,
  country: "République Démocratique du Congo",
  email: "contact@ingenioconsulting.com",
  phone: "+243 000 000 000",
  whatsapp: "https://wa.me/243000000000",
  address: "Kinshasa, République Démocratique du Congo",
} as const;

export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "L'entreprise",
    href: "/entreprise",
    children: [
      { label: "À propos", href: "/entreprise/a-propos" },
      { label: "Vision & Mission", href: "/entreprise/vision-mission" },
      { label: "Organisation", href: "/entreprise/organisation" },
      { label: "Nos experts", href: "/entreprise/experts" },
      { label: "Nos partenaires", href: "/entreprise/partenaires" },
    ],
  },
  {
    label: "Nos domaines",
    href: "/domaines",
    children: [
      {
        label: "BTP & Génie civil",
        href: "/domaines/btp-genie-civil",
        children: [
          { label: "Présentation", href: "/domaines/btp-genie-civil" },
          {
            label: "Études & Conception",
            href: "/domaines/btp-genie-civil/etudes-conception",
          },
          { label: "Bâtiments", href: "/domaines/btp-genie-civil/batiments" },
          {
            label: "Travaux publics & Infrastructures",
            href: "/domaines/btp-genie-civil/travaux-publics",
          },
          {
            label: "Voirie et Réseaux Divers (VRD)",
            href: "/domaines/btp-genie-civil/vrd",
          },
          {
            label: "Suivi & Contrôle des travaux",
            href: "/domaines/btp-genie-civil/suivi-controle",
          },
          {
            label: "Management de projets",
            href: "/domaines/btp-genie-civil/management-projets",
          },
          {
            label: "Études de prix & Devis",
            href: "/domaines/btp-genie-civil/etudes-prix",
          },
          {
            label: "Notre équipe",
            href: "/domaines/btp-genie-civil/equipe",
          },
        ],
      },
      {
        label: "Cabinet environnemental",
        href: "/domaines/environnement",
        children: [
          { label: "Présentation", href: "/domaines/environnement" },
          { label: "EIES", href: "/domaines/environnement/eies" },
          { label: "EES", href: "/domaines/environnement/ees" },
          { label: "NIE", href: "/domaines/environnement/nie" },
          { label: "PGES", href: "/domaines/environnement/pges" },
          {
            label: "Audit environnemental",
            href: "/domaines/environnement/audit",
          },
          {
            label: "Analyse environnementale",
            href: "/domaines/environnement/analyse",
          },
          { label: "HSE", href: "/domaines/environnement/hse" },
          {
            label: "Gestion des déchets",
            href: "/domaines/environnement/dechets",
          },
          { label: "Notre équipe", href: "/domaines/environnement/equipe" },
        ],
      },
      {
        label: "Énergies renouvelables & Électricité",
        href: "/domaines/energies",
        children: [
          { label: "Présentation", href: "/domaines/energies" },
          {
            label: "Études & dimensionnement",
            href: "/domaines/energies/etudes",
          },
          { label: "Devis", href: "/domaines/energies/devis" },
          {
            label: "Installations solaires",
            href: "/domaines/energies/solaire",
          },
          {
            label: "Installations électriques",
            href: "/domaines/energies/electrique",
          },
          {
            label: "Maintenance & entretien",
            href: "/domaines/energies/maintenance",
          },
          {
            label: "Électrification rurale",
            href: "/domaines/energies/electrification-rurale",
          },
          { label: "Biogaz", href: "/domaines/energies/biogaz" },
          { label: "Méthanisation", href: "/domaines/energies/methanisation" },
          {
            label: "Valorisation énergétique",
            href: "/domaines/energies/valorisation",
          },
          { label: "Notre équipe", href: "/domaines/energies/equipe" },
        ],
      },
      {
        label: "Assainissement & Solutions sanitaires",
        href: "/domaines/assainissement",
        children: [
          { label: "Présentation", href: "/domaines/assainissement" },
          {
            label: "Études & dimensionnement",
            href: "/domaines/assainissement/etudes",
          },
          {
            label: "Fosses biofiltres",
            href: "/domaines/assainissement/fosses-biofiltres",
          },
          {
            label: "Assainissement autonome",
            href: "/domaines/assainissement/autonome",
          },
          {
            label: "Solutions sanitaires écologiques",
            href: "/domaines/assainissement/solutions-ecologiques",
            children: [
              {
                label: "Traitement des eaux usées",
                href: "/domaines/assainissement/solutions-ecologiques/eaux-usees",
              },
              {
                label: "Valorisation des eaux traitées",
                href: "/domaines/assainissement/solutions-ecologiques/valorisation",
              },
            ],
          },
          {
            label: "Gestion des boues de vidange",
            href: "/domaines/assainissement/boues",
          },
          {
            label: "Devis & études techniques",
            href: "/domaines/assainissement/devis",
          },
          {
            label: "Notre équipe",
            href: "/domaines/assainissement/equipe",
          },
        ],
      },
      {
        label: "SIG & Cartographie",
        href: "/domaines/sig-cartographie",
        children: [
          { label: "Services", href: "/domaines/sig-cartographie" },
          { label: "Cartes", href: "/domaines/sig-cartographie/cartes" },
          { label: "Projets", href: "/domaines/sig-cartographie/projets" },
          { label: "Galerie", href: "/domaines/sig-cartographie/galerie" },
        ],
      },
      { label: "HSE / QHSE", href: "/domaines/hse-qhse" },
      { label: "Conseil & Études", href: "/domaines/conseil-etudes" },
    ],
  },
  {
    label: "Ingenio Academia",
    href: "/academia",
    children: [
      { label: "Formations", href: "/academia/formations" },
      { label: "Calendrier", href: "/academia/calendrier" },
      { label: "Stages", href: "/academia/stages" },
      { label: "Formateurs", href: "/academia/formateurs" },
      { label: "Inscription", href: "/academia/inscription" },
      { label: "Espace apprenant", href: "/academia/espace-apprenant" },
      { label: "Certificats", href: "/academia/certificats" },
      {
        label: "Vérification par QR Code",
        href: "/academia/verification",
      },
    ],
  },
  { label: "Nos projets", href: "/projets" },
  { label: "Actualités", href: "/actualites" },
  { label: "Publications", href: "/publications" },
  { label: "Ressources", href: "/ressources" },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Nous contacter", href: "/contact" },
      { label: "Demander un devis", href: "/contact/devis" },
      { label: "Candidature", href: "/contact/candidature" },
    ],
  },
];

/** Navigation principale du header. */
export const headerNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Academia", href: "/academia" },
  { label: "Expertise et domaines", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export const values = [
  {
    title: "Excellence",
    text: "Rechercher la qualité et la performance dans chacune de nos interventions.",
  },
  {
    title: "Intégrité",
    text: "Agir avec transparence, éthique et responsabilité professionnelle.",
  },
  {
    title: "Innovation",
    text: "Mobiliser les nouvelles technologies, les connaissances scientifiques et les approches innovantes.",
  },
  {
    title: "Durabilité",
    text: "Concilier performance économique, responsabilité sociale et protection de l’environnement.",
  },
  {
    title: "Professionnalisme",
    text: "S’appuyer sur des compétences qualifiées, des méthodes rigoureuses et une organisation efficace.",
  },
  {
    title: "Sécurité",
    text: "Placer la santé, la sécurité des travailleurs et la protection des communautés au cœur de nos interventions.",
  },
  {
    title: "Collaboration",
    text: "Construire avec nos clients, partenaires et communautés des relations fondées sur la confiance.",
  },
] as const;

export const aboutIntro = `Ingenio Consulting SARL est une société congolaise de conseil, d’ingénierie et d’accompagnement technique, créée en 2021, qui intervient dans plusieurs secteurs complémentaires liés à l’ingénierie, à l’environnement, aux infrastructures, aux technologies durables et au développement des compétences.`;

export const aboutApproach = `À travers une approche fondée sur la pluridisciplinarité, l’innovation et la connaissance scientifique, Ingenio Consulting mobilise des compétences techniques et professionnelles afin d’apporter à ses clients des solutions adaptées aux enjeux techniques, environnementaux, énergétiques, sociaux et économiques de leurs projets.`;

export const aboutObjective = `Notre objectif est de transformer les besoins et les défis de nos clients en solutions concrètes, fiables, durables et adaptées aux réalités locales.`;

export const vision = `Devenir une entreprise de référence en République Démocratique du Congo et en Afrique dans les domaines de l’ingénierie, de l’environnement, des infrastructures, de la géomatique, des énergies renouvelables, des technologies durables et du développement des compétences.`;

export const mission = `Concevoir, accompagner et mettre en œuvre des solutions techniques, environnementales, énergétiques, géospatiales et professionnelles adaptées aux besoins de nos clients, tout en contribuant à la protection de l’environnement, à la sécurité des personnes, au développement des territoires et au renforcement des compétences.`;

export const ambition = `Ingenio Consulting entend construire progressivement un écosystème intégré de services et de compétences, à la croisée de l’ingénierie, de l’environnement, des infrastructures, de la géomatique, de l’énergie, des technologies durables et de la formation.`;
