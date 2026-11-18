import { Link } from "react-router-dom";
import { DocumentationLayout } from "./DocumentationLayout";
import { documentationParties, glossairePath } from "./documentationData";

export default function DocumentationAccueil() {
  return (
    <DocumentationLayout>
      <h1>Documentation utilisateur ProConnect</h1>
      <p className="fr-text--lead">
        Découvrez le fonctionnement de ProConnect, de la première connexion à la
        sécurisation de votre identité.
      </p>
      <h2>Sommaire</h2>
      <ol>
        {documentationParties.map((partie) => (
          <li key={partie.numero} className="fr-mb-3w">
            <h3 className="fr-h5">
              <Link to={partie.path}>{partie.numero} — {partie.titre}</Link>
            </h3>
          </li>
        ))}
        <li className="fr-mb-3w">
          <h3 className="fr-h5"><Link to={glossairePath}>IX — Glossaire ProConnect</Link></h3>
          <p>40 définitions, exemples et recherche par mots courants.</p>
        </li>
      </ol>
    </DocumentationLayout>
  );
}
