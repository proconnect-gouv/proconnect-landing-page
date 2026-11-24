import { DocumentationLayout } from "./DocumentationLayout";

export default function DecouvrirProConnect() {
  return (
    <DocumentationLayout>
      <article>
        <p className="fr-badge fr-badge--blue-france">Partie 1 sur 8</p>
        <h1 className="fr-h2">Partie I — Découvrir ProConnect</h1>
        <h2 className="fr-h4">
          Chapitre 1 — ProConnect, un accès commun aux services numériques
          professionnels
        </h2>
        <h3 className="fr-h6">1.1. Pourquoi ProConnect existe-t-il ?</h3>
        <p>
          Dans leur activité quotidienne, les professionnels utilisent de
          nombreux services numériques : applications administratives, outils
          collaboratifs, plateformes de démarches ou services métier.
        </p>
        <p>
          Ces services ont besoin de savoir qui se connecte. Certains doivent
          également connaître l'organisation au nom de laquelle la personne
          agit.
        </p>
        <p>
          Or, tous les professionnels ne disposent pas du même système
          informatique. Un agent ministériel peut avoir un compte géré par son
          administration, un membre d'un établissement d'enseignement supérieur
          peut utiliser les identifiants de son établissement, tandis qu'un
          salarié d'une petite entreprise peut ne disposer que d'une messagerie
          professionnelle.
        </p>
        <p>
          ProConnect répond à cette diversité en proposant un dispositif commun
          d'identification et d'authentification des professionnels.
        </p>
        <p>
          Son objectif n'est pas d'imposer un compte unique géré par une seule
          administration, mais de permettre à plusieurs systèmes d'identité de
          fonctionner avec les services numériques partenaires.
        </p>
        <h3 className="fr-h6">
          1.2. Un service fédéré plutôt qu'un compte universel
        </h3>
        <p>Pour comprendre ProConnect, il faut distinguer deux notions.</p>
        <p>
          <strong>L'identité professionnelle</strong>
          correspond aux informations permettant de reconnaître une personne
          dans le cadre de son activité : notamment son nom, son prénom, son
          adresse électronique professionnelle et son organisation.
        </p>
        <p>
          <strong>L'authentification</strong>
          est le mécanisme permettant de vérifier qu'une personne est bien celle
          qu'elle prétend être lorsqu'elle se connecte.
        </p>
        <p>
          ProConnect repose sur un principe de fédération d'identité : plusieurs
          organismes peuvent assurer l'authentification de leurs utilisateurs,
          tandis que les services partenaires s'appuient sur ProConnect pour
          recevoir les informations nécessaires.
        </p>
        <p>
          Ainsi, utiliser ProConnect ne signifie pas nécessairement posséder un
          compte ProConnect Identité.
        </p>
        <p>
          Un professionnel peut utiliser les identifiants de son ministère, de
          son administration ou de son établissement lorsque celui-ci dispose
          d'un fournisseur d'identité compatible.
        </p>
        <h2 className="fr-h4">Chapitre 2 — Les acteurs de l'écosystème</h2>
        <h3 className="fr-h6">2.1. Le professionnel</h3>
        <p>
          Le professionnel est la personne qui souhaite accéder à une
          application ou effectuer une démarche dans le cadre de son activité.
        </p>
        <p>
          Il peut appartenir au secteur public ou au secteur privé, selon les
          conditions d'accès du service concerné.
        </p>
        <p>
          Son identité doit être personnelle et nominative. Un compte ne doit
          pas être partagé entre plusieurs personnes.
        </p>
        <h3 className="fr-h6">2.2. Le fournisseur de services (FS)</h3>
        <p>
          Le fournisseur de services est l'organisme qui propose l'application à
          laquelle le professionnel souhaite accéder.
        </p>
        <p>
          Il peut s'agir d'une administration, d'une collectivité ou d'un
          organisme proposant un service numérique compatible avec ProConnect.
        </p>
        <p>
          Le fournisseur de services intègre le bouton de connexion ProConnect
          dans son application.
        </p>
        <p>
          Il définit également les règles d'accès à son service. Par exemple,
          certaines fonctionnalités peuvent être réservées aux membres d'une
          organisation, à certains profils ou à des personnes disposant d'une
          habilitation particulière.
        </p>
        <p>
          Une authentification réussie avec ProConnect ne garantit donc pas que
          toutes les fonctionnalités du service seront accessibles.
        </p>
        <h3 className="fr-h6">2.3. Le fournisseur d'identité (FI)</h3>
        <p>
          Le fournisseur d'identité est le système qui authentifie le
          professionnel.
        </p>
        <p>
          Il peut être géré par une administration, un ministère, un
          établissement ou un autre organisme autorisé à rejoindre la Fédération
          ProConnect.
        </p>
        <p>
          Le fournisseur d'identité vérifie l'identité de la personne selon les
          méthodes qu'il met à sa disposition : identifiants professionnels,
          authentification renforcée, carte professionnelle ou autres mécanismes
          compatibles.
        </p>
        <p>
          Il transmet ensuite à ProConnect les informations d'identité
          nécessaires au parcours.
        </p>
        <p>
          Tous les fournisseurs d'identité n'utilisent pas les mêmes écrans, les
          mêmes méthodes d'authentification ou les mêmes procédures de
          récupération de compte.
        </p>
        <h3 className="fr-h6">2.4. ProConnect Fédération (PCF)</h3>
        <p>
          ProConnect Fédération constitue le point de rencontre entre les
          fournisseurs de services et les fournisseurs d'identité.
        </p>
        <p>
          Lorsqu'un professionnel choisit de se connecter à une application avec
          ProConnect, la Fédération intervient pour l'orienter vers le
          fournisseur d'identité approprié et permettre le retour de
          l'authentification vers le service demandé.
        </p>
        <p>
          Elle évite ainsi à chaque service partenaire de devoir intégrer
          séparément les systèmes d'identité de toutes les administrations et
          organisations.
        </p>
        <p>
          La Fédération ne se substitue pas au fournisseur d'identité dans la
          gestion de ses comptes et de ses moyens d'authentification.
        </p>
        <h3 className="fr-h6">2.5. ProConnect Identité (PCI)</h3>
        <p>
          ProConnect Identité est un fournisseur d'identité opéré par la DINUM.
        </p>
        <p>
          Il permet aux professionnels ne disposant pas d'un fournisseur
          d'identité dédié compatible avec la Fédération d'utiliser une identité
          professionnelle fournie dans cet écosystème.
        </p>
        <p>
          Il dispose de ses propres parcours de création de compte, de
          connexion, de gestion des organisations et de sécurisation.
        </p>
        <p>Ces fonctionnalités seront étudiées en détail dans la Partie III.</p>
        <p>
          Il est important de comprendre que ProConnect Identité n'est pas
          synonyme de ProConnect Fédération : il en est une composante.
        </p>
        <h2 className="fr-h4">
          Chapitre 3 — Comment les acteurs travaillent ensemble
        </h2>
        <p>
          Imaginons une professionnelle qui souhaite accéder à une application
          administrative.
        </p>
        <p>
          Elle commence par ouvrir le site de l'application. Sur la page de
          connexion, elle sélectionne le bouton ProConnect.
        </p>
        <p>
          Le service partenaire l'oriente alors vers la Fédération ProConnect.
        </p>
        <p>
          À partir des informations du parcours, notamment son adresse
          électronique professionnelle, ProConnect peut identifier un
          fournisseur d'identité correspondant à son organisation.
        </p>
        <p>
          La professionnelle poursuit son authentification auprès de ce
          fournisseur.
        </p>
        <p>
          Une fois l'authentification réussie, le fournisseur d'identité
          communique le résultat à ProConnect, qui permet ensuite à
          l'application partenaire de recevoir les informations prévues pour
          reconnaître l'utilisateur.
        </p>
        <p>L'application peut alors appliquer ses propres règles d'accès.</p>
        <p>Ce parcours comprend donc plusieurs responsabilités distinctes :</p>
        <ul>
          <li>
            Le fournisseur de services propose l'application et gère les droits
            d'accès.
          </li>
          <li>
            ProConnect Fédération assure l'interopérabilité et l'orchestration
            du parcours.
          </li>
          <li>Le fournisseur d'identité authentifie le professionnel.</li>
          <li>
            L'organisation d'appartenance constitue une information importante
            pour identifier le contexte professionnel de l'utilisateur.
          </li>
        </ul>
        <h2 className="fr-h4">
          Chapitre 4 — Pourquoi existe-t-il plusieurs fournisseurs d'identité ?
        </h2>
        <h3 className="fr-h6">
          4.1. Les systèmes d'identité sont déjà présents dans les organisations
        </h3>
        <p>
          De nombreuses administrations et organisations disposent de leurs
          propres outils de gestion des comptes professionnels.
        </p>
        <p>
          Ces systèmes permettent aux personnes concernées de se connecter à
          leurs applications internes et de gérer leurs accès.
        </p>
        <p>
          La Fédération ProConnect permet de réutiliser ces identités dans un
          environnement commun, lorsque le fournisseur d'identité a été intégré
          au dispositif.
        </p>
        <p>
          L'utilisateur peut ainsi conserver ses identifiants habituels, sans
          nécessairement créer un compte distinct dans ProConnect Identité.
        </p>
        <h3 className="fr-h6">4.2. Les fournisseurs d'identité ministériels</h3>
        <p>
          Certains ministères et administrations disposent de fournisseurs
          d'identité dédiés.
        </p>
        <p>
          Un agent relevant d'un tel dispositif peut être orienté vers le
          système d'authentification de son administration.
        </p>
        <p>
          Le fournisseur d'identité proposé dépend de l'organisation, de la
          configuration de la Fédération et des conditions propres au parcours.
        </p>
        <p>
          Il ne faut donc pas supposer que tous les agents publics utilisent
          ProConnect Identité.
        </p>
        <h3 className="fr-h6">4.3. La Fédération Éducation-Recherche</h3>
        <p>
          Les établissements d'enseignement supérieur et de recherche peuvent
          disposer de mécanismes d'identité fédérée, notamment dans l'écosystème
          RENATER.
        </p>
        <p>
          Pour les utilisateurs concernés, le parcours peut permettre de
          sélectionner leur établissement, puis de s'authentifier avec les
          identifiants fournis par celui-ci.
        </p>
        <p>
          L'établissement demeure alors responsable de son système
          d'authentification.
        </p>
        <p>
          Le professionnel n'a pas nécessairement besoin de créer un compte
          ProConnect Identité pour accéder au service partenaire.
        </p>
        <h3 className="fr-h6">
          4.4. ProConnect Identité comme fournisseur alternatif
        </h3>
        <p>
          Lorsque l'organisation ne dispose pas d'un fournisseur d'identité
          compatible, ProConnect Identité peut constituer une solution.
        </p>
        <p>
          Le professionnel suit alors les étapes propres à PCI, notamment celles
          permettant de créer ou d'utiliser son compte et d'établir son lien
          avec une organisation.
        </p>
        <p>
          Ce parcours peut comporter des vérifications supplémentaires selon la
          situation.
        </p>
        <h3 className="fr-h6">
          4.5. Pourquoi le fournisseur proposé peut-il varier ?
        </h3>
        <p>
          Le fournisseur d'identité proposé dépend notamment des domaines
          professionnels déclarés dans la Fédération.
        </p>
        <p>
          Un nom de domaine peut être associé à un fournisseur d'identité
          institutionnel. À l'inverse, une adresse professionnelle sans
          fournisseur dédié peut conduire à proposer ProConnect Identité, sous
          réserve des règles applicables.
        </p>
        <p>
          Le choix peut également dépendre de l'environnement technique,
          notamment lorsque le service est accessible depuis le Réseau
          interministériel de l'État (RIE).
        </p>
        <p>
          Ainsi, deux professionnels travaillant dans des administrations
          différentes ne suivront pas nécessairement le même parcours, même
          s'ils souhaitent accéder à la même application.
        </p>
        <h2 className="fr-h4">Chapitre 5 — Trois exemples pour comprendre</h2>
        <h3 className="fr-h6">
          5.1. Un professionnel utilisant ProConnect Identité
        </h3>
        <p>
          Une personne travaille dans une organisation qui ne dispose pas de
          fournisseur d'identité compatible avec ProConnect.
        </p>
        <p>
          Elle souhaite accéder à un service administratif proposant le bouton
          ProConnect.
        </p>
        <p>
          Après avoir renseigné son adresse professionnelle, elle peut être
          orientée vers ProConnect Identité.
        </p>
        <p>
          Elle suit alors le parcours adapté à sa situation : création ou
          utilisation d'un compte existant, vérifications nécessaires, puis
          authentification.
        </p>
        <p>
          Une fois cette étape terminée, elle retourne vers le service
          partenaire.
        </p>
        <h3 className="fr-h6">
          5.2. Un agent disposant d'un fournisseur ministériel
        </h3>
        <p>
          Un agent souhaite accéder à une application compatible avec
          ProConnect.
        </p>
        <p>
          Son administration dispose déjà d'un fournisseur d'identité intégré à
          la Fédération.
        </p>
        <p>
          Le parcours l'oriente vers ce fournisseur, où il utilise les moyens
          d'authentification mis à disposition par son administration.
        </p>
        <p>
          Le compte et les mécanismes de connexion restent gérés par son
          fournisseur institutionnel.
        </p>
        <p>L'agent revient ensuite vers l'application partenaire.</p>
        <h3 className="fr-h6">
          5.3. Un membre d'un établissement d'enseignement supérieur
        </h3>
        <p>
          Une personne appartenant à un établissement raccordé à l'écosystème
          RENATER souhaite accéder à un service utilisant ProConnect.
        </p>
        <p>
          Elle passe par le parcours de connexion proposé par la Fédération,
          sélectionne le fournisseur approprié et, lorsque cela est prévu, son
          établissement.
        </p>
        <p>
          Elle s'authentifie ensuite avec les identifiants de son établissement.
        </p>
        <p>
          Le résultat de cette authentification permet de poursuivre le parcours
          vers le service demandé.
        </p>
        <h2 className="fr-h4">
          Chapitre 6 — Identité, organisation et droits d'accès : trois notions
          différentes
        </h2>
        <h3 className="fr-h6">6.1. L'identité de la personne</h3>
        <p>
          L'identité permet de reconnaître le professionnel qui se connecte.
        </p>
        <p>
          Elle comprend des informations personnelles et professionnelles
          transmises dans le cadre de l'authentification.
        </p>
        <h3 className="fr-h6">6.2. L'appartenance à une organisation</h3>
        <p>
          Un professionnel exerce son activité au sein d'une organisation ou
          agit pour son compte.
        </p>
        <p>
          Dans ProConnect, cette organisation est notamment représentée par son
          identifiant SIRET lorsque le parcours le prévoit.
        </p>
        <p>
          Cette information permet aux services partenaires de connaître le
          contexte professionnel associé à la connexion.
        </p>
        <p>
          Elle ne doit pas être confondue avec une autorisation générale d'agir
          au nom de l'organisation.
        </p>
        <h3 className="fr-h6">
          6.3. Les habilitations accordées par le service
        </h3>
        <p>
          Un service peut avoir besoin de vérifier davantage que l'identité et
          l'organisation de l'utilisateur.
        </p>
        <p>
          Par exemple, il peut réserver une démarche à certaines personnes ou
          exiger une habilitation particulière.
        </p>
        <p>
          Ces autorisations relèvent du service partenaire et de ses propres
          règles métier.
        </p>
        <p>
          C'est pourquoi une personne peut réussir son authentification avec
          ProConnect sans pouvoir effectuer l'action qu'elle souhaitait
          réaliser.
        </p>
        <h2 className="fr-h4">
          Chapitre 7 — Comprendre les différents niveaux de sécurité
        </h2>
        <p>Tous les services numériques n'exposent pas aux mêmes risques.</p>
        <p>
          Certains peuvent accepter un parcours d'authentification courant,
          tandis que d'autres nécessitent des garanties supplémentaires.
        </p>
        <p>
          Un fournisseur de services peut ainsi exiger un niveau
          d'authentification plus élevé, notamment au moyen d'une
          authentification multifacteur.
        </p>
        <p>Les méthodes utilisées dépendent du fournisseur d'identité.</p>
        <p>
          Pour ProConnect Identité, les mécanismes proposés comprennent
          notamment les applications d'authentification et les clés d'accès.
        </p>
        <p>
          Les fournisseurs institutionnels peuvent utiliser d'autres moyens
          adaptés à leur environnement.
        </p>
        <p>
          Le fait qu'un utilisateur ait déjà configuré une méthode de sécurité
          dans ProConnect Identité ne signifie pas qu'il utilise cette même
          méthode lorsqu'il s'authentifie auprès d'un autre fournisseur.
        </p>
        <p>
          La Partie V approfondira les niveaux de confiance, l'authentification
          multifacteur et les mécanismes de récupération.
        </p>
        <h2 className="fr-h4">
          Chapitre 8 — Les notions essentielles à retenir
        </h2>
        <p>
          ProConnect est un écosystème fédéré d'identification et
          d'authentification des professionnels.
        </p>
        <p>Il ne correspond pas à un seul compte ou à une seule interface.</p>
        <p>
          Le fournisseur de services propose l'application. Le fournisseur
          d'identité authentifie la personne. ProConnect Fédération permet à ces
          systèmes de fonctionner ensemble.
        </p>
        <p>
          ProConnect Identité est l'un des fournisseurs d'identité possibles,
          particulièrement utile lorsque le professionnel ne dispose pas d'un
          fournisseur institutionnel compatible.
        </p>
        <p>
          L'authentification, l'appartenance à une organisation et les droits
          d'accès sont des notions complémentaires, mais distinctes.
        </p>
        <p>
          <strong>Dans la Partie II</strong>, nous suivrons pas à pas les
          différents parcours de connexion : choix du fournisseur d'identité,
          redirections, authentification, retour vers le service et situations
          particulières.
        </p>
        <hr />
      </article>
    </DocumentationLayout>
  );
}
