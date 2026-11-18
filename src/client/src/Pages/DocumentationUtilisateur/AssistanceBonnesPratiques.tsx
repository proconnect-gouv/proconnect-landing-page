import { DocumentationLayout } from "./DocumentationLayout";

export default function AssistanceBonnesPratiques() {
  return (
    <DocumentationLayout>
      <article>
        <p className="fr-badge fr-badge--blue-france">Partie 8 sur 8</p>
        <h1 className="fr-h2">Partie VIII — Assistance et bonnes pratiques</h1>
        <p>
          <em>
            Trouver rapidement le bon interlocuteur, décrire une difficulté et
            accéder aux ressources utiles.
          </em>
        </p>
        <h2 className="fr-h4">Chapitre 1 — Trouver le bon interlocuteur</h2>
        <h3 className="fr-h6">
          1.1. Une assistance répartie entre plusieurs acteurs
        </h3>
        <p>
          ProConnect, les fournisseurs d'identité institutionnels et les
          services partenaires ont des responsabilités différentes. Identifier
          le moment où le problème apparaît permet de solliciter le support
          compétent.
        </p>
        <div className="fr-table">
          <table>
            <thead>
              <tr>
                <th>Votre situation</th>
                <th>Premier interlocuteur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Création ou gestion d'un compte ProConnect Identité,
                  rattachement PCI, méthodes TOTP ou passkey
                </td>
                <td>Assistance ProConnect</td>
              </tr>
              <tr>
                <td>
                  Mot de passe, carte ou compte d'un ministère ou d'un
                  établissement
                </td>
                <td>Support informatique de l'organisation</td>
              </tr>
              <tr>
                <td>Erreur pendant le parcours de connexion fédérée</td>
                <td>Assistance ProConnect, si l'erreur concerne ProConnect</td>
              </tr>
              <tr>
                <td>
                  Connexion réussie mais droits insuffisants dans l'application
                </td>
                <td>Assistance du service partenaire</td>
              </tr>
              <tr>
                <td>Difficulté directement dans FranceConnect</td>
                <td>Assistance FranceConnect ou du fournisseur utilisé</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="fr-h6">1.2. Si l'origine du problème reste inconnue</h3>
        <p>
          Commencez par consulter le
          <a href="https://proconnect.crisp.help/fr/">
            centre d'aide ProConnect
          </a>
          . Il permet de retrouver les procédures adaptées ou une orientation
          vers le support approprié.
        </p>
        <h2 className="fr-h4">
          Chapitre 2 — Préparer une demande d'assistance utile
        </h2>
        <h3 className="fr-h6">2.1. Décrire le comportement observé</h3>
        <p>
          Une demande claire précise l'action souhaitée, l'étape à laquelle le
          blocage survient et le message affiché, s'il existe. Il n'est pas
          nécessaire de connaître le vocabulaire technique de ProConnect.
        </p>
        <p>
          Exemple : « Je souhaite accéder à une application. Après avoir saisi
          mon mot de passe ProConnect Identité, une méthode d'authentification
          que je ne possède plus est demandée. »
        </p>
        <h3 className="fr-h6">
          2.2. Protéger les informations confidentielles
        </h3>
        <p>
          Ne communiquez jamais votre mot de passe, un code reçu par courriel,
          un code TOTP, vos mots de secours, une clé secrète, un jeton ou un
          cookie de session.
        </p>
        <p>
          N'envoyez pas spontanément de données personnelles ou de détails
          techniques propres à votre session pour compléter le diagnostic. Une
          description du problème suffit pour une première orientation.
        </p>
        <p>
          Une capture d'écran n'est utile que si elle apporte une information
          nécessaire et ne révèle aucun secret. Préférez une description
          textuelle lorsqu'elle suffit.
        </p>
        <h3 className="fr-h6">2.3. Suivre les indications reçues</h3>
        <p>
          Selon le problème, l'assistance peut proposer une procédure, examiner
          le rattachement ou orienter vers une autre équipe. Conservez les
          échanges relatifs à la demande pour faciliter le suivi.
        </p>
        <h2 className="fr-h4">
          Chapitre 3 — Retrouver directement la bonne procédure
        </h2>
        <p>
          Les explications détaillées figurent dans les parties thématiques du
          guide. Les liens suivants permettent d'accéder directement à l'aide
          adaptée.
        </p>
        <div className="fr-table">
          <table>
            <thead>
              <tr>
                <th>Difficulté</th>
                <th>Ressource</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adresse professionnelle non acceptée</td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/pourquoi-mon-adresse-e-mail-nest-elle-pas-acceptee-153hixq/">
                    Pourquoi mon adresse e-mail n'est-elle pas acceptée ?
                  </a>
                </td>
              </tr>
              <tr>
                <td>Code de confirmation à dix chiffres</td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/comment-regler-les-problematiques-liees-au-code-de-confirmation-a-10-chiffres-jyepuz/">
                    Résoudre les problèmes de code
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Code reçu dans une messagerie accessible seulement avec
                  ProConnect
                </td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/je-recois-mon-code-de-confirmation-proconnect-sur-une-messagerie-a-laquelle-je-dois-me-connecter-avec-proconnect-que-faire-1dp44v7/">
                    Accéder à sa messagerie pour recevoir le code
                  </a>
                </td>
              </tr>
              <tr>
                <td>Rejoindre une autre organisation</td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/comment-rattacher-son-compte-a-une-autre-organisation-1u83adu/">
                    Rattacher son compte à une autre organisation
                  </a>
                </td>
              </tr>
              <tr>
                <td>Configurer une application TOTP ou une clé d'accès</td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/configurer-la-2fa-totp-ou-passkeycle-dacces-1a6x6i0/">
                    Configurer la double authentification
                  </a>
                </td>
              </tr>
              <tr>
                <td>Vérification de l'identité civile</td>
                <td>
                  <a href="https://proconnect.crisp.help/fr/article/pourquoi-dois-je-midentifier-avec-franceconnect-1ti7e34/">
                    Pourquoi FranceConnect est-il demandé ?
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Pour une explication complète sur les rattachements, consultez la
          <strong>Partie IV</strong>. Pour la sécurité et la récupération du
          compte, consultez la
          <strong>Partie V</strong>. Pour les restrictions d'accès d'une
          application, consultez la
          <strong>Partie VII</strong>.
        </p>
        <h2 className="fr-h4">Chapitre 4 — Les ressources officielles</h2>
        <ul>
          <li>
            <a href="https://www.proconnect.gouv.fr/">
              Site officiel ProConnect
            </a>
          </li>
          <li>
            <a href="https://identite.proconnect.gouv.fr/connection-and-account">
              Espace ProConnect Identité
            </a>
          </li>
          <li>
            <a href="https://proconnect.crisp.help/fr/">
              Centre d'aide ProConnect
            </a>
          </li>
          <li>
            <a href="https://partenaires.proconnect.gouv.fr/">
              Documentation destinée aux partenaires
            </a>
          </li>
          <li>
            <a href="https://aide.franceconnect.gouv.fr/">
              Centre d'aide FranceConnect
            </a>
          </li>
        </ul>
        <h2 className="fr-h4">Chapitre 5 — Ce qu'il faut retenir</h2>
        <p>
          Pour résoudre une difficulté, identifiez d'abord à quelle étape elle
          apparaît : dans le compte, pendant le parcours ProConnect ou dans
          l'application partenaire. Consultez ensuite l'article d'aide
          correspondant ou contactez l'interlocuteur compétent.
        </p>
        <p>
          Une description simple du problème suffit pour commencer. Ne
          communiquez jamais vos secrets d'authentification. Les conseils
          détaillés pour sécuriser votre compte figurent dans la
          <strong>Partie V</strong>.
        </p>
        <p>
          <strong>Ce guide est terminé.</strong>
          Vous pouvez revenir à chaque partie selon votre besoin, sans devoir
          tout relire dans l'ordre.
        </p>
      </article>
    </DocumentationLayout>
  );
}
