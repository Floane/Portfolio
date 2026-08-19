# Portfolio - Floane Varathen

Mon portfolio de développeuse front-end, conçu comme une démonstration autant qu'une vitrine. Chaque choix technique y suit une même ligne : accessibilité et performance d'abord. Navigation au clavier, compatibilité lecteur d'écran, respect des préférences de mouvement, référencement soigné, le site applique à lui-même les exigences que je porte sur chaque projet.

## Démo
 
🔗 [floanevarathen.vercel.app](https://floanevarathen.vercel.app)

## Ce que j'ai soigné
 
**Accessibilité (WCAG)**
- Parcours entièrement praticable au clavier, focus visible et gestion du focus au changement de route
- Icônes décoratives neutralisées (`aria-hidden`), liens externes explicités (« nouvel onglet »)
- Retours dynamiques annoncés au lecteur d'écran via `aria-live` (formulaire de contact)

**Performance et SEO**
- Balises `<title>`, Open Graph
- - `robots.txt` et attribut `lang="fr"`
- Design tokens SCSS (espacements, couleurs, mouvement) pour un rendu cohérent et léger

### Résultats Lighthouse
| Critère | Note |
|---|---|
| Performance | *100* |
| Accessibilité | *100* |
| Bonnes pratiques | *100* |
| SEO | *100* |

**Architecture pilotée par les données**
- `projects.js` comme unique source de données : une carte, une page de détail, aucun cas particulier codé en dur
- Formulaire de contact fonctionnel via Formspree

## Stack
- **Technologies :** React, Vite, React Router, modules SCSS
- **Icones :** Lucide React
- **Formulaire :** Formspree
- **Déploiement :** Vercel
- **Outils de test :** Lighthouse, Wave, W3C, Devtool
