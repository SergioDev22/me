export const profile = {
  name: "Louis Sergio RAKOTOARISOA",
  role: "Développeur Full Stack Python / Go / React",
  specialty: "Odoo & Data GCP",
  location: "Antananarivo, Madagascar",
  email: "sergio.dev22@gmail.com",
  github: "https://github.com/SergioDev22",
  linkedin: "https://www.linkedin.com/in/louis-sergio-rakotoarisoa-484a661a8",
  photo: "/images/profile.jpeg",
  cvUrl:
    "https://drive.google.com/file/d/102U-X4wkzspU15t5CB9K2-xKVL1bQwOL/view?usp=sharing",
  tagline:
    "Plus de 4 ans d'expérience à construire des modules Odoo 18, des intégrations fournisseurs (API, EDI, facturation électronique Peppol) et des pipelines de données sur Google Cloud. J'interviens du backend jusqu'au déploiement, avec une obsession : des appels API et des recherches rapides.",
  about:
    "Développeur Full Stack avec plus de 4 ans d'expérience, spécialisé en Odoo 18 et en intégrations fournisseurs (API, EDI), dont la facturation électronique B2B Peppol pour la réforme française 2026–2027, ainsi qu'en data engineering sur Google Cloud Platform. J'interviens du backend jusqu'au déploiement (Terraform, CI/CD, Kubernetes), avec une attention particulière à la performance des appels API et des recherches.",
};

export const stats = [
  { value: "4+", label: "ans d'expérience" },
  { value: "1,4 M", label: "articles indexés (Elasticsearch)" },
  { value: "−98 %", label: "de requêtes API (batching)" },
  { value: "5", label: "podiums en hackathon, dont 3 victoires" },
];

export const highlights = [
  {
    title: "Odoo 18 & intégrations",
    description:
      "Modules Odoo métier de bout en bout (ORM, OWL) et connecteurs fournisseurs : APIs REST, SOAP, SFTP, EDI (PRICAT, ORDRSP, DESADV) et facturation électronique B2B Peppol.",
  },
  {
    title: "Data engineering GCP",
    description:
      "Data lake en architecture médaillon : ingestion temps quasi réel vers BigQuery, Pub/Sub, Cloud Run / Functions, Dataform et Workflows, le tout en Terraform.",
  },
  {
    title: "Full Stack, Go & DevOps",
    description:
      "Microservices Go, APIs Django / FastAPI / GraphQL, interfaces React, Next.js et React Native, déployés via Docker, Kubernetes, Argo CD et GitHub Actions.",
  },
];

export type SkillCategory =
  | "Langages & Back-end"
  | "Front-end & Mobile"
  | "Data & intégrations"
  | "Cloud & DevOps";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
}

export const skills: Skill[] = [
  { name: "Python", category: "Langages & Back-end", level: 95 },
  { name: "Go", category: "Langages & Back-end", level: 80 },
  { name: "TypeScript / JavaScript", category: "Langages & Back-end", level: 88 },
  { name: "Odoo 18 (ORM, OWL)", category: "Langages & Back-end", level: 90 },
  { name: "Django / DRF", category: "Langages & Back-end", level: 90 },
  { name: "FastAPI", category: "Langages & Back-end", level: 88 },
  { name: "Flask", category: "Langages & Back-end", level: 80 },
  { name: "GraphQL", category: "Langages & Back-end", level: 75 },
  { name: "pytest · clean architecture", category: "Langages & Back-end", level: 85 },
  { name: "React", category: "Front-end & Mobile", level: 90 },
  { name: "Next.js", category: "Front-end & Mobile", level: 78 },
  { name: "React Native (Expo)", category: "Front-end & Mobile", level: 75 },
  { name: "Redux Toolkit", category: "Front-end & Mobile", level: 85 },
  { name: "TanStack Query", category: "Front-end & Mobile", level: 85 },
  { name: "Material UI", category: "Front-end & Mobile", level: 90 },
  { name: "shadcn/ui", category: "Front-end & Mobile", level: 85 },
  { name: "Tailwind CSS", category: "Front-end & Mobile", level: 90 },
  { name: "Pipelines ETL", category: "Data & intégrations", level: 90 },
  { name: "BigQuery / Dataform", category: "Data & intégrations", level: 85 },
  { name: "Pub/Sub", category: "Data & intégrations", level: 80 },
  { name: "Elasticsearch", category: "Data & intégrations", level: 85 },
  { name: "EDI (PRICAT, ORDRSP, DESADV)", category: "Data & intégrations", level: 85 },
  { name: "APIs REST · SOAP · SFTP", category: "Data & intégrations", level: 90 },
  { name: "OAuth 2.1 · Peppol", category: "Data & intégrations", level: 82 },
  { name: "PostgreSQL", category: "Data & intégrations", level: 88 },
  { name: "MySQL", category: "Data & intégrations", level: 80 },
  { name: "Redis", category: "Data & intégrations", level: 80 },
  { name: "Google Cloud Platform", category: "Cloud & DevOps", level: 88 },
  { name: "AWS", category: "Cloud & DevOps", level: 70 },
  { name: "Terraform", category: "Cloud & DevOps", level: 50 },
  { name: "Docker", category: "Cloud & DevOps", level: 55 },
  { name: "Kubernetes · Argo CD", category: "Cloud & DevOps", level: 45 },
  { name: "Ansible", category: "Cloud & DevOps", level: 45 },
  { name: "GitHub Actions (CI/CD)", category: "Cloud & DevOps", level: 55 },
  { name: "Linux · nginx · systemd", category: "Cloud & DevOps", level: 85 },
];

export interface Project {
  name: string;
  /** Sous-titre court (contexte, client, rôle). */
  context?: string;
  description: string;
  /** Chiffres clés affichés en surbrillance. */
  metrics?: string[];
  tags: string[];
  status: "Démo" | "Code" | "En cours" | "Privé";
  url?: string;
  /**
   * Capture d'écran du projet. Déposez le fichier dans `public/images/projects/`
   * puis référencez-le ici sous la forme "/images/projects/mon-fichier.jpg".
   * Si le fichier est absent, une vignette générée est affichée à la place.
   */
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Runoto",
    context: "ABM INNOV · Plateforme de pièces automobiles",
    description:
      "Logiciel tout-en-un (stock, ateliers, ventes) bâti sur Odoo 18 et des microservices Go : recherche Elasticsearch sur le catalogue, recherche TecDoc par VIN ou plaque, connecteurs fournisseurs (Vanking, Exadis, Radia, Materom, TecCom) et facturation électronique B2B Peppol.",
    metrics: ["1,4 M articles", "−98 % requêtes API", "170 req. au lieu de 33 740"],
    tags: ["Odoo 18", "Go", "Elasticsearch", "Redis", "Peppol"],
    status: "Démo",
    url: "https://runoto.com",
    image: "/images/projects/runoto.jpg",
  },
  {
    name: "ZARA-O",
    context: "Projet perso · SaaS événementiel",
    description:
      "Album photo partagé par QR code pour les mariages, anniversaires et séminaires : les invités scannent le QR code, saisissent le mot de passe de l'événement et déposent leurs photos depuis le navigateur, sans application ni compte. Photos en qualité d'origine (HEIC compris), téléchargement de l'album en ZIP, paiement mobile money, site FR / EN. Développé de bout en bout : API Django, front Next.js, déploiement Docker et CI/CD.",
    metrics: ["0 application à installer", "Qualité d'origine", "Mobile money"],
    tags: ["Python", "Django", "Next.js", "Docker", "CI/CD", "nginx"],
    status: "Démo",
    url: "https://preprod-landing.zara-o.com/",
    image: "/images/projects/zara-o.jpg",
  },
  {
    name: "SMS · Gestion scolaire",
    context: "Projet client · BBR CONCEPT",
    description:
      "Logiciel de gestion d'école conçu pour Madagascar, du préscolaire à l'université : élèves et inscriptions, frais de scolarité et impayés, notes et bulletins PDF, trésorerie (caisse, banques, mobile money), personnel et paie (CNaPS, OSTIE, IRSA), présence et vie scolaire, tableau de bord par profil. Développé de bout en bout : API Django, front React, déploiement Docker et CI/CD.",
    metrics: ["10 modules intégrés", "Multi-écoles", "Sauvegarde quotidienne"],
    tags: ["Python", "Django", "React", "Material UI", "Docker", "CI/CD"],
    status: "Démo",
    url: "https://www.sms.toko-telo.mg/",
    image: "/images/projects/sms-ecole.jpg",
  },
  {
    name: "Toko Telo · Centre d'orphelinat",
    context: "Projet perso · ONG à Antananarivo",
    description:
      "Site de l'ONG Loharanosoa Toko Telo, qui prend en charge 250 orphelins et enfants vulnérables : présentation du centre et de ses programmes (éducation, nutrition, santé, réinsertion), blog d'actualités, témoignages et appels aux dons et au bénévolat, avec sélection de la langue.",
    tags: ["Next.js", "nginx"],
    status: "Démo",
    url: "https://demo.toko-telo.mg/fr",
    image: "/images/projects/toko-telo-orphelinat.jpg",
  },
  {
    name: "Blue & Pink",
    context: "E-commerce · tampons personnalisés",
    description:
      "Plateforme de création et de commande de tampons encreurs personnalisés : configurateur en 7 étapes (forme, texte, logo, police, bordures, couleur d'encre), catalogue et panier.",
    tags: ["React", "Tailwind CSS", "Django REST Framework"],
    status: "Démo",
    url: "https://bpcreation.mg/",
    image: "/images/projects/blue-pink.jpg",
  },
  {
    name: "Ampalibe",
    context: "Open source · framework Python",
    description:
      "Framework Python léger pour créer des bots Facebook Messenger plus rapidement : gestion des webhooks, des payloads, des données temporaires et de l'API Messenger avancée.",
    metrics: ["100+ ★ GitHub"],
    tags: ["Python", "Messenger API", "Bash"],
    status: "Code",
    url: "https://github.com/iTeam-S/Ampalibe",
    image: "/images/projects/ampalibe.jpg",
  },
];

export interface ExperienceGroup {
  name: string;
  context: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  current: boolean;
  bullets?: string[];
  groups?: ExperienceGroup[];
  stack?: string[];
}

export const experiences: Experience[] = [
  {
    role: "Développeur Odoo / Go",
    company: "ABM INNOV",
    period: "Juin 2025 – Aujourd'hui",
    type: "Temps partiel",
    current: true,
    groups: [
      {
        name: "Runoto",
        context: "Plateforme de pièces automobiles (Odoo 18 + microservices Go)",
        bullets: [
          "Recherche Elasticsearch sur un catalogue de 1,4 million d'articles (ILM, normaliseurs de références), recherche TecDoc par VIN ou plaque, cache Redis.",
          "Connecteurs fournisseurs (stock et prix par client) : Vanking (REST), Exadis et Radia (SFTP + SOAP), Materom, TecCom.",
          "Batching des appels API : −98 % de requêtes sur le calcul des prix (lots de 50, logique portée de Python vers Go) ; catalogue Vanking synchronisé en ~170 requêtes au lieu de 33 740, sous une limite de 90 req/min.",
          "Module Odoo 18 de facturation électronique B2B connecté à une PDP certifiée Peppol : OAuth 2.1, envoi des factures, suivi des statuts AFNOR, synchronisation par cron.",
          "Application mobile logistique en React Native / Expo (GraphQL, Redux, TanStack Query) : réception, scan, expédition, livraison.",
        ],
      },
      {
        name: "Blackswan",
        context: "Middleware EDI fournisseurs de pneus · contributeur principal",
        bullets: [
          "Connecteurs EDI en Go pour 6 manufacturiers et distributeurs (Michelin, Pirelli, Bridgestone, Continental, SONAMIA, Distri Cash) : catalogues PRICAT, stock, commandes, accusés ORDRSP, avis d'expédition DESADV, factures.",
          "API de commandes fournisseurs (contrat commun, mode dry-run, verrou par commande) ; ~17 000 références pneus indexées.",
        ],
      },
    ],
    stack: [
      "Odoo 18",
      "Python",
      "Go",
      "OWL",
      "Elasticsearch",
      "PostgreSQL",
      "Redis",
      "React Native",
      "Docker",
      "Kubernetes (OVHcloud)",
      "Terraform",
      "Argo CD",
      "Ansible",
    ],
  },
  {
    role: "Développeur Python / Data Engineer GCP",
    company: "KOLLEKTIV IT",
    period: "Mars 2026 – Déc. 2026",
    type: "Mission · client Paris Match",
    current: true,
    bullets: [
      "Développement, au sein d'une équipe d'environ 6 personnes, d'un data lake GCP en architecture médaillon (bronze / silver / gold) pour la rédaction numérique.",
      "Ingestion des stories et posts Instagram (Graph API) toutes les 5 minutes vers BigQuery partitionné et Cloud Storage (dédoublonnage des vidéos), renouvellement automatique du token via Secret Manager.",
      "Publication BigQuery → Contentful (posts, carrousels) et mise en ligne des vidéos sur Dailymotion ; migration Drupal ↔ Contentful (taxonomies, médias, vidéos HLS).",
      "Synchronisation incrémentale Contentful PROD → DEV / STAGING : curseur de sync, résolution des liens imbriqués, quarantaine des erreurs, limitation de débit adaptative sur un budget d'environ 10 req/s partagé entre pipelines.",
      "Flux Pub/Sub → XML (Aptiva / Sezam) sur Cloud Storage pour l'échange avec un partenaire.",
      "Clean architecture (ports / adapters), tests pytest, infrastructure Terraform, déploiement GitHub Actions DEV / PPD / PROD par tags.",
    ],
    stack: [
      "Python",
      "Cloud Functions (Gen 2)",
      "Cloud Run",
      "Pub/Sub",
      "BigQuery",
      "Dataform",
      "Cloud Storage",
      "Secret Manager",
      "Cloud Scheduler",
      "Workflows",
      "Cloud SQL",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    role: "Développeur React / Python",
    company: "DIRIS",
    period: "Nov. 2023 – Déc. 2025",
    type: "Temps plein",
    current: false,
    bullets: [
      "Conception et développement d'APIs REST avec Django et FastAPI pour alimenter les applications web.",
      "Interfaces web en React, Redux Toolkit, TanStack Query et Material UI, avec gestion du cache et des états asynchrones.",
      "Fonctionnalités de gestion de portefeuille utilisateurs en Web3 (suivi des actifs, intégration blockchain).",
      "Participation aux revues de code et à la maintenance évolutive de la plateforme.",
    ],
    stack: ["Django", "FastAPI", "React", "Redux Toolkit", "TanStack Query", "Material UI", "Web3"],
  },
  {
    role: "Consultant Back-end Python & Sysadmin",
    company: "CODE-TALENT",
    period: "Mars 2024 – Déc. 2024",
    type: "Freelance · temps partiel",
    current: false,
    bullets: [
      "Développement d'APIs REST avec Django REST Framework.",
      "Déploiement et maintenance d'applications Next.js et Python sur serveurs Linux : systemd, pm2, reverse proxy nginx, certificats SSL.",
      "Configuration de Google Workspace et de la messagerie professionnelle (domaines, DNS, comptes) ; scripts de scraping.",
    ],
    stack: ["Django REST Framework", "Next.js", "Linux", "nginx", "systemd", "pm2"],
  },
  {
    role: "Alternant Développeur & Data",
    company: "SMARTONE",
    period: "Déc. 2022 – Nov. 2023",
    type: "Alternance",
    current: false,
    bullets: [
      "Module Python de connexion unifiée à plusieurs types de bases de données.",
      "Scripts ETL pour le traitement de données stockées sur AWS ; scraping pour alimenter les pipelines.",
      "Développement d'APIs REST avec FastAPI et d'interfaces en ReactJS.",
    ],
    stack: ["Python", "FastAPI", "React", "AWS", "ETL"],
  },
];

export const languages = [
  { name: "Malgache", level: "Langue maternelle", score: 5 },
  { name: "Français", level: "Courant (niveau professionnel)", score: 4 },
  { name: "Anglais", level: "Intermédiaire", score: 3 },
];

export const education = [
  {
    degree: "Bac+3 en informatique",
    school: "École ESTI",
    period: "2021 - 2023",
  },
  { degree: "Année préparatoire", school: "Programme SESAME", period: "2020" },
  {
    degree: "Baccalauréat",
    school: "Lycée Sainte Jeanne d'Arc, Mahajanga",
    period: "2019",
  },
];

export const awards = [
  {
    title: "Lauréat HUI",
    org: "TechZara",
    period: "Avril 2022",
    rank: "2ème place",
  },
  {
    title: "Hackathon MNDPT",
    org: "MNDPT (Ministère du Développement Numérique, de la Transformation Digitale, des Postes et des Télécommunications)",
    period: "Juin 2022",
    rank: "1ère place",
  },
  {
    title: "Hackathon DevFest",
    org: "Association DevFest Antananarivo",
    period: "Novembre 2022",
    rank: "1ère place",
  },
  {
    title: "Hackathon AVG",
    org: "ONG Alliance Voary Gasy",
    period: "Décembre 2022",
    rank: "1ère place",
  },
  {
    title: "Hackathon ZahaGeek",
    org: "Orange Digital Center",
    period: "Janvier 2023",
    rank: "2ème place",
  },
];
