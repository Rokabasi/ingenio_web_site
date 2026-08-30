export type DomainService = {
  slug: string;
  title: string;
  summary: string;
  body?: string[];
};

export type Domain = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string[];
  services: DomainService[];
  highlights: string[];
};

export const domains: Domain[] = [
  {
    slug: "btp-genie-civil",
    title: "Bâtiment, Travaux Publics et Génie Civil",
    shortTitle: "BTP & Génie civil",
    eyebrow: "Infrastructures",
    summary:
      "Accompagnement des projets d’infrastructures et d’ouvrages, de l’étude à la réception.",
    description: [
      "Ingenio Consulting intervient dans le domaine du Bâtiment, des Travaux Publics et du Génie Civil à travers l’accompagnement des projets d’infrastructures et d’ouvrages.",
      "Nous privilégions une approche intégrée permettant de prendre en compte, dès la conception des projets, les aspects techniques, environnementaux, sociaux, économiques et sécuritaires.",
    ],
    highlights: [
      "Études techniques et conception des ouvrages",
      "Construction et réhabilitation",
      "Travaux routiers et d’aménagement",
      "Suivi et contrôle technique des travaux",
      "Intégration des exigences environnementales et sociales",
    ],
    services: [
      {
        slug: "etudes-conception",
        title: "Études & Conception",
        summary:
          "Études techniques, conception des ouvrages et accompagnement dès les phases amont des projets.",
        body: [
          "Nous réalisons les études techniques nécessaires à la conception d’ouvrages de bâtiment, de génie civil et d’infrastructures.",
          "Notre approche intègre les contraintes de site, les exigences réglementaires et les objectifs de durabilité du projet.",
        ],
      },
      {
        slug: "batiments",
        title: "Bâtiments",
        summary:
          "Conception, construction et réhabilitation de bâtiments adaptés aux usages et aux contextes locaux.",
      },
      {
        slug: "travaux-publics",
        title: "Travaux publics & Infrastructures",
        summary:
          "Accompagnement des projets d’infrastructures publiques et d’aménagements structurants.",
      },
      {
        slug: "vrd",
        title: "Voirie et Réseaux Divers (VRD)",
        summary:
          "Études et travaux de voirie, réseaux et aménagements urbains ou périurbains.",
      },
      {
        slug: "suivi-controle",
        title: "Suivi & Contrôle des travaux",
        summary:
          "Contrôle technique, suivi de chantier et accompagnement jusqu’à la réception des ouvrages.",
      },
      {
        slug: "management-projets",
        title: "Management de projets",
        summary:
          "Pilotage, coordination et management de projets d’ingénierie et de construction.",
      },
      {
        slug: "etudes-prix",
        title: "Études de prix & Devis",
        summary:
          "Études de prix, estimations et élaboration de devis techniques pour vos projets.",
      },
      {
        slug: "equipe",
        title: "Notre équipe",
        summary:
          "Ingénieurs en génie civil, techniciens et chefs de projet mobilisés selon la nature de chaque mission.",
      },
    ],
  },
  {
    slug: "environnement",
    title: "Cabinet environnemental",
    shortTitle: "Environnement",
    eyebrow: "Environnement & social",
    summary:
      "Prévention, évaluation et gestion des enjeux environnementaux et sociaux des projets.",
    description: [
      "Le Cabinet environnemental d’Ingenio Consulting accompagne les entreprises, institutions, organisations, promoteurs de projets et autres acteurs dans la compréhension, la prévention et la gestion des enjeux environnementaux et sociaux liés à leurs activités.",
      "Notre approche vise à permettre aux organisations de prévenir et maîtriser leurs impacts, améliorer leurs performances, renforcer leur conformité et intégrer les principes du développement durable.",
    ],
    highlights: [
      "EIES, EES et NIE",
      "Audits et analyses environnementales",
      "Élaboration et mise en œuvre de PGES",
      "Gestion des déchets et suivi environnemental",
      "Études HSE et audits QHSE",
    ],
    services: [
      {
        slug: "eies",
        title: "EIES",
        summary:
          "Études d’Impact Environnemental et Social pour anticiper et maîtriser les impacts des projets.",
      },
      {
        slug: "ees",
        title: "EES",
        summary:
          "Évaluations Environnementales et Sociales adaptées aux exigences des projets et des bailleurs.",
      },
      {
        slug: "nie",
        title: "NIE",
        summary:
          "Notices d’Impact Environnemental pour les projets relevant d’une procédure simplifiée.",
      },
      {
        slug: "pges",
        title: "PGES",
        summary:
          "Élaboration et mise en œuvre des Plans de Gestion Environnementale et Sociale.",
      },
      {
        slug: "audit",
        title: "Audit environnemental",
        summary:
          "Audits environnementaux pour évaluer la conformité et identifier les axes d’amélioration.",
      },
      {
        slug: "analyse",
        title: "Analyse environnementale",
        summary:
          "Analyses environnementales, études écotoxicologiques et évaluation des risques.",
      },
      {
        slug: "hse",
        title: "HSE",
        summary:
          "Études HSE, analyses des risques professionnels, inspections et sensibilisation.",
      },
      {
        slug: "dechets",
        title: "Gestion des déchets",
        summary:
          "Plans et programmes de gestion des déchets adaptés aux activités et aux territoires.",
      },
      {
        slug: "equipe",
        title: "Notre équipe",
        summary:
          "Environnementalistes, spécialistes HSE/QHSE et consultants mobilisés sur vos missions.",
      },
    ],
  },
  {
    slug: "energies",
    title: "Énergies renouvelables & Électricité",
    shortTitle: "Énergies & Électricité",
    eyebrow: "Énergie durable",
    summary:
      "Solutions énergétiques fiables, adaptées et respectueuses de l’environnement.",
    description: [
      "Ingenio Consulting développe des solutions dans le domaine des énergies renouvelables et de l’électricité, avec une attention particulière portée aux besoins des particuliers, entreprises, institutions, projets et communautés.",
      "Nous recherchons des solutions permettant de favoriser l’accès à une énergie fiable, adaptée, économiquement pertinente et respectueuse de l’environnement.",
    ],
    highlights: [
      "Dimensionnement solaire et électrique",
      "Installations photovoltaïques",
      "Maintenance et entretien",
      "Électrification rurale",
      "Biogaz, méthanisation et valorisation énergétique",
    ],
    services: [
      {
        slug: "etudes",
        title: "Études & dimensionnement",
        summary:
          "Analyse des besoins énergétiques et dimensionnement des installations adaptées.",
      },
      {
        slug: "devis",
        title: "Devis",
        summary:
          "Élaboration de devis et propositions techniques pour vos projets énergétiques.",
      },
      {
        slug: "solaire",
        title: "Installations solaires",
        summary:
          "Conception, installation et mise en service de systèmes photovoltaïques.",
      },
      {
        slug: "electrique",
        title: "Installations électriques",
        summary:
          "Solutions d’alimentation électrique adaptées aux différents besoins.",
      },
      {
        slug: "maintenance",
        title: "Maintenance & entretien",
        summary:
          "Maintenance préventive et corrective pour garantir la performance des installations.",
      },
      {
        slug: "electrification-rurale",
        title: "Électrification rurale",
        summary:
          "Accompagnement des projets d’accès à l’énergie en milieu rural.",
      },
      {
        slug: "biogaz",
        title: "Biogaz",
        summary:
          "Solutions de production de biogaz à partir de ressources organiques disponibles.",
      },
      {
        slug: "methanisation",
        title: "Méthanisation",
        summary:
          "Conception et dimensionnement d’installations de méthanisation.",
      },
      {
        slug: "valorisation",
        title: "Valorisation énergétique",
        summary:
          "Valorisation énergétique des effluents, résidus organiques et sous-produits.",
      },
      {
        slug: "equipe",
        title: "Notre équipe",
        summary:
          "Spécialistes des énergies et techniciens dédiés aux projets renouvelables.",
      },
    ],
  },
  {
    slug: "assainissement",
    title: "Assainissement & Solutions sanitaires durables",
    shortTitle: "Assainissement",
    eyebrow: "Salubrité & eau",
    summary:
      "Ouvrages et solutions sanitaires adaptés aux contextes urbains et ruraux.",
    description: [
      "Ingenio Consulting intervient dans le domaine de l’assainissement et des solutions sanitaires durables pour améliorer la salubrité, la protection des ressources en eau, la santé publique et la qualité de l’environnement.",
      "Nous développons des systèmes techniquement et économiquement adaptés aux contextes locaux.",
    ],
    highlights: [
      "Études et dimensionnement d’ouvrages",
      "Fosses biofiltres et assainissement autonome",
      "Traitement et valorisation des eaux",
      "Gestion des boues de vidange",
      "Solutions sanitaires écologiques",
    ],
    services: [
      {
        slug: "etudes",
        title: "Études & dimensionnement",
        summary:
          "Études d’assainissement, conception et dimensionnement des ouvrages.",
      },
      {
        slug: "fosses-biofiltres",
        title: "Fosses biofiltres",
        summary:
          "Conception et réalisation de fosses biofiltres adaptées aux besoins locaux.",
      },
      {
        slug: "autonome",
        title: "Assainissement autonome",
        summary:
          "Systèmes d’assainissement autonomes pour habitats et équipements isolés.",
      },
      {
        slug: "solutions-ecologiques",
        title: "Solutions sanitaires écologiques",
        summary:
          "Traitement des eaux usées et valorisation des eaux traitées lorsque les conditions le permettent.",
        body: [
          "Nous concevons des solutions de traitement des eaux usées visant à réduire les impacts sanitaires et environnementaux.",
          "Lorsque les conditions techniques et sanitaires le permettent, nous accompagnons également la valorisation et la réutilisation des eaux traitées.",
        ],
      },
      {
        slug: "boues",
        title: "Gestion des boues de vidange",
        summary:
          "Gestion et traitement des boues pour protéger la santé publique et l’environnement.",
      },
      {
        slug: "devis",
        title: "Devis & études techniques",
        summary:
          "Propositions techniques et devis pour vos projets d’assainissement.",
      },
      {
        slug: "equipe",
        title: "Notre équipe",
        summary:
          "Équipe pluridisciplinaire dédiée aux solutions sanitaires durables.",
      },
    ],
  },
  {
    slug: "sig-cartographie",
    title: "SIG & Cartographie",
    shortTitle: "SIG & Cartographie",
    eyebrow: "Géomatique",
    summary:
      "Outils numériques et géospatiaux pour analyser et valoriser les territoires.",
    description: [
      "Dans le domaine de la géomatique, Ingenio Consulting mobilise les outils numériques et géospatiaux pour produire, analyser et valoriser les données relatives aux territoires.",
      "Ces outils permettent d’appuyer la planification, l’aménagement du territoire, la gestion des ressources naturelles, le suivi des projets et la prise de décision.",
    ],
    highlights: [
      "SIG et cartographie thématique",
      "Télédétection et analyse spatiale",
      "Cartographie par drone",
      "Bases de données géographiques",
      "Cartographie des risques",
    ],
    services: [
      {
        slug: "cartes",
        title: "Cartes",
        summary:
          "Production de cartes thématiques, environnementales et d’occupation du sol.",
      },
      {
        slug: "projets",
        title: "Projets",
        summary:
          "Missions géomatiques au service de la planification et du suivi de projets.",
      },
      {
        slug: "galerie",
        title: "Galerie",
        summary:
          "Sélection de productions cartographiques et visualisations spatiales.",
      },
    ],
  },
  {
    slug: "hse-qhse",
    title: "HSE / QHSE",
    shortTitle: "HSE / QHSE",
    eyebrow: "Sécurité & qualité",
    summary:
      "Hygiène, sécurité, environnement et systèmes qualité au service des organisations.",
    description: [
      "Ingenio Consulting accompagne les organisations dans l’amélioration de leurs performances HSE et QHSE.",
      "Nos interventions couvrent les études de risques, les audits, les inspections, la sensibilisation et la formation.",
    ],
    highlights: [
      "Études et analyses des risques professionnels",
      "Inspections et audits HSE/QHSE",
      "Sensibilisation et formation",
      "Amélioration des performances",
    ],
    services: [],
  },
  {
    slug: "conseil-etudes",
    title: "Conseil & Études",
    shortTitle: "Conseil & Études",
    eyebrow: "Accompagnement",
    summary:
      "Conseil technique et études pluridisciplinaires pour éclairer vos décisions.",
    description: [
      "Nous accompagnons nos clients dans la définition, l’analyse et la mise en œuvre de solutions adaptées à leurs enjeux techniques, environnementaux, énergétiques et territoriaux.",
    ],
    highlights: [
      "Études techniques et faisabilité",
      "Assistance à maîtrise d’ouvrage",
      "Accompagnement de projets",
      "Approche pluridisciplinaire",
    ],
    services: [],
  },
];

export function getDomain(slug: string) {
  return domains.find((d) => d.slug === slug);
}

export function getDomainService(domainSlug: string, serviceSlug: string) {
  const domain = getDomain(domainSlug);
  if (!domain) return undefined;
  return domain.services.find((s) => s.slug === serviceSlug);
}
