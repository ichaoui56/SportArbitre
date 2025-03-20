# 🏆 Sport Arbitre - Projet Next.js

## 📌 À propos du projet

Ce projet est une application web développée avec **Next.js** pour compléter le site [CAS](https://cas.org.ma/). Il comprend :

✅ Une **landing page** attrayante
✅ Une **page thématique**
✅ Une **page de contact** avec un formulaire

---

## 🚀 Technologies utilisées

- ![Next.js](https://img.shields.io/badge/Next.js-15.1.0-blue?style=flat-square) **Next.js** avec App Router
- ![React](https://img.shields.io/badge/React-19-blue?style=flat-square) **React 19**
- ![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue?style=flat-square) **TypeScript**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-✔-blue?style=flat-square) **Tailwind CSS** pour le styling
- ![Docker](https://img.shields.io/badge/Docker-✔-blue?style=flat-square) **Docker** pour la containerisation
- ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-✔-blue?style=flat-square) **GitHub Actions** pour CI/CD
- ![Vercel](https://img.shields.io/badge/Vercel-✔-blue?style=flat-square) **Vercel** pour le déploiement

---

## 📂 Structure du projet

```
sport-arbitre/
├── .github/
│   └── workflows/
│       └── ci.yml               # Configuration GitHub Actions
├── app/
│   ├── thématique/              # Page thématique
│   ├── contact/                 # Page de contact
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Landing Page
│   └── globals.css              # Styles globaux
├── components/                  # Composants réutilisables
├── lib/                         # Utilitaires
├── Dockerfile                   # Configuration Docker
├── docker-compose.yml           # Docker Compose
├── next.config.js               # Configuration Next.js
├── package.json                 # Dépendances et scripts
├── tailwind.config.js           # Configuration Tailwind CSS
└── tsconfig.json                # Configuration TypeScript
```

---

## 🔧 Prérequis

📌 **Pour exécuter le projet localement, vous aurez besoin de :**

- [Node.js 18+](https://nodejs.org/) (recommandé 20+)
- npm ou yarn
- Docker (optionnel)

---

## 🚀 Installation et démarrage

### 🏗️ Méthode 1 : Installation locale

1. **Clonez le dépôt :**
   ```bash
   git clone https://github.com/ichaoui56/sport-arbitre.git
   cd sport-arbitre
   ```
2. **Installez les dépendances :**
   ```bash
   npm install
   ```
3. **Lancez le serveur de développement :**
   ```bash
   npm run dev
   ```
4. **Accédez à l'application :**
   [http://localhost:3000](http://localhost:3000)

### 🐳 Méthode 2 : Utilisation de Docker

1. **Clonez le dépôt :**
   ```bash
   git clone https://github.com/ichaoui56/sport-arbitre.git
   cd sport-arbitre
   ```
2. **Lancez le conteneur :**
   ```bash
   docker compose up sport-arbitre-dev
   ```
3. **Accédez à l'application :**
   [http://localhost:3000](http://localhost:3000)

---

## 🚀 Déploiement

### 🌍 Vercel

L'application est déployée sur **Vercel** :
[https://sport-arbitre.vercel.app](https://sport-arbitre.vercel.app)

### 🐳 Docker Hub

L'image Docker est disponible sur **Docker Hub** :
```bash
docker pull ichaoui57/sport-arbitre:latest
```

Pour exécuter l'image Docker :
```bash
docker run -p 3000:3000 ichaoui57/sport-arbitre:latest
```

---

## ⚙️ CI/CD avec GitHub Actions

📌 **Pipeline automatisé** :

1. **Build et Test** (à chaque push sur `main` et `develop`)
   - ✅ Installation des dépendances
   - ✅ Linting du code
   - ✅ Construction de l'application

2. **Déploiement** (seulement sur `main`)
   - 🚀 Build et publication Docker
   - 🚀 Déploiement automatique sur Vercel

---

## 🔍 Choix techniques

📌 **Pourquoi ces technologies ?**

- 🚀 **Next.js App Router** : Performant et moderne
- 🎨 **Tailwind CSS** : Styling rapide et efficace
- 🔒 **TypeScript** : Sécurisation du code
- 🐳 **Docker** : Consistance entre environnements
- 🤖 **GitHub Actions** : Automatisation CI/CD

---

## ✨ Fonctionnalités

✅ **Landing Page** : Présentation intuitive
✅ **Page Thématique** : Informations détaillées
✅ **Page Contact** : Formulaire interactif

---

## 👨‍💻 Suivi du projet

🎯 Le projet est géré sur Jira :
🔗 [Lien vers le projet Jira](https://jira.atlassian.com/jira/software/c/projects/SPA/boards/1?assignee=6144e023096e610069792b48&selectedIssue=SPA-1)

---

## 👨‍💻 Auteur

[![Ilyas Chaoui](https://img.shields.io/badge/Auteur-Ilyas%20Chaoui-blue?style=flat-square)](https://github.com/ichaoui56)
🔗 [Portfolio](https://i-chaoui.vercel.app/)

---

## 📜 Licence

Ce projet est sous licence **MIT**.

📌 **Feel free to contribute! 🚀**

