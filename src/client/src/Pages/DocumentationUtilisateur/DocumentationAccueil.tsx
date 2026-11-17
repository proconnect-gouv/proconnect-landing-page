
const parties = [
  {
    titre: "I — Découvrir ProConnect",
    description: "Comprendre le service et son écosystème.",
  },
  {
    titre: "II — Comprendre la connexion",
    description: "Découvrir les parcours d'authentification.",
  },
  {
    titre: "III — Utiliser ProConnect Identité",
    description: "Créer et gérer son compte.",
  },
  {
    titre: "IV — Comprendre les organisations",
    description: "Comprendre les SIRET, les rattachements et la modération.",
  },
  {
    titre: "V — Sécuriser son identité",
    description: "Découvrir les mécanismes de sécurité.",
  },
  {
    titre: "VI — Vérifier son identité et ses droits",
    description: "Comprendre les vérifications et la certification.",
  },
  {
    titre: "VII — Utiliser les services partenaires",
    description: "Comprendre l'accès aux services.",
  },
  {
    titre: "VIII — Assistance et bonnes pratiques",
    description: "Adopter les bons réflexes.",
  },
];

function DocumentationAccueil() {
  return (
    <div className="fr-container fr-py-6w">
      <h1>Documentation utilisateur ProConnect</h1>

      <p className="fr-text--lead">
        Bienvenue dans le guide utilisateur ProConnect. Découvrez
        progressivement le fonctionnement de ProConnect, de la première
        connexion à la sécurisation de votre identité.
      </p>

      <h2>Sommaire</h2>

      <ol>
        {parties.map((partie) => (
          <li key={partie.titre} className="fr-mb-3w">
            <h3 className="fr-h5">{partie.titre}</h3>
            <p>{partie.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DocumentationAccueil;
