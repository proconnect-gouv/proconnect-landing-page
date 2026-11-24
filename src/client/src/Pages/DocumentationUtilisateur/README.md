# Documentation ProConnect — conversion React + TypeScript

Contenu : huit parties du guide intégralement converties de HTML en JSX, une page d'accueil, un glossaire avec 40 définitions, un composant de navigation et un composant de mise en page.

## Dépendances existantes vérifiées sur le dépôt public

React 18, TypeScript, react-router-dom 7, @codegouvfr/react-dsfr, Prettier 3 et Vite. Aucun nouveau paquet requis. Les composants utilisent les classes DSFR existantes (pas de CDN ni de CSS externe). Le projet utilise Node.js ^24.11.0 sur sa branche principale au moment de la consultation.

## Installation dans la branche feat/documentation-utilisateur

1. Copier tous les fichiers `.tsx` et `.ts` de ce dossier dans `src/client/src/Pages/DocumentationUtilisateur/` (en remplaçant les versions antérieures de `DocumentationAccueil.tsx` et `Glossaire.tsx`).
2. Dans `src/client/src/Router/Router.tsx`, conserver les routes existantes `/documentation` et `/documentation/glossaire` et ajouter les huit routes ci-dessous. Ajouter les huit imports correspondants.
3. Supprimer de la PR l'ancien prototype `ProConnect_Documentation_Relecture_DSFR.html` : il n'est plus nécessaire au fonctionnement de la documentation et reste source de l'échec Prettier.
4. Dans un environnement Node compatible, lancer depuis `src/client` : `npm run format`, puis `npm run build`. Depuis la racine du dépôt, lancer également les contrôles CI du projet.

## Imports à ajouter dans Router.tsx

```tsx
import DecouvrirProConnect from "../Pages/DocumentationUtilisateur/DecouvrirProConnect";
import ComprendreConnexion from "../Pages/DocumentationUtilisateur/ComprendreConnexion";
import UtiliserProConnectIdentite from "../Pages/DocumentationUtilisateur/UtiliserProConnectIdentite";
import ComprendreOrganisations from "../Pages/DocumentationUtilisateur/ComprendreOrganisations";
import SecuriserIdentite from "../Pages/DocumentationUtilisateur/SecuriserIdentite";
import VerifierIdentiteEtDroits from "../Pages/DocumentationUtilisateur/VerifierIdentiteEtDroits";
import UtiliserServicesPartenaires from "../Pages/DocumentationUtilisateur/UtiliserServicesPartenaires";
import AssistanceBonnesPratiques from "../Pages/DocumentationUtilisateur/AssistanceBonnesPratiques";
```

## Routes à ajouter dans le tableau de routes (adapter au style déjà utilisé)

```tsx
{ path: "/documentation/partie-1", element: <WrapperLayout><DecouvrirProConnect /></WrapperLayout> },
{ path: "/documentation/partie-2", element: <WrapperLayout><ComprendreConnexion /></WrapperLayout> },
{ path: "/documentation/partie-3", element: <WrapperLayout><UtiliserProConnectIdentite /></WrapperLayout> },
{ path: "/documentation/partie-4", element: <WrapperLayout><ComprendreOrganisations /></WrapperLayout> },
{ path: "/documentation/partie-5", element: <WrapperLayout><SecuriserIdentite /></WrapperLayout> },
{ path: "/documentation/partie-6", element: <WrapperLayout><VerifierIdentiteEtDroits /></WrapperLayout> },
{ path: "/documentation/partie-7", element: <WrapperLayout><UtiliserServicesPartenaires /></WrapperLayout> },
{ path: "/documentation/partie-8", element: <WrapperLayout><AssistanceBonnesPratiques /></WrapperLayout> },
```

**Important** : ne pas coller ces routes dans un deuxième routeur ; elles doivent être ajoutées dans le tableau de routes existant.

## Limites et relecture

- Conversion structurelle des textes du prototype fourni, sans validation métier de leur exactitude.
- Les liens externes de la FAQ Crisp sont conservés tels quels : vérifier qu'ils fonctionnent avant publication.
- Les liens internes vers le glossaire sont normalisés ; les renvois des définitions pointent vers les parties du guide.
- Le formulaire de commentaires UX local du prototype HTML n'est pas repris dans le site de production (pas de stockage local de commentaires).
- Le formatage Prettier et la compilation n'ont pas été exécutés avec les dépendances du dépôt dans cet environnement ; ils doivent être vérifiés dans la PR.
- Vérifier avec Raph la structure du routeur et avec Laetitia le contenu fonctionnel, en particulier les fonctionnalités en cours de déploiement.
