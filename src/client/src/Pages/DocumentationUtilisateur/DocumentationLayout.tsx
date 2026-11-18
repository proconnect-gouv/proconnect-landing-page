import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { DocumentationNavigation } from "./DocumentationNavigation";
import { documentationParties, glossairePath } from "./documentationData";
import "./documentation.css";

export function DocumentationLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const current = documentationParties.find((partie) => partie.path === pathname);
  const pageTitle = current?.titre ?? (pathname === glossairePath ? "Glossaire" : "");
  const isHome = pathname === "/documentation" || pathname === "/documentation/";

  return (
    <div className="pc-doc">
      <div className="pc-doc__hero">
        <div className="fr-container pc-doc__hero-inner">
          {!isHome && (
            <nav aria-label="Fil d’Ariane" className="pc-doc__breadcrumb">
              <Link to="/documentation">Documentation utilisateur</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{pageTitle}</span>
            </nav>
          )}
          <p className="pc-doc__eyebrow">CENTRE DE DOCUMENTATION</p>
          <h1>{isHome ? "Comprendre et utiliser ProConnect" : pageTitle}</h1>
          <p>
            {isHome
              ? "Des explications claires et des conseils pratiques pour vous connecter, gérer votre identité professionnelle et accéder aux services partenaires."
              : "Un guide pratique pour avancer à votre rythme et retrouver facilement les informations dont vous avez besoin."}
          </p>
        </div>
      </div>
      <div className="fr-container pc-doc__grid">
        <aside className="pc-doc__sidebar">
          <DocumentationNavigation />
        </aside>
        <div className="pc-doc__content">{children}</div>
      </div>
    </div>
  );
}
