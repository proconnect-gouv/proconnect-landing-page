import { useTitle } from "../lib/useTitle";

function Accessibility() {
  useTitle("Accessibilité");

  return (
    <div className="fr-container fr-my-5w">
      <h1>Déclaration d’accessibilité</h1>
      <p>
        <strong>L'Opérateur des Produits Interministériels</strong> s’engage à
        rendre ses sites internet, intranet, extranet et ses progiciels
        accessibles (et ses applications mobiles et mobilier urbain numérique)
        conformément à l’article 47 de la loi n<sup>o</sup>&nbsp;2005-102 du
        11&nbsp;février 2005.
      </p>

      <p>
        Cette déclaration d’accessibilité s’applique à{" "}
        <strong>https://www.proconnect.gouv.fr/</strong>.
      </p>

      <h2>État de conformité</h2>
      <p>
        <strong>
          ProConnect (site vitrine) | Contre-audit | Septembre 2025{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.proconnect.gouv.fr/"
          >
            https://www.proconnect.gouv.fr/
          </a>
        </strong>{" "}
        est <strong>partiellement conforme</strong> avec le référentiel général
        d’amélioration de l’accessibilité (RGAA).
      </p>

      <h3>Résultats des tests</h3>

      <p>
        L’audit de conformité réalisé par{" "}
        <strong>la Brigade d'Intervention du Numérique de la DINUM</strong>{" "}
        révèle que <strong>89&nbsp;%</strong> des critères du RGAA version 4.1.2
        sont respectés.
      </p>

      <h2>Contenus non accessibles</h2>

      <div>
        <p>
          <strong>Composant Crisp</strong>
          <br />
          Ce composant contient plusieurs non-conformités.
          <br />
          Afin de ne pas alourdir le score sur ce seul composant externe,
          certaines erreurs ont été regroupées :
        </p>
        <ul className="fr-mb-6v">
          <li>Certains contrastes ne sont pas assez élevés</li>

          <li>Les intitulés de boutons ne sont pas explicites</li>

          <li>La modale n'a pas de nom accessible</li>

          <li>Le focus n'est pas piégé dans la modale</li>

          <li>
            La fonctionnalité de téléchargement de fichier n'est pas accessible
            au clavier
          </li>

          <li>
            Les messages de statut ne sont pas restitués par les technologies
            d'assistance
          </li>

          <li>L'ordre de tabulation peut ne pas être cohérent</li>
        </ul>
      </div>

      <h2> Établissement de cette déclaration d’accessibilité </h2>
      <p>
        Cette déclaration a été établie le <strong>8 septembre 2025</strong>.
        Elle a été mise à jour le <strong>22 octobre 2025</strong>.
      </p>

      <h3>Technologies utilisées pour la réalisation de l’audit</h3>

      <ul className="fr-mb-6v">
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Express</li>
      </ul>

      <h3>Environnement de test</h3>

      <p>
        Les vérifications de restitution de contenus ont été réalisées sur la
        base de la combinaison fournie par la base de référence du RGAA, avec
        les versions suivantes&nbsp;:
      </p>

      <ul className="fr-mb-6v">
        <li>Sur Ordinateur MacOS avec Safari et VoiceOver</li>
        <li>Sur Ordinateur Windows avec Firefox et JAWS</li>
        <li>Sur Ordinateur Windows avec Firefox et NVDA</li>
      </ul>

      <h3>Outils pour évaluer l’accessibilité</h3>

      <ul className="fr-mb-6v">
        <li>Web Developer Toolbar</li>
        <li>HeadingsMap</li>
        <li>ArcToolkit</li>
        <li>WCAG Contrast checker</li>
        <li>Inspecteur de composants</li>
        <li>Validateur HTML du W3C</li>
      </ul>

      <h3>
        Pages du site ayant fait l’objet de la vérification de conformité{" "}
      </h3>

      <ul className="fr-mb-6v">
        <li>
          Accueil <strong>https://www.proconnect.gouv.fr/</strong>
        </li>
        <li>
          Feuille de route{" "}
          <strong>https://www.proconnect.gouv.fr/feuille-de-route</strong>
        </li>
        <li>
          Mentions légales{" "}
          <strong>https://www.proconnect.gouv.fr/mentions-legales</strong>
        </li>
        <li>
          Accessibilité{" "}
          <strong>https://www.proconnect.gouv.fr/accessibilite</strong>
        </li>
        <li>
          Plan du site{" "}
          <strong>https://www.proconnect.gouv.fr/plan-du-site</strong>
        </li>
        <li>
          CGU <strong>https://www.proconnect.gouv.fr/cgu#url-anchor-gdc</strong>
        </li>
        <li>
          Tests de recommandations{" "}
          <strong>https://www.proconnect.gouv.fr/recommandation-test</strong>
        </li>
        <li>
          Annuaire des services{" "}
          <strong>https://www.proconnect.gouv.fr/services</strong>
        </li>
        <li>
          Statistiques <strong>https://www.proconnect.gouv.fr/stats</strong>
        </li>
        <li>
          Mon compte (mode lecture){" "}
          <strong>https://www.proconnect.gouv.fr/mon-compte</strong>
        </li>
      </ul>

      <h2>Retour d’information et contact</h2>

      <p>
        Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
        pouvez contacter le responsable de ProConnect Fédération | Contre-audit
        | Septembre 2025 pour être orienté vers une alternative accessible ou
        obtenir le contenu sous une autre forme.
      </p>

      <ul className="fr-mb-6v">
        <li>
          Contacter{" "}
          <strong>
            L'Opérateur des Produits Interministériels&nbsp;:
            support+federation@proconnect.gouv.fr
          </strong>
        </li>
      </ul>

      <h2>Voies de recours</h2>

      <p>
        Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à
        un contenu ou une fonctionnalité du site, que vous nous le signalez et
        que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes
        en droit de faire parvenir vos doléances ou une demande de saisine au
        Défenseur des droits.
      </p>

      <p>Plusieurs moyens sont à votre disposition&nbsp;:</p>
      <ul className="fr-mb-6v">
        <li>
          <a
            href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine"
            target="_blank"
            rel="noreferrer noopener"
          >
            Écrire un message au Défenseur des droits{" "}
            <span>nouvelle fenêtre</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.defenseurdesdroits.fr/carte-des-delegues"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contacter le délégué du Défenseur des droits dans votre région{" "}
            <span>nouvelle fenêtre</span>
          </a>
        </li>
        <li>
          Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)
          à&nbsp;:
          <br />
          <span>
            Défenseur des droits
            <br /> Libre réponse 71120
            <br /> 75342 Paris CEDEX 07
          </span>
        </li>
      </ul>
    </div>
  );
}

export { Accessibility };
