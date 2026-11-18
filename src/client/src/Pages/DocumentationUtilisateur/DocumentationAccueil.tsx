import { Link } from "react-router-dom";
import { DocumentationLayout } from "./DocumentationLayout";
import { documentationParties, glossairePath } from "./documentationData";

const descriptions: Record<string, string> = {
  I: "Le service, ses objectifs et son fonctionnement.",
  II: "Les différentes étapes pour se connecter.",
  III: "Créer et gérer son compte professionnel.",
  IV: "SIRET, rattachements et organisations.",
  V: "Protéger son compte et ses accès.",
  VI: "Comprendre les vérifications et les droits.",
  VII: "Accéder aux applications et services partenaires.",
  VIII: "Trouver de l’aide et adopter les bons réflexes.",
};

export default function DocumentationAccueil() {
  return (
    <DocumentationLayout>
      <div className="pc-doc__page">
        <p className="fr-badge fr-badge--blue-france">Guide utilisateur</p>
        <h1>Par où commencer ?</h1>
        <p className="fr-text--lead">
          Choisissez un sujet selon votre besoin. Vous pouvez lire le guide dans
          l’ordre ou consulter directement la rubrique qui vous intéresse.
        </p>
        <div className="pc-doc__feature">
          <div>
            <strong>Vous découvrez ProConnect ?</strong>
            <p>
              Commencez par comprendre à quoi sert ProConnect et comment se
              déroule une connexion.
            </p>
          </div>
          <Link
            className="fr-btn fr-btn--secondary"
            to={documentationParties[0].path}
          >
            Découvrir ProConnect
          </Link>
        </div>
        <h2 className="fr-h4">Explorer les 8 rubriques</h2>
        <div className="pc-doc__cards">
          {documentationParties.map((partie) => (
            <Link className="pc-doc__card" to={partie.path} key={partie.numero}>
              <span className="pc-doc__card-num">PARTIE {partie.numero}</span>
              <h2>{partie.titre}</h2>
              <p>{descriptions[partie.numero]}</p>
              <span className="pc-doc__card-bottom">
                Lire cette rubrique <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="pc-doc__feature">
          <div>
            <strong>Besoin d’une définition ?</strong>
            <p>
              Retrouvez 40 termes expliqués simplement, avec des exemples et une
              recherche.
            </p>
          </div>
          <Link className="fr-btn fr-btn--secondary" to={glossairePath}>
            Ouvrir le glossaire
          </Link>
        </div>
        <p className="pc-doc__foot">
          Documentation utilisateur ProConnect · Version de travail pour
          relecture.
        </p>
      </div>
    </DocumentationLayout>
  );
}
