export const DOMAINS = {
    accessibility: 'Accessibilité / Optimisation',
    react: 'React',
    integration: 'Intégration / Refonte',
    backend: 'API / Back-end',
    'project-management': 'Gestion de projet',
}

export const PROJECT_TYPES = {
    academique: 'Projet de formation',
    professionnel: 'Projet en entreprise',
    personnel: 'Projet personnel',
}

export const projects = [
  {
    id: 1,
    slug: 'nina-carducci',
    type: 'academique',
    featured: true,
    title: 'Nina Carducci',
    tagline: 'Un site divisé par 5 en poids, passé à 100 en accessibilité.',
    year: 2025,
    role: 'Optimisation d’un site existant',
    domains: ['accessibility'],
    stack: [
      { name: 'JavaScript', category: 'langage' },
      { name: 'jQuery', category: 'librairie' },
      { name: 'Bootstrap', category: 'style' },
      { name: 'Lighthouse', category: 'outil' },
      { name: 'WAVE', category: 'outil' },
    ],

    metaTitle: 'Nina Carducci - accessibilité & performances | Floane Varathen',
    metaDescription: 'Optimisation d\'un site de photographe : 29 Mo d\'images ramenés à 5, accessibilité passée de 67 à 100 et référencement local corrigé.',

    // TODO: remplacer par le texte final de la fiche
    context:
      'Site vitrine d’une photographe professionnelle, fonctionnel mais lourd et mal référencé (jQuery, Bootstrap, 15 images pour 29,4 Mo).',
    objectives:
      'Réduire le temps de chargement, mettre le site en conformité WCAG et améliorer sa visibilité locale, sans refonte visuelle ni changement de stack.',
    skills:
      'Diagnostic complet avant correction, puis trois chantiers en parallèle — performance, accessibilité, SEO — chacun mesuré. Débogage de code tiers non documenté (galerie).',
    results:
      'Poids des images réduit de 83 %. Données structurées LocalBusiness reconnues, Open Graph et Twitter Card ajoutés, code validé W3C.',
    improvements:
      'Un score Lighthouse de 100 ne couvre qu’environ un tiers des critères WCAG : un audit manuel au lecteur d’écran compléterait le travail. Remplacer jQuery/Bootstrap par du JS natif ferait tomber le poids restant.',
    // Métriques avant/après (affichées en texte, pas seulement en image)
    metrics: [
      { label: 'Performance', before: 74, after: 99 },
      { label: 'Accessibilité', before: 67, after: 100 },
      { label: 'SEO', before: 73, after: 100 },
    ],
    links: {
      repo: '', // TODO
      demo: '', // TODO (vérifier que la démo fonctionne en ligne)
      report: '', // rapport d'optimisation PDF si tu le mets en ligne
    },
    cover: { src: '', alt: 'Aperçu du site Nina Carducci après optimisation' }, // TODO
    images: [], // TODO : captures Lighthouse et WAVE avant/après
  },
 
  {
    id: 2,
    slug: 'kasa',
    type: 'academique',
    featured: false,
    title: 'Kasa',
    tagline: 'Une interface React construite en composants réutilisables.',
    year: 2026,
    role: 'Développement front-end',
    domains: ['react', 'accessibility'],
    stack: [
      { name: 'React', category: 'framework' },
      { name: 'React Router', category: 'framework' },
      { name: 'Sass', category: 'style' },
      { name: 'Vite', category: 'outil' },
    ],

    metaTitle: 'Kasa - application React de location | Floane Varathen',
    metaDescription: 'Application React d\'une plateforme de location : composants réutilisables, React Router et logique de données isolée, pensée pour évoluer.',

    context:
      'Refonte en React de l’application d’une plateforme de location entre particuliers, à partir de maquettes Figma et de données statiques.',
    objectives:
      'Développer 4 pages à partir de composants réutilisables, gérer la navigation avec React Router et les identifiants de logement invalides.',
    skills:
      'Logique d’accès aux données isolée dans deux hooks (useLogements / useLogement) : passer d’un JSON statique à une API n’a demandé qu’une ligne. Accessibilité par éléments natifs (Collapse sur <button> + aria-expanded, Carrousel à vrais boutons).',
    results:
      '9 composants réutilisables, layout partagé via Outlet, route dynamique /logement/:id, 404 sans redirection, responsive conforme aux maquettes.',
    improvements:
      'Les textes alternatifs du carrousel se réduisent à l’index de l’image et devraient décrire son contenu. Un changement d’image gagnerait à être annoncé via aria-live.',
    metrics: [],
    links: { repo: '', demo: '', report: '' }, // TODO
    cover: { src: '', alt: 'Page d’accueil de l’application Kasa' }, // TODO
    images: [],
  },
 
  {
    id: 3,
    slug: 'mon-vieux-grimoire',
    type: 'academique',
    featured: false,
    title: 'Mon Vieux Grimoire',
    tagline: 'Une API sécurisée pour noter et partager ses lectures.',
    year: 2026,
    role: 'Développement back-end',
    domains: ['backend'],
    stack: [
      { name: 'Node.js', category: 'runtime' },
      { name: 'Express', category: 'framework' },
      { name: 'MongoDB', category: 'base de données' },
      { name: 'Mongoose', category: 'librairie' },
      { name: 'JWT', category: 'sécurité' },
      { name: 'Sharp', category: 'librairie' },
    ],

    metaTitle: 'Mon Vieux Grimoire - API REST sécurisée | Floane Varathen',
    metaDescription: 'API REST sécurisée pour noter et partager ses lectures : authentification, gestion des notes et optimisation des images côté serveur.',

    context:
      'Site de notation de livres pour une chaîne de librairies. Le front React existait ; la mission portait sur l’intégralité du back-end.',
    objectives:
      'API RESTful permettant à un utilisateur connecté d’ajouter, modifier, supprimer et noter un livre, consultation ouverte à tous. Authentification sécurisée et démarche Green Code sur les images.',
    skills:
      'Distinction authentification / autorisation : chaque écriture compare le userId du token au propriétaire de la ressource (403 sinon). Nommage des images par identifiant de livre : collisions impossibles, écrasement automatique à la modification.',
    results:
      'API de 9 routes (4 publiques, 5 protégées), mots de passe hachés bcrypt, tokens JWT expirant à 24 h, images converties en WebP par Sharp, moyenne des notes dénormalisée, 7 codes HTTP gérés avec distinction 401/403.',
    improvements:
      'Pas de limitation de débit sur la connexion (à ajouter en production). Aucun test automatisé alors que les règles d’autorisation en auraient besoin. Stockage disque des images à remplacer par un service objet (S3, Cloudinary).',
    metrics: [],
    links: { repo: '', demo: '', report: '' }, // TODO : back-end = pas de démo cliquable, prévoir une collection Postman + captures
    cover: { src: '', alt: 'Schéma de l’API Mon Vieux Grimoire' }, // TODO
    images: [],
  },
 
  {
    id: 4,
    slug: 'menu-maker-qwenta',
    type: 'academique',
    featured: false,
    title: 'Menu Maker by Qwenta',
    tagline: 'De l’idée client aux spécifications techniques.',
    year: 2026,
    role: 'Spécifications et gestion de projet',
    domains: ['project-management'],
    stack: [
      { name: 'Spécifications', category: 'méthode' },
      { name: 'Notion', category: 'outil' },
      { name: 'Figma', category: 'outil' },
      { name: 'Veille', category: 'méthode' },
    ],

    metaTitle: 'Menu Maker by Qwenta - gestion de projet | Floane Varathen',
    metaDescription: 'Cadrage d\'un projet web : 16 user stories traduites en 72 tâches techniques, un backlog priorisé et une planification claire.',

    context:
      'Imprimeur souhaitant se diversifier vers le numérique avec un outil de création de menus pour restaurateurs. Rôle de spécifications techniques et gestion de projet (Product Owner temporaire).',
    objectives:
      'Traduire un besoin métier en solution documentée : spécifications, choix justifié de la stack, décomposition du backlog en tâches priorisées et estimées. Contraintes : desktop, conformité WCAG AA.',
    skills:
      'Décomposition sur trois niveaux (epics, user stories, tâches), avec vérification croisée : chaque route d’API couverte par une tâche, chaque tâche rattachée à une story. A fait apparaître des CRUD manquants et des ambiguïtés documentées en hypothèses. Choix argumentés (JWT en cookie httpOnly et ses conséquences ; Tailwind figé + variables CSS pour le branding).',
    results:
      '16 user stories décomposées en 72 tâches, chacune avec critères d’acceptation, estimation en story points, priorité et epic. 6 sections de spécifications, 2 dossiers de veille. Traçabilité complète besoin → technologie.',
    improvements:
      'Le livrable s’arrête au backlog priorisé : l’étape suivante est la planification en sprints datés, qui suppose de connaître la vélocité de l’équipe. Certains choix restent théoriques faute d’implémentation.',
    metrics: [],
    links: { repo: '', demo: '', report: '' }, // TODO : pas de code — captures Notion, schéma du flux magic link
    cover: { src: '', alt: 'Vue du backlog Menu Maker dans Notion' }, // TODO
    images: [],
  },
 
  {
    id: 5,
    slug: 'refontes-clients',
    type: 'professionnel',
    featured: false,
    title: 'Refontes clients',
    tagline: 'Exemples d’intégration de deux sites clients, en alternance.',
    year: 2026,
    role: 'Intégration, responsive et accessibilité',
    domains: ['integration', 'accessibility'],
    stack: [
      { name: 'HTML', category: 'langage' },
      { name: 'CSS', category: 'style' },
      { name: 'PHP', category: 'langage' },
      { name: 'WordPress', category: 'CMS' },
    ],

    metaTitle: 'Intégration clients en alternance | Floane Varathen',
    metaDescription: 'Refonte graphique de deux site clients en alternance chez Digital Innovest.',

    context:
      'En alternance chez Digital Innovest, intégration de la refonte visuelle de deux sites clients finaux, avec prise en charge du responsive et de l’accessibilité.',
    objectives:
      'Traduire les nouvelles maquettes en intégration fidèle, tester le responsive et corriger les problèmes d’accessibilité sur des sites en production.',
    skills:
      'Intégration au sein d’une équipe, sur des contraintes de production réelles. Attention portée au responsive et à l’accessibilité sur les deux projets.',
    results:
      'IZI by EDF Entretien : [préciser ton rôle exact et le périmètre]. KO Films : [préciser]. Sites publics, captures autorisées.',
    improvements:
      '[à compléter selon ce que tu referais autrement]',
    metrics: [],
    links: {
      repo: '', // pas de repo (code client, confidentiel)
      demo: '', // liens vers les sites publics si l'accord le permet
      report: '',
    },
    cover: { src: '', alt: 'Captures des sites clients refondus' }, // TODO
    images: [],
  },
 
  {
    id: 6,
    slug: 'mon-portfolio',
    type: 'personnel',
    featured: false,
    title: 'Mon portfolio',
    tagline: 'Le site que vous parcourez, conçu de A à Z.',
    year: 2026,
    role: 'Conception et développement',
    domains: ['react', 'accessibility', 'project-management'],
    stack: [
      { name: 'React', category: 'framework' },
      { name: 'Vite', category: 'outil' },
      { name: 'Sass', category: 'style' },
      { name: 'Vercel', category: 'hébergement' },
    ],

    metaTitle: 'Mon portfolio - démonstration technique | Floane Varathen',
    metaDescription: 'React, Vite et Sass, un site pensé comme une démonstration concrète d\'accessibilité et de performance, pas une simple vitrine.',

    // À RÉDIGER EN FIN DE PROJET avec les chiffres réels mesurés.
    context:
      'Portfolio conçu de bout en bout comme un projet à part entière : design system maison, accessibilité et performance traitées comme des exigences, pas des options.',
    objectives:
      'Construire un site qui prouve le positionnement affiché : score Lighthouse élevé, conformité d’accessibilité, méthode de projet appliquée (Kanban, journal de décisions).',
    skills:
      '[à compléter en fin de projet : décisions techniques marquantes, tirées de DECISIONS.md]',
    results:
      '[à compléter : scores Lighthouse réels, mesurés en production]',
    improvements:
      '[à compléter en fin de projet]',
    metrics: [], // à remplir avec les scores réels
    links: {
      repo: '', // le dépôt GitHub de ce portfolio
      demo: '', // floanevarathen.fr
      report: '',
    },
    cover: { src: '', alt: 'Aperçu du portfolio' }, // TODO
    images: [],
  },
]