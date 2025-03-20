# Sport Arbitre - Projet Next.js

## À propos du projet

Ce projet est une application web développée avec Next.js pour compléter le site https://cas.org.ma/. L'application présente une landing page attrayante, une page thématique supplémentaire, et une page de contact avec un formulaire simple.

## Technologies utilisées

- **Next.js 15.1.0** avec App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS** pour le styling
- **Server Actions** pour la gestion des formulaires
- **Docker** pour la containerisation
- **GitHub Actions** pour CI/CD
- **Vercel** pour le déploiement

## Structure du projet

```
sport-arbitre/
├── .github/
│   └── workflows/
│       └── ci.yml               # Configuration GitHub Actions
├── app/
│   │   ├── thématique/           # Page "thématique"
│   │   │   └── page.tsx
│   │   └── contact/             # Page de contact
│   │       └── page.tsx
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil (Landing Page)
│   └── globals.css              # Styles globaux
├── components/
│   ├── ui/                      # Composants UI
│   ├── thematique/              # Composants thématique
│   ├── theme/                   # Composants theme
│   ├── layout/                  # Composants layout
│   ├── home/                    # Composants home
│   └── contact/                 # Composants contact
├── lib/                         # Utilitaires et fonctions
├── .dockerignore                # Fichiers à ignorer pour Docker
├── .gitignore                   # Fichiers à ignorer pour Git
├── Dockerfile                   # Configuration Docker
├── docker-compose.yml           # Configuration Docker Compose
├── next.config.js               # Configuration Next.js
├── package.json                 # Dépendances et scripts
├── postcss.config.js            # Configuration PostCSS
├── tailwind.config.js           # Configuration Tailwind CSS
└── tsconfig.json                # Configuration TypeScript
```

## Prérequis

Pour exécuter ce projet localement, vous aurez besoin de :

- Node.js 18+ (recommandé 20+)
- npm ou yarn
- Docker (optionnel, pour les conteneurs)

## Installation et démarrage

### Méthode 1 : Installation locale

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ichaoui56/sport-arbitre.git
   cd sport-arbitre
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```
   
   Note: Utilisez `npm install --legacy-peer-deps` si vous rencontrez des problèmes de dépendances.

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Accédez à l'application sur [http://localhost:3000](http://localhost:3000)

### Méthode 2 : Utilisation de Docker

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ichaoui56/sport-arbitre.git
   cd sport-arbitre
   ```

2. Construisez et lancez le conteneur de développement :
   ```bash
   docker compose up sport-arbitre-dev
   ```
   
   Ou pour la production :
   ```bash
   docker compose up sport-arbitre-prod
   ```

3. Accédez à l'application sur [http://localhost:3000](http://localhost:3000)

## Déploiement

### Vercel

L'application est déployée sur Vercel à l'adresse : [https://sport-arbitre.vercel.app](https://sport-arbitre.vercel.app)

Pour déployer votre propre version :
1. Créez un compte sur Vercel
2. Importez le projet depuis GitHub
3. Configurez les variables d'environnement si nécessaire
4. Déployez

### Docker Hub

L'image Docker est disponible sur Docker Hub :
```bash
docker pull ichaoui57/sport-arbitre:latest
```

Pour exécuter l'image Docker :
```bash
docker run -p 3000:3000 ichaoui57/sport-arbitre:latest
```

## CI/CD avec GitHub Actions

Le projet est configuré avec GitHub Actions pour l'intégration et le déploiement continus. Voici les étapes automatisées :

1. **Build et Test** : S'exécute à chaque push sur les branches main et develop, ainsi que pour les pull requests.
   - Installation des dépendances
   - Linting du code
   - Construction de l'application

2. **Déploiement** : S'exécute uniquement lors des pushes sur la branche main.
   - Construction et publication de l'image Docker
   - Déploiement automatique sur Vercel

## Choix techniques

- **Next.js App Router** : Utilisé pour sa simplicité, ses performances et ses fonctionnalités intégrées (SSR, SSG, etc.).
- **Server Actions** : Implémentés pour gérer les soumissions de formulaires côté serveur.
- **Tailwind CSS** : Choisi pour sa flexibilité et son approche utility-first qui facilite le développement responsive.
- **TypeScript** : Ajouté pour la sécurité des types et l'amélioration de l'expérience de développement.
- **Docker** : Utilisé pour garantir la cohérence entre les environnements de développement et de production.
- **GitHub Actions** : Configuré pour automatiser les tests et les déploiements.

## Fonctionnalités

1. **Landing Page** : Présentation claire avec navigation intuitive.
2. **Page À Propos** : Informations sur l'organisation et sa mission.
3. **Page Contact** : Formulaire permettant aux utilisateurs d'envoyer des messages.

## Auteur

Ilyas Chaoui

## Licence

Ce projet est sous licence MIT.