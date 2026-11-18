import { useMemo, useState } from "react";

type Term = { term: string; category: string; definition: string; example: string; keywords: string; part: string };
const entries: Term[] = [
  {
    "term": "Adresse e-mail professionnelle",
    "category": "Compte et connexion",
    "definition": "Adresse utilisée dans le cadre du travail, souvent fournie par l’employeur.",
    "example": "prenom.nom@administration.fr.",
    "keywords": "mail courriel messagerie",
    "part": "III"
  },
  {
    "term": "Administrateur d’un service",
    "category": "Accès et droits",
    "definition": "Personne qui gère certains paramètres ou droits d’accès d’une application.",
    "example": "Un administrateur peut autoriser un agent à accéder à un outil.",
    "keywords": "responsable gestionnaire",
    "part": "VII"
  },
  {
    "term": "Authentification",
    "category": "Compte et connexion",
    "definition": "Vérification permettant de confirmer qu’une personne est bien celle qui tente de se connecter.",
    "example": "Saisir un mot de passe, puis confirmer la connexion.",
    "keywords": "identification connexion",
    "part": "II"
  },
  {
    "term": "Autorisation d’accès",
    "category": "Accès et droits",
    "definition": "Permission d’utiliser un service ou une fonctionnalité particulière.",
    "example": "On peut se connecter avec ProConnect sans avoir accès à tous les dossiers.",
    "keywords": "permission accès refusé",
    "part": "VII"
  },
  {
    "term": "Compte professionnel",
    "category": "Compte et connexion",
    "definition": "Compte personnel utilisé dans le cadre de son activité professionnelle.",
    "example": "Chaque agent utilise son propre compte.",
    "keywords": "profil utilisateur",
    "part": "III"
  },
  {
    "term": "Clé d’accès (passkey)",
    "category": "Sécurité",
    "definition": "Méthode sécurisée de connexion utilisant un appareil ou un gestionnaire de clés d’accès.",
    "example": "Confirmer une connexion avec Touch ID, si proposé.",
    "keywords": "passkey empreinte visage téléphone",
    "part": "V"
  },
  {
    "term": "Code de confirmation",
    "category": "Sécurité",
    "definition": "Code temporaire utilisé pour confirmer une connexion ou une opération.",
    "example": "Recevoir un code à 10 chiffres par e-mail.",
    "keywords": "code reçu email dix chiffres",
    "part": "II"
  },
  {
    "term": "Code de vérification",
    "category": "Sécurité",
    "definition": "Code permettant de confirmer une action ou une étape d’identification.",
    "example": "Un parcours peut demander un code supplémentaire.",
    "keywords": "code temporaire",
    "part": "V"
  },
  {
    "term": "Connexion",
    "category": "Compte et connexion",
    "definition": "Action d’accéder à un compte ou une application après une vérification d’identité.",
    "example": "Cliquer sur « Se connecter avec ProConnect ».",
    "keywords": "login se connecter",
    "part": "II"
  },
  {
    "term": "Domaine de messagerie",
    "category": "Compte et connexion",
    "definition": "Partie de l’adresse e-mail située après le signe @.",
    "example": "Dans prenom.nom@mairie.fr, le domaine est mairie.fr.",
    "keywords": "domaine arobase email",
    "part": "III"
  },
  {
    "term": "Double authentification (2FA)",
    "category": "Sécurité",
    "definition": "Protection ajoutant une deuxième vérification lors de la connexion.",
    "example": "Après le mot de passe, saisir un code temporaire.",
    "keywords": "2fa mfa deuxième facteur",
    "part": "V"
  },
  {
    "term": "Éligibilité",
    "category": "Accès et droits",
    "definition": "Conditions à remplir pour utiliser un service ou un parcours.",
    "example": "Une application peut être réservée à certaines organisations.",
    "keywords": "conditions admissible",
    "part": "VII"
  },
  {
    "term": "Établissement",
    "category": "Organisations",
    "definition": "Lieu ou unité d’activité d’une organisation, généralement identifié par un SIRET.",
    "example": "Une organisation peut avoir plusieurs établissements.",
    "keywords": "site structure",
    "part": "IV"
  },
  {
    "term": "Fédération d’identité",
    "category": "Écosystème ProConnect",
    "definition": "Fonctionnement permettant à des applications de s’appuyer sur différents systèmes de connexion.",
    "example": "Un agent utilise le système de connexion de son administration.",
    "keywords": "fédération identité",
    "part": "I"
  },
  {
    "term": "Fournisseur d’identité (FI)",
    "category": "Écosystème ProConnect",
    "definition": "Service qui vérifie l’identité de la personne au moment de la connexion.",
    "example": "Le système de connexion d’un ministère peut être fournisseur d’identité.",
    "keywords": "fi connexion",
    "part": "II"
  },
  {
    "term": "Fournisseur de services (FS)",
    "category": "Écosystème ProConnect",
    "definition": "Application ou site auquel une personne souhaite accéder avec ProConnect.",
    "example": "Un portail proposant « Se connecter avec ProConnect ».",
    "keywords": "fs application partenaire",
    "part": "VII"
  },
  {
    "term": "FranceConnect",
    "category": "Écosystème ProConnect",
    "definition": "Service public permettant de s’identifier à partir d’un compte existant auprès d’un fournisseur partenaire.",
    "example": "Certains parcours proposent une vérification avec FranceConnect.",
    "keywords": "france connect",
    "part": "VI"
  },
  {
    "term": "Habilitation",
    "category": "Accès et droits",
    "definition": "Droit accordé à une personne pour réaliser certaines actions dans une application.",
    "example": "Un agent peut consulter un dossier sans pouvoir le modifier.",
    "keywords": "rôle permission droit",
    "part": "VII"
  },
  {
    "term": "Identifiant",
    "category": "Compte et connexion",
    "definition": "Information permettant de retrouver un compte lors de la connexion.",
    "example": "Une adresse e-mail peut servir d’identifiant.",
    "keywords": "login utilisateur",
    "part": "II"
  },
  {
    "term": "Identité numérique",
    "category": "Écosystème ProConnect",
    "definition": "Informations utilisées pour reconnaître une personne dans un environnement numérique.",
    "example": "Le nom et le prénom peuvent contribuer à cette identité.",
    "keywords": "profil identité",
    "part": "I"
  },
  {
    "term": "Identité professionnelle",
    "category": "Écosystème ProConnect",
    "definition": "Informations permettant d’identifier une personne dans son activité professionnelle.",
    "example": "Un agent peut être identifié par son nom et son organisation.",
    "keywords": "agent professionnel",
    "part": "I"
  },
  {
    "term": "Membre d’une organisation",
    "category": "Organisations",
    "definition": "Personne dont le compte est associé à une organisation.",
    "example": "Un agent est rattaché à son administration.",
    "keywords": "appartenance rattachement",
    "part": "IV"
  },
  {
    "term": "Méthode d’authentification",
    "category": "Sécurité",
    "definition": "Moyen utilisé pour prouver son identité lors d’une connexion.",
    "example": "Mot de passe, application d’authentification ou clé d’accès.",
    "keywords": "méthode connexion 2fa",
    "part": "V"
  },
  {
    "term": "Modération",
    "category": "Organisations",
    "definition": "Examen de certaines demandes ou informations avant leur acceptation.",
    "example": "Une demande de rattachement peut nécessiter une vérification.",
    "keywords": "validation contrôle attente",
    "part": "IV"
  },
  {
    "term": "Mot de passe",
    "category": "Sécurité",
    "definition": "Information secrète protégeant l’accès à un compte.",
    "example": "Ne jamais le transmettre au support ou à un collègue.",
    "keywords": "password secret oublié",
    "part": "V"
  },
  {
    "term": "Mots de secours",
    "category": "Sécurité",
    "definition": "Mots de récupération à conserver en lieu sûr, utiles dans certains parcours pour retrouver l’accès à un compte.",
    "example": "Ils peuvent aider si l’appareil servant à confirmer les connexions est perdu.",
    "keywords": "code perdu téléphone perdu récupération",
    "part": "V"
  },
  {
    "term": "Navigateur Internet",
    "category": "Compte et connexion",
    "definition": "Logiciel permettant de consulter des sites et applications sur Internet.",
    "example": "Chrome, Firefox, Safari ou Edge.",
    "keywords": "browser chrome safari",
    "part": "VIII"
  },
  {
    "term": "Organisation",
    "category": "Organisations",
    "definition": "Structure professionnelle à laquelle une personne est associée.",
    "example": "Une mairie, un ministère ou une entreprise.",
    "keywords": "employeur structure",
    "part": "IV"
  },
  {
    "term": "ProConnect",
    "category": "Écosystème ProConnect",
    "definition": "Service permettant aux professionnels de s’identifier et de se connecter à des services numériques partenaires.",
    "example": "Choisir « Se connecter avec ProConnect » sur un portail.",
    "keywords": "pro connect",
    "part": "I"
  },
  {
    "term": "ProConnect Fédération (PCF)",
    "category": "Écosystème ProConnect",
    "definition": "Composant facilitant les connexions entre fournisseurs d’identité et services partenaires.",
    "example": "Une application utilise un système d’authentification compatible.",
    "keywords": "pcf fédération",
    "part": "II"
  },
  {
    "term": "ProConnect Identité (PCI)",
    "category": "Écosystème ProConnect",
    "definition": "Service permettant de créer et gérer une identité professionnelle ProConnect, selon les conditions applicables.",
    "example": "Il peut être utilisé lorsqu’aucun fournisseur d’identité compatible n’est disponible.",
    "keywords": "pci compte identité",
    "part": "III"
  },
  {
    "term": "Rattachement à une organisation",
    "category": "Organisations",
    "definition": "Association entre le compte d’une personne et une structure professionnelle.",
    "example": "Un professionnel associe son compte à son établissement.",
    "keywords": "rattacher ajouter entreprise",
    "part": "IV"
  },
  {
    "term": "Réinitialisation",
    "category": "Sécurité",
    "definition": "Action permettant de recommencer la configuration d’un élément de compte ou de sécurité.",
    "example": "Configurer une nouvelle méthode de connexion si le parcours le permet.",
    "keywords": "reset perdu secours",
    "part": "V"
  },
  {
    "term": "Session de connexion",
    "category": "Compte et connexion",
    "definition": "Période durant laquelle un service reconnaît une personne comme connectée.",
    "example": "Une application peut rester ouverte sans redemander immédiatement les identifiants.",
    "keywords": "session déconnexion durée",
    "part": "VII"
  },
  {
    "term": "SIREN",
    "category": "Organisations",
    "definition": "Numéro de neuf chiffres identifiant une unité légale en France.",
    "example": "Une organisation enregistrée peut disposer d’un SIREN.",
    "keywords": "numéro entreprise neuf chiffres",
    "part": "IV"
  },
  {
    "term": "SIRET",
    "category": "Organisations",
    "definition": "Numéro de quatorze chiffres identifiant un établissement, comprenant le SIREN et cinq chiffres supplémentaires.",
    "example": "Deux établissements peuvent avoir le même SIREN et des SIRET différents.",
    "keywords": "numéro établissement quatorze chiffres",
    "part": "IV"
  },
  {
    "term": "Service partenaire",
    "category": "Écosystème ProConnect",
    "definition": "Application utilisant ProConnect pour authentifier ses utilisateurs.",
    "example": "Un outil administratif qui propose la connexion via ProConnect.",
    "keywords": "application portail fs",
    "part": "VII"
  },
  {
    "term": "Support ou assistance",
    "category": "Assistance",
    "definition": "Équipe ou dispositif aidant les utilisateurs lorsqu’une difficulté survient.",
    "example": "ProConnect aide sur la connexion ; le service partenaire gère ses fonctionnalités et ses droits.",
    "keywords": "aide problème contacter ticket",
    "part": "VIII"
  },
  {
    "term": "TOTP",
    "category": "Sécurité",
    "definition": "Code temporaire généré par une application d’authentification, généralement renouvelé toutes les 30 secondes.",
    "example": "Une application affiche un code à six chiffres.",
    "keywords": "authenticator 2fa code",
    "part": "V"
  },
  {
    "term": "Vérification d’identité",
    "category": "Accès et droits",
    "definition": "Procédure visant à confirmer certaines informations sur une personne.",
    "example": "Un parcours peut demander une vérification supplémentaire.",
    "keywords": "prouver identité franceconnect",
    "part": "VI"
  }
];
const parts: Record<string, string> = {
  "I": "Découvrir ProConnect",
  "II": "Comprendre la connexion",
  "III": "Utiliser ProConnect Identité",
  "IV": "Comprendre les organisations",
  "V": "Sécuriser son identité",
  "VI": "Vérifier son identité et ses droits",
  "VII": "Utiliser les services partenaires",
  "VIII": "Assistance et bonnes pratiques"
};
const normalize = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function Glossaire() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [examples, setExamples] = useState(true);
  const categories = useMemo(() => [...new Set(entries.map((e) => e.category))].sort((a, b) => a.localeCompare(b, "fr")), []);
  const found = useMemo(() => {
    const words = normalize(search.trim()).split(/\s+/).filter(Boolean);
    return entries.filter((e) => (!category || e.category === category) && words.every((w) => normalize([e.term, e.category, e.definition, e.example, e.keywords].join(" ")).includes(w)));
  }, [search, category]);
  return (
    <main style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 72px" }}>
      <h1>Glossaire ProConnect</h1>
      <p>Vous découvrez ProConnect ? Retrouvez ici les mots et expressions utilisés dans la documentation, expliqués simplement et accompagnés d’exemples concrets.</p>
      <section aria-label="Recherche dans le glossaire" style={{ background: "#f6f6f6", padding: 20, margin: "24px 0" }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: "2 1 260px" }}>
            <label htmlFor="glossaire-recherche" style={{ display: "block", fontWeight: "bold" }}>Rechercher un mot ou une question</label>
            <input id="glossaire-recherche" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ex. : code perdu, SIRET, accès refusé…" style={{ width: "100%", padding: 12 }} />
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <label htmlFor="glossaire-categorie" style={{ display: "block", fontWeight: "bold" }}>Filtrer par thème</label>
            <select id="glossaire-categorie" value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: 12 }}>
              <option value="">Tous les thèmes</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 16 }}>
          <strong aria-live="polite">{found.length} définition{found.length > 1 ? "s" : ""} sur {entries.length}</strong>
          <button type="button" onClick={() => setExamples((v) => !v)}>{examples ? "Masquer les exemples" : "Afficher les exemples"}</button>
          <button type="button" onClick={() => { setSearch(""); setCategory(""); }}>Effacer les filtres</button>
        </div>
      </section>
      <div style={{ display: "grid", gap: 12 }}>
        {found.map((e) => <article key={e.term} style={{ border: "1px solid #ddd", padding: 22 }}>
          <h2 style={{ marginTop: 0, fontSize: "1.3rem" }}>{e.term}</h2>
          <p>{e.definition}</p>
          {examples && <p style={{ background: "#f6f6f6", borderLeft: "3px solid #000091", padding: 12 }}><strong>Exemple : </strong>{e.example}</p>}
          <p style={{ fontSize: "0.9rem" }}>Thème : {e.category} · Voir la partie {e.part} — {parts[e.part]}</p>
        </article>)}
      </div>
      {found.length === 0 && <p role="status">Aucune définition trouvée. Essayez un autre mot.</p>}
    </main>
  );
}
