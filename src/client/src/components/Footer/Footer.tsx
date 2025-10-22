import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

function Footer() {
  return (
    <DsfrFooter
      id="footer"
      accessibility="partially compliant"
      termsLinkProps={{
        to: "/mentions-legales",
      }}
      accessibilityLinkProps={{ to: "/accessibilite" }}
      websiteMapLinkProps={{
        to: "/plan-du-site",
      }}
      homeLinkProps={{ to: "/", title: "Accueil - ProConnect" }}
      bottomItems={[
        <a key="cgu" href="/cgu" className="fr-footer__bottom-link">
          Conditions générales d'utilisation
        </a>,
        <a key="statistiques" href="/stats" className="fr-footer__bottom-link">
          Statistiques d'utilisation
        </a>,
        <a
          key="statut"
          href="https://status.proconnect.gouv.fr/"
          className="fr-footer__bottom-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Statuts des services
          <span className="visually-hidden"> - nouvelle fenêtre</span>
        </a>,
        <a
          key="partenaire"
          href="https://partenaires.proconnect.gouv.fr/"
          className="fr-footer__bottom-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Devenez un FI ou FS partenaire
          <span className="visually-hidden"> - nouvelle fenêtre</span>
        </a>,
        headerFooterDisplayItem,
      ]}
    />
  );
}

export default Footer;
