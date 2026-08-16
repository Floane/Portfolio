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

    context: 
      'Le site d\'une photographe professionnelle : soigné et fonctionnel, mais lourd et presque invisible sur Google. 15 images pour 29,4 Mo, une base en jQuery et Bootstrap.',
    objectives:
      'Le rendre rapide, conforme aux WCAG et visible localement, sans toucher au design ni changer de stack. La contrainte que j\'aime : améliorer sans rien casser.',
    skills:
      'J\'ai commencé par un diagnostic complet avant de toucher au code, puis mené trois chantiers de front : performance, accessibilité, SEO, en mesurant chacun. Le plus formateur : déboguer la galerie, du code tiers non documenté qu\'il a fallu comprendre avant de l\'optimiser.',
    results:
      'Le poids des images divisé par près de six, les données structurées LocalBusiness enfin reconnues par Google, Open Graph et Twitter Card en place, et un code validé W3C.',
    improvements:
      'Un score Lighthouse de 100 sur Lighthouse ne couvre qu\'environ un tiers des critères WCAG. Un audit manuel au lecteur d\'écran compléterait vraiment le travail, et remplacer jQuery et Bootstrap par du JavaScript natif ferait tomber le poids qui reste.',
    metrics: [
      { label: 'Performance', before: 74, after: 99 },
      { label: 'Accessibilité', before: 67, after: 100 },
      { label: 'SEO', before: 73, after: 100 },
    ],
    links: [
      { label: 'Code source', url: 'https://github.com/Floane/Nina-Carducci-Dev' },
      { label: 'Démo en ligne', url: 'https://floane.github.io/Nina-Carducci-Dev/' },
      { label: 'Rapport (PDF)', url: '/projects/nina-carducci/rapport.pdf' },
    ],
    cover: { src: '/projects/nina-carducci/cover.webp', alt: 'Aperçu du site Nina Carducci après optimisation' },
    images: [
      { src: '/projects/nina-carducci/lighthouse-avant.webp', alt: 'Score Lighthouse avant : 74' },
      { src: '/projects/nina-carducci/lighthouse-apres.webp', alt: 'Score Lighthouse après : 99' },
    ],
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
      'Intégration en React de l\'application d\'une plateforme de location entre particuliers, à partir de maquettes Figma et de données statiques.',
    objectives:
      'Développer 4 pages à partir de composants réutilisables, gérer la navigation avec React Router et les identifiants de logement invalides.',
    skills:
      'Logique d\'accès aux données isolée dans deux hooks (useLogements / useLogement) : passer d\'un JSON statique à une API n\'a demandé qu\'une ligne. Accessibilité par éléments natifs (Collapse sur <button> + aria-expanded, Carrousel à vrais boutons).',
    results:
      '9 composants réutilisables, layout partagé via Outlet, route dynamique /logement/:id, 404 sans redirection, responsive conforme aux maquettes.',
    improvements:
      'Les textes alternatifs du carrousel se réduisent à l\'index de l\'image et devraient décrire son contenu. Un changement d\'image gagnerait à être annoncé via aria-live.',
    metrics: [],
    links: [
      { label: 'Code source', url: 'https://github.com/Floane/kasa' },
    ],
    cover: { src: '/projects/kasa/cover.webp', alt: 'Page d\'accueil de l\'application Kasa' }, // TODO
    images: [
      { src: '/projects/kasa/cover.webp', alt: 'Aperçu de l\'accueil' },
      { src: '/projects/kasa/visuel-detail.webp', alt: 'Aperçu d\'un détail de logement' },
      { src: '/projects/kasa/visuel-a-propos.webp', alt: 'Aperçu de la page A propos' },
      { src: '/projects/kasa/visuel-404.webp', alt: 'Aperçu de la page 404' },
    ],
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
      'Site de notation de livres pour une chaîne de librairies. Le front React existait ; la mission portait sur l\'intégralité du back-end.',
    objectives:
      'API RESTful permettant à un utilisateur connecté d\'ajouter, modifier, supprimer et noter un livre, consultation ouverte à tous. Authentification sécurisée et démarche Green Code sur les images.',
    skills:
      'Distinction authentification / autorisation : chaque écriture compare le userId du token au propriétaire de la ressource (403 sinon). Nommage des images par identifiant de livre : collisions impossibles, écrasement automatique à la modification.',
    results:
      'API de 9 routes (4 publiques, 5 protégées), mots de passe hachés bcrypt, tokens JWT expirant à 24 h, images converties en WebP par Sharp, moyenne des notes dénormalisée, 7 codes HTTP gérés avec distinction 401/403.',
    improvements:
      'Protéger la page de connexion en limitant le nombre de tentatives : sans ça, un programme peut essayer des milliers de mots de passe jusqu\'à trouver le bon. Déplacer les images uploadées vers un service de stockage dédié plutôt que sur le disque du serveur, où elles risquent d\'être effacées à chaque redéploiement.',
    metrics: [],
    links: [
      { label: 'Code source', url: 'https://github.com/Floane/P7-Dev-Web-livres' },
    ],
    cover: { src: '/projects/mon-vieux-grimoire/cover.webp', alt: 'Schéma des routes de l\'API : consultation publique des livres, création/modification/suppression protégées par token JWT' },
    images: [
      { src: '/projects/mon-vieux-grimoire/test-postman1.webp', alt: 'Réponse 403 : suppression refusée à un utilisateur qui n\'est pas le propriétaire du livre' },
      { src: '/projects/mon-vieux-grimoire/test-postman2.webp', alt: 'Réponse 401 : ajout d\'un refusé à un utilisateur sans token' },
    ],
  },
 
  {
    id: 4,
    slug: 'menu-maker-qwenta',
    type: 'academique',
    featured: false,
    title: 'Menu Maker by Qwenta',
    tagline: 'De l\'idée client aux spécifications techniques.',
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
      'Décomposition sur trois niveaux (epics, user stories, tâches), avec vérification croisée : chaque route d\'API couverte par une tâche, chaque tâche rattachée à une story. Choix argumentés (JWT en cookie httpOnly et ses conséquences ; Tailwind figé + variables CSS pour le branding).',
    results:
      '16 user stories décomposées en 72 tâches, chacune avec critères d\'acceptation, estimation en story points, priorité et epic. 6 sections de spécifications, 2 dossiers de veille. Traçabilité complète besoin → technologie.',
    improvements:
      'Le livrable s\'arrête au backlog priorisé : l\'étape suivante est la planification en sprints datés, qui suppose de connaître la vélocité de l\'équipe. Certains choix restent théoriques faute d\'implémentation.',
    metrics: [],
    links: [
      { label: 'Kanabn en ligne', url: 'https://midi-swoop-ee3.notion.site/39277cf8180a8003a080d32b799fc940?v=39277cf8180a808789b6000c0df8eb65' },
      { label: 'Spécification techniques (PDF)', url: '/projects/menu-maker/spech-techniques.pdf' },
    ],
    cover: { src: '/projects/menu-maker/cover.webp', alt: 'Vue du backlog Menu Maker dans Notion' },
    images: [
      { src: '/projects/menu-maker/flux-magic-link.webp', alt: 'Schéma du flux magic link' },
      { src: '/projects/menu-maker/story-decomposee.webp', alt: 'Story décomposée en tâche avec critères d\'acceptation, story points, etc.' },
      { src: '/projects/menu-maker/veille-techno.webp', alt: 'Extrait du dossier de veille' },
    ],
  },
 
  {
    id: 5,
    slug: 'refontes-clients',
    type: 'professionnel',
    featured: false,
    title: 'Refontes clients',
    tagline: 'Exemples d\'intégration de deux sites clients, en alternance.',
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
      'En alternance chez Digital Innovest, intégration de la refonte visuelle de deux sites clients finaux, avec prise en charge du responsive et de l\'accessibilité.',
    objectives:
      'Traduire les nouvelles maquettes en intégration fidèle, tester le responsive et corriger les problèmes d\'accessibilité sur des sites en production.',
    skills:
      'Intégration au sein d\'une équipe, sur des contraintes de production réelles. Attention portée au responsive et à l\'accessibilité sur les deux projets.',
    results:
      'Sur les deux sites, j\'ai intégré les maquettes sous WordPress et Elementor. Pour IZI by EDF Entretien, en appliquant la nouvelle charte graphique ; pour KO Films, en suivant les préférences du client. J\'ai également assuré la mise en ligne de KO Films : déploiement de la version finale en production, après les phases de test et de validation.',
    improvements:
      'La contrainte principale était le temps : avec davantage de marge, j\'aurais poussé plus loin l\'optimisation des deux sites. Je travaille d\'ailleurs actuellement sur la déclaration d\'accessibilité d\'IZI by EDF Entretien, une amélioration concrète déjà en cours.',
    metrics: [],
    links: [
      { label: 'Voir le site IZI by EDF Entretien', url: 'https://www.izi-by-edf-entretien.fr/' },
      { label: 'Voir le site KO Films', url: 'https://www.ko-films.com/' },
    ],
    cover: { src: '', alt: 'Captures des sites clients refondus' },
    images: [
      { src: '/projects/refonte-clients/visuel-izi.webp', alt: 'Aperçu du site IZI by EDF Entretien' },
      { src: '/projects/refonte-clients/visuel-ko.webp', alt: 'Aperçu du site KO Films' },
    ],
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

    context:
      'Portfolio conçu de bout en bout comme un projet à part entière : design system maison, accessibilité et performance traitées comme des exigences.',
    objectives:
      'Construire un site qui prouve le positionnement affiché : score Lighthouse élevé, conformité d\'accessibilité, méthode de projet appliquée (Kanban, journal de décisions).',
    skills:
      'Architecture pilotée par les données : une seule Card et une seule fiche projet affichent les six projets sans aucune condition par projet, ajouter un projet revient à ajouter un objet dans ce fichier. Design system maison en tokens Sass et composants réutilisables (Button, Badge, Card, SectionTitle). Accessibilité intégrée dès la conception : skip link, filtre projets annoncé en aria-live, icônes décoratives en aria-hidden, respect de prefers-reduced-motion. Performance : icônes Lucide, animation CSS native, contraste validé. Navigation par ancres rétablie via un composant ScrollToHash, le comportement natif étant cassé en SPA.',
    results:
      'Scores Lighthouse mesurés en production : Performance [XX], Accessibilité [XX], Bonnes pratiques [XX], SEO [XX] — vérifiables en direct sur le site. Bibliothèque de composants réutilisables, routing React Router avec pages légales et 404 attrape-tout, métadonnées SEO par page (Open Graph, JSON-LD), formulaire de contact sans back-end (Formspree), déploiement continu sur Vercel.',
    improvements:
      'Le filtre par type de projet reporté à une v2. La conformité AA est acquise. Un audit manuel au lecteur d\'écran compléterait les scores autormatiques. Prochaine étape : l\'extension full-stack prévue.',
    metrics: [
      { label: 'Performance', after: null },
      { label: 'Accessibilité', after: null },
      { label: 'Bonnes pratiques', after: null },
      { label: 'SEO', after: null },
    ], // à remplir avec les scores réels
    links: [
      { label: 'Code source', url: 'https://github.com/Floane/Portfolio' },
      { label: 'Démo en ligne', url: 'https://floanevarathen.vercel.app/' },
      { label: 'Kanban en ligne', url: '' },
    ],
    cover: { src: '/projects/mon-portfolio/cover.webp', alt: 'Aperçu du portfolio' },
    images: [],
  },
]