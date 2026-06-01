# Society — Site Vitrine

Site vitrine officiel de **Society**, la plateforme d'interaction communautaire de Difero Fundry.

## Lancer le site en local

### Prérequis

- [Node.js](https://nodejs.org/) version 18 ou plus (télécharge la version LTS)
- Git (optionnel, si tu clones le repo)

### Étapes

```bash
# 1. Clone le projet
git clone https://github.com/Aguy8/Society.git
cd Society

# 2. Installe les dépendances (une seule fois)
npm install

# 3. Lance le serveur de développement
npm run dev
```

Puis ouvre **http://localhost:5173** dans ton navigateur.

### Autres commandes

```bash
npm run dev      # Serveur local avec hot-reload
npm run build    # Génère dist/ pour la production
npm run preview  # Prévisualise le build
```

---

## Structure du projet

```
Society/
├── public/
│   └── assets/          # Images (photos, screenshots)
├── src/
│   ├── main.jsx          # Point d'entrée React
│   ├── App.jsx           # Routeur (React Router)
│   ├── styles.css        # CSS global + design tokens
│   ├── components/
│   │   ├── Nav.jsx       # Navigation sticky + menu mobile
│   │   ├── Footer.jsx
│   │   ├── Marquee.jsx
│   │   ├── Icon.jsx      # Icônes SVG
│   │   └── ScrollToTop.jsx
│   └── pages/
│       ├── Accueil.jsx
│       ├── Fonctionnalites.jsx
│       ├── PourQui.jsx
│       ├── Tarifs.jsx          # Toggle mensuel/annuel fonctionnel
│       ├── APropos.jsx
│       ├── Inscription.jsx     # Formulaire avec validation
│       └── Confirmation.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Charte graphique

| Élément | Valeur |
|---|---|
| Bleu primaire | `#0E47AB` |
| Or | `#D4A75B` |
| Noir | `#0A0A0A` |
| Police | Inter (800 titres, 600 UI) |

## Stack technique

- **React 18** + **Vite 6** — build ultra-rapide, hot-reload
- **React Router v6** — navigation entre pages
- **CSS pur** — design tokens via variables CSS
- **Zéro dépendance UI** — tout codé à la main
