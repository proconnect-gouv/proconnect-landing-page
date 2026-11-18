import type { ReactNode } from "react";
import { DocumentationNavigation } from "./DocumentationNavigation";

export function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fr-container fr-py-6w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <aside className="fr-col-12 fr-col-md-4 fr-col-lg-3">
          <DocumentationNavigation />
        </aside>
        <div className="fr-col-12 fr-col-md-8 fr-col-lg-9">{children}</div>
      </div>
    </div>
  );
}
