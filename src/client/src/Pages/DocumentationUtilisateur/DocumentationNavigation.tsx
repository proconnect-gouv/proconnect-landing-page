import { Link, NavLink } from "react-router-dom";
import { documentationParties, glossairePath } from "./documentationData";

export function DocumentationNavigation() {
  return (
    <nav aria-label="Navigation dans la documentation" className="pc-doc__sidebox">
      <p className="pc-doc__sideheading">Dans ce guide</p>
      <ul className="pc-doc__nav">
        <li>
          <NavLink to="/documentation" end className={({ isActive }) => isActive ? "active" : ""}>
            <span className="pc-doc__nav-num" aria-hidden="true">⌂</span>
            Vue d’ensemble
          </NavLink>
        </li>
        {documentationParties.map((partie) => (
          <li key={partie.numero}>
            <NavLink to={partie.path} className={({ isActive }) => isActive ? "active" : ""}>
              <span className="pc-doc__nav-num">{partie.numero}</span>
              <span>{partie.titre}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to={glossairePath} className={({ isActive }) => isActive ? "active" : ""}>
            <span className="pc-doc__nav-num" aria-hidden="true">Aa</span>
            Glossaire
          </NavLink>
        </li>
      </ul>
      <div className="pc-doc__sidefooter">
        <Link to={glossairePath}>Un mot inconnu ? Consulter le glossaire</Link>
      </div>
    </nav>
  );
}
