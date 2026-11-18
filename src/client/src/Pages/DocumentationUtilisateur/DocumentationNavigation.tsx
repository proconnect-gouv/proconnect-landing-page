import { Link, NavLink } from "react-router-dom";
import { documentationParties, glossairePath } from "./documentationData";

export function DocumentationNavigation() {
  return (
    <nav aria-label="Navigation dans la documentation" className="fr-mb-4w">
      <Link to="/documentation" className="fr-link fr-mb-2w">Accueil de la documentation</Link>
      <ul className="fr-sidemenu__list">
        {documentationParties.map((partie) => (
          <li key={partie.numero} className="fr-sidemenu__item">
            <NavLink to={partie.path} className="fr-sidemenu__link">
              {partie.numero} — {partie.titre}
            </NavLink>
          </li>
        ))}
        <li className="fr-sidemenu__item">
          <NavLink to={glossairePath} className="fr-sidemenu__link">Glossaire</NavLink>
        </li>
      </ul>
    </nav>
  );
}
