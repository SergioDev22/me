export const profile = {
  name: "Louis Sergio RAKOTOARISOA",
  role: "Développeur Full Stack Python / React",
  location: "Antananarivo, Madagascar",
  tagline:
    "Développeur Full Stack Python/React avec plus de 4 ans d'expérience. Je conçois des modules Odoo sur mesure et des pipelines de données sur Google Cloud Platform, du backend jusqu'au déploiement. Des APIs REST robustes aux interfaces React performantes, j'interviens sur toute la chaîne pour livrer des applications complètes, de l'idée à la mise en production.",
  about:
    "Développeur Full Stack Python/React avec plus de 4 ans d'expérience professionnelle. Spécialisé dans le développement de modules Odoo sur mesure et de pipelines de données sur Google Cloud Platform, j'interviens sur l'ensemble de la chaîne, du backend jusqu'au déploiement. J'aime concevoir des solutions robustes et évolutives, en soignant autant l'architecture serveur que l'expérience utilisateur.",
};

export const highlights = [
  {
    title: "Développement Odoo sur mesure",
    description:
      "Conception de modules Odoo métier de bout en bout : frontend OWL/JavaScript, backend Python/ORM et intégrations fournisseurs via EDI et APIs.",
  },
  {
    title: "Data & Cloud",
    description:
      "Pipelines de données Python (extraction, transformation, chargement) déployés et orchestrés sur Google Cloud Platform.",
  },
  {
    title: "Full Stack Web & Mobile",
    description:
      "APIs REST avec Django/DRF et FastAPI, interfaces React, Next.js et React-Native, jusqu'au déploiement sur serveurs Linux.",
  },
];

export type SkillCategory =
  | "Front-end"
  | "Back-end"
  | "Data & bases de données"
  | "Cloud & DevOps";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
}

export const skills: Skill[] = [
  { name: "Python", category: "Back-end", level: 95 },
  { name: "JavaScript", category: "Front-end", level: 90 },
  { name: "TypeScript", category: "Front-end", level: 85 },
  { name: "SQL", category: "Data & bases de données", level: 85 },
  { name: "Odoo (OWL, ORM)", category: "Back-end", level: 90 },
  { name: "Django / DRF", category: "Back-end", level: 90 },
  { name: "FastAPI", category: "Back-end", level: 85 },
  { name: "Flask", category: "Back-end", level: 80 },
  { name: "ReactJS", category: "Front-end", level: 90 },
  { name: "React Native", category: "Front-end", level: 70 },
  { name: "Next.js", category: "Front-end", level: 75 },
  { name: "Redux Toolkit", category: "Front-end", level: 85 },
  { name: "Tanstack Query", category: "Front-end", level: 85 },
  { name: "Material UI", category: "Front-end", level: 90 },
  { name: "ShadCN", category: "Front-end", level: 85 },
  { name: "Tailwind CSS", category: "Front-end", level: 90 },
  { name: "Pipelines ETL", category: "Data & bases de données", level: 85 },
  { name: "Elasticsearch", category: "Data & bases de données", level: 80 },
  { name: "APIs REST / EDI", category: "Data & bases de données", level: 90 },
  { name: "OAuth 2.1", category: "Data & bases de données", level: 80 },
  { name: "Scraping", category: "Data & bases de données", level: 85 },
  { name: "PostgreSQL", category: "Data & bases de données", level: 85 },
  { name: "MySQL", category: "Data & bases de données", level: 80 },
  { name: "Google Cloud Platform", category: "Cloud & DevOps", level: 80 },
  { name: "AWS", category: "Cloud & DevOps", level: 70 },
  { name: "Linux (Ubuntu)", category: "Cloud & DevOps", level: 85 },
  { name: "nginx", category: "Cloud & DevOps", level: 80 },
  { name: "systemd / pm2", category: "Cloud & DevOps", level: 80 },
  { name: "Git/GitHub", category: "Cloud & DevOps", level: 90 },
];

export interface Project {
  name: string;
  description: string;
  tags: string[];
  status: "Démo" | "Code" | "En cours";
  url?: string;
}

export const projects: Project[] = [
  {
    name: "Runoto",
    description:
      "Gestion des stocks, ateliers et ventes en toute simplicité grâce à une solution tout-en-un.",
    tags: ["Next.js", "Tailwind CSS", "Odoo"],
    status: "Démo",
    url: "https://runoto.com",
  },

  {
    name: "Ampalibe",
    description:
      "Framework Python léger conçu pour créer des bots Facebook Messenger plus rapidement. Gère les webhooks, traite les données envoyées par Facebook et fournit l'API Messenger avec des fonctionnalités avancées (gestion des payloads, limitation de la longueur des éléments...).",
    tags: ["Python", "Messenger API", "Bash"],
    status: "Code",
    url: "https://github.com/iTeam-S/Ampalibe",
  },
  {
    name: "Blue & Pink ",
    description:
      "Plateforme Spécialiste de la fabrication de tampons encreurs personnalisés, Blue & Pink met son expertise à votre service. Nous comprenons que votre tampon est la signature visuelle de votre activité, c'est pourquoi nous nous engageons à vous fournir un matériel de haute précision et d'une fiabilité à toute épreuve.",
    tags: ["React", "Tailwind CSS", "Django REST Framework"],
    status: "Démo",
    url: "https://bpcreation.mg/",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Développeur Odoo",
    company: "ABM INNOV",
    period: "Juin 2025 - Aujourd'hui",
    current: true,
    bullets: [
      "Conception et développement d'une plateforme de catalogue et de commande de pièces automobiles sous forme de module Odoo : frontend OWL/JavaScript, backend Python, moteur de recherche Elasticsearch.",
      "Intégration des données catalogue TecDoc et des fournisseurs via EDI et API (Golda, TecCom) : vérification de disponibilité, sélection du meilleur prix, routage automatique des commandes.",
      "Développement d'un wizard de contrôle de disponibilité à la confirmation des bons de commande et optimisation des appels API (batching) pour contourner le throttling fournisseur.",
      "Développement d'un module Odoo 18 de facturation électronique B2B connecté à une Plateforme de Dématérialisation Partenaire certifiée Peppol : authentification OAuth 2.1, envoi de factures, suivi du cycle de vie selon les statuts AFNOR, synchronisation par cron.",
      "Création de composants front complexes (recherche par véhicule, filtres pneus, navigation multi-niveaux par catégories et marques).",
    ],
  },
  {
    role: "Développeur Python",
    company: "KOLLEKTIV IT",
    period: "Mars 2026 - Aujourd'hui",
    current: true,
    bullets: [
      "Conception et développement de pipelines de données en Python (extraction, transformation, chargement) pour l'ingestion et le traitement de données à grande échelle.",
      "Déploiement et gestion des pipelines sur Google Cloud Platform : orchestration, planification des traitements et supervision des exécutions.",
    ],
  },
  {
    role: "Développeur React / Python",
    company: "DIRIS",
    period: "Novembre 2023 - Décembre 2025",
    current: false,
    bullets: [
      "Conception et développement d'APIs REST avec Django et FastAPI pour alimenter les applications web.",
      "Développement d'interfaces web avec React, Redux Toolkit, Tanstack Query et Material UI, avec gestion du cache et des états asynchrones.",
      "Développement des fonctionnalités de gestion de portefeuille utilisateurs en Web3 (suivi des actifs, intégration blockchain).",
      "Participation aux revues de code et à la maintenance évolutive de la plateforme.",
    ],
  },
  {
    role: "Consultant Développeur Back-end (Python) & Sys-Admin",
    company: "Code-Talent",
    period: "Mars 2024 - Décembre 2024",
    current: false,
    bullets: [
      "Développement d'APIs REST avec Django REST Framework.",
      "Déploiement et maintenance d'applications Next.js et Python sur serveurs Linux : services systemd, pm2, reverse proxy nginx, certificats SSL.",
      "Configuration de Google Workspace et mise en place de la messagerie professionnelle (domaines, DNS, comptes utilisateurs).",
      "Développement de scripts de scraping pour la collecte et la structuration de données web.",
    ],
  },
  {
    role: "Alternant Développeur et Data Manipulation",
    company: "SMARTONE",
    period: "Décembre 2022 - Novembre 2023",
    current: false,
    bullets: [
      "Développement d'un module Python de connexion unifié à plusieurs types de bases de données.",
      "Conception de scripts ETL (Extract, Transform, Load) pour le traitement de données stockées sur AWS.",
      "Développement d'APIs REST avec FastAPI.",
      "Développement front-end en ReactJS.",
      "Scraping et collecte de données pour alimenter les pipelines de traitement.",
    ],
  },
];

export const education = [
  {
    degree: "BAC+3 en Informatique",
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
