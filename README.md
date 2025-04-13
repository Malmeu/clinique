# Clinique HÉMODIALYSE Orchidée Nacer

Site web moderne pour la Clinique HÉMODIALYSE Orchidée Nacer, un centre spécialisé en hémodialyse offrant des soins de qualité supérieure en Algérie et à l'international.

## Fonctionnalités

- Design moderne et élégant inspiré d'Apple
- Site responsive adapté à tous les appareils
- Animations fluides avec Framer Motion
- 5 pages principales : Accueil, À Propos, Services, Équipe, Contact
- Formulaire de contact interactif
- Optimisé pour le référencement (SEO)

## Technologies utilisées

- **Next.js 15** - Framework React moderne avec rendu côté serveur
- **React** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations pour React
- **React Icons** - Icônes populaires pour React
- **Headless UI** - Composants d'interface utilisateur accessibles et sans style

## Démarrage rapide

### Prérequis

- Node.js 18.0.0 ou version ultérieure
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/clinique-hemodialyse.git
cd clinique-hemodialyse

# Installer les dépendances
npm install
# ou
yarn install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

### Construction pour la production

```bash
# Construire l'application pour la production
npm run build
# ou
yarn build

# Démarrer le serveur de production
npm start
# ou
yarn start
```

## Structure du projet

```
/
├── public/          # Fichiers statiques (images, favicon, etc.)
├── src/             # Code source
│   ├── app/         # Pages de l'application (structure Next.js App Router)
│   │   ├── a-propos/   # Page À Propos
│   │   ├── contact/    # Page Contact
│   │   ├── equipe/     # Page Équipe
│   │   ├── services/   # Page Services
│   │   ├── globals.css  # Styles globaux
│   │   ├── layout.tsx   # Layout principal
│   │   └── page.tsx     # Page d'accueil
│   ├── components/   # Composants réutilisables
│   │   ├── Navbar.tsx   # Barre de navigation
│   │   └── Footer.tsx   # Pied de page
└── package.json     # Dépendances et scripts
```

## Personnalisation

### Images

Remplacez les images dans le dossier `public/images/` par vos propres images. Assurez-vous de conserver les mêmes noms de fichiers pour éviter de devoir modifier le code.

### Contenu

Modifiez le contenu dans les fichiers des pages pour l'adapter à vos besoins spécifiques.

### Styles

Les styles principaux sont définis avec Tailwind CSS. Vous pouvez personnaliser les couleurs, les polices et autres styles dans le fichier `src/app/globals.css`.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Contact

Pour toute question ou suggestion, veuillez contacter [contact@orchidee-nacer.dz](mailto:contact@orchidee-nacer.dz).

