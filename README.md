# DIAK-SERVICE – Site Web Officiel

Site vitrine moderne et bilingue (FR/EN) pour **DIAK-SERVICE**, spécialiste en matériel informatique et fournitures de bureau à Bamako, Mali.

## Stack Technique

- **Framework**: Next.js 14 (Pages Router)
- **Langage**: JavaScript
- **React**: v18
- **Style**: Tailwind CSS
- **Package Manager**: npm

## Structure du Projet

```
/
├── components/
│   ├── Navbar.js          # Navigation sticky avec sélecteur de langue
│   ├── HeroSection.js     # Section héro principale
│   ├── AboutSection.js    # Présentation du magasin
│   ├── CategoriesSection.js # Catégories de produits
│   ├── ProductsSection.js # Produits en vedette
│   ├── WhyChooseUs.js     # Avantages DIAK-SERVICE
│   ├── ContactSection.js  # Formulaire et informations de contact
│   └── Footer.js          # Pied de page
│
├── pages/
│   ├── index.js           # Page d'accueil
│   ├── produits.js        # Page produits avec filtres
│   ├── contact.js         # Page de contact
│   └── 404.js             # Page 404
│
├── context/
│   └── LanguageContext.js # Contexte React pour le bilinguisme FR/EN
│
├── lib/
│   └── translations.js    # Toutes les traductions FR et EN
│
├── styles/
│   └── globals.css        # Styles globaux + Tailwind
│
└── public/
    ├── images/            # Images du site
    └── logo/              # Logo DIAK-SERVICE
```

## Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000)

## Fonctionnalités

- Bilingue FR / EN avec commutateur de langue
- Design responsive (mobile-first)
- Navigation sticky avec transparence au scroll
- Hero Section animée
- Section produits avec cartes hover
- Formulaire de contact
- Intégration Google Maps
- SEO optimisé
- Police Inter (Google Fonts)

## Palette de Couleurs

| Couleur | Valeur |
|---------|--------|
| Primary (Bleu) | `#2563EB` |
| Secondary (Orange) | `#F59E0B` |
| Background | `#F9FAFB` |
| Text | `#111827` |
| Accent | `#374151` |

## Contact DIAK-SERVICE

- **Localisation**: Marché Didida, Bamako – Mali
- **Propriétaire**: Abdoul-Kadry DIAKITE
- **Téléphone**: +223 70 00 00 00
- **Email**: contact@diak-service.com
