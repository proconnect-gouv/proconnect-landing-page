import React from "react";
import "./roadmap.css";
import { useTitle } from "../lib/useTitle";

function Roadmap() {
  useTitle("Feuille de route");

  return (
    <React.Fragment>
      <div className="fr-container fr-my-5w">
        <h1>Feuille de route</h1>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12">
            <nav className="navmenu fr-col-12">
              <ul className="roadmap-list">
                <li className="roadmap-item">
                  <div className="bubble fr-py-5v">
                    <h2 className="fr-h6 fr-mb-1w">Semestre deux 2023</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Fusion avec MonComptePro : tous les agents de la
                        fonction publique peuvent se connecter à AgentConnect.
                      </li>
                      <li>
                        Parcours utilisateur amélioré avec la connexion par
                        adresse email.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Semestre un 2024</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Migration de l'infrastructure cloud de MonComptePro.
                      </li>
                      <li>
                        Outillage interne : nouvelle interface de modération.
                      </li>
                      <li>
                        Premier fournisseur de service à destination du secteur
                        privé :{" "}
                        <a href="https://egapro.travail.gouv.fr/">Egapro</a>.
                      </li>
                      <li>Refonte graphique</li>
                      <li>
                        MonComptePro permet la connexion en Authentification
                        Double Facteur
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Semestre deux 2024</h2>
                    <ul className="roadmap-event-list">
                      <li>France Travail rejoint la fédération d'identité.</li>
                      <li>
                        AgentConnect est disponible pour les professionnels du
                        secteur privé et devient ProConnect.
                      </li>
                      <li>
                        Le ministère de la Justice rejoint la fédération
                        d’identité
                      </li>
                      <li>
                        La Gendarmerie Nationale et la Police Nationale
                        rejoignent la Fédération d'Identité
                      </li>
                      <li>InclusionConnect fusionne avec ProConnect</li>
                      <li>
                        Le Ministère de l'Agriculture et de la Souveraineté
                        Alimentaire rejoint la fédération d’identité
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Semestre un 2025</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Nouveau fournisseur de service :{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.tchap.gouv.fr/"
                        >
                          Tchap
                          <span className="visually-hidden">
                            - nouvelle fenêtre
                          </span>
                        </a>
                        .
                      </li>
                      <li>
                        Les Services du Premier Ministre rejoignent la
                        fédération d'identité
                      </li>
                      <li>
                        Ouverture de l&rsquo;
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://partenaires.proconnect.gouv.fr/"
                        >
                          Espace Partenaires
                          <span className="visually-hidden">
                            - nouvelle fenêtre
                          </span>
                        </a>
                      </li>
                      <li>Authentification multifacteur dans ProConnect</li>
                      <li>Certification dirigeant</li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Semestre deux 2025</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        MFA : des premiers services utilisent ProConnect MFA.
                      </li>
                      <li>
                        Création d'un plan de reprise d'activité (PRA) sur une
                        deuxième zone d'hébergement
                      </li>
                      <li>Compatibilité fournisseurs d'identité Entra ID</li>
                      <li>
                        Réconciliation d'identité lors d'un passage de
                        ProConnect Identité vers un autre fournisseur d'identité
                      </li>
                      <li>Amélioration de l'accessibilité de ProConnect</li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item active">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Trimestre un 2026</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Support du <code>siret_hint</code>
                      </li>
                      <li>Nouvelle interface utilisateur</li>
                      <li>Refonte des niveaux d'identité</li>
                      <li>
                        Utilisation de FranceConnect comme preuve d'identité
                        physique
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">Trimestre deux 2026</h2>
                    <ul className="roadmap-event-list">
                      <li>
                        Support MFA chez tous nos fournisseurs d'identité.
                      </li>

                      <li>Migration sur une nouvelle infrastructure cloud</li>
                      <li>
                        Utilisation de FranceConnect+ comme preuve d'identité
                        physique
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="roadmap-item">
                  <div className="bubble">
                    <h2 className="fr-h6 fr-mb-1w">
                      Semestre deux 2026 (prévisionnel)
                    </h2>
                    <ul className="roadmap-event-list">
                      <li>Début des travaux de Certification eiDAS</li>
                      <li>Utilisation de la DSN pour certifier les employés</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Roadmap;
