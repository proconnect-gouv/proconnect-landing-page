import { DocumentationLayout } from "./DocumentationLayout";

export default function ComprendreConnexion() {
  return (
    <DocumentationLayout>
      <article>
      <p className="fr-badge fr-badge--blue-france">
        Partie 2 sur 8
      </p>
      <h1 className="fr-h2">
        Partie II — Comprendre la connexion
      </h1>
      <h2 className="fr-h4">
        Chapitre 1 — Le parcours de connexion avec ProConnect
      </h2>
      <h3 className="fr-h6">
        1.1. Une connexion qui commence sur le service partenaire
      </h3>
      <p>
        Lorsqu'un professionnel souhaite accéder à une application utilisant ProConnect, son parcours commence généralement sur le site ou l'application de ce service.
      </p>
      <p>
        Il peut s'agir d'une plateforme administrative, d'un outil collaboratif ou d'un service métier.
      </p>
      <p>
        Sur la page de connexion, l'utilisateur sélectionne le bouton « S'identifier avec ProConnect ».
      </p>
      <p>
        Cette action ne le connecte pas immédiatement au service. Elle déclenche un parcours d'authentification permettant de vérifier son identité professionnelle.
      </p>
      <p>
        Le service partenaire transmet une demande d'authentification à ProConnect Fédération.
      </p>
      <p>
        Une fois cette demande reçue, ProConnect prend le relais pour orienter l'utilisateur vers un fournisseur d'identité adapté à sa situation.
      </p>
      <h3 className="fr-h6">
        1.2. La saisie de l'adresse électronique professionnelle
      </h3>
      <p>
        Dans le parcours habituel, ProConnect invite l'utilisateur à renseigner son adresse électronique professionnelle.
      </p>
      <p>
        Cette étape est importante : l'adresse permet notamment d'identifier les fournisseurs d'identité susceptibles de prendre en charge son authentification.
      </p>
      <p>
        L'adresse doit correspondre à celle que l'utilisateur emploie dans le cadre de son activité professionnelle.
      </p>
      <p>
        Par exemple, une adresse professionnelle peut être associée à un ministère, une collectivité, un établissement public ou une entreprise.
      </p>
      <p>
        ProConnect examine notamment le domaine de cette adresse, c'est-à-dire la partie située après le symbole
        <code>
          @
        </code>
        .
      </p>
      <p>
        Lorsqu'un fournisseur d'identité est déclaré pour ce domaine, il peut être proposé ou utilisé pour poursuivre l'authentification.
      </p>
      <p>
        Dans certaines situations, plusieurs fournisseurs peuvent être proposés. Le professionnel doit alors choisir celui qui gère réellement son compte informatique.
      </p>
      <p>
        Si aucun fournisseur institutionnel compatible ne correspond à sa situation, ProConnect Identité peut constituer une solution, selon les règles d'éligibilité applicables.
      </p>
      <h3 className="fr-h6">
        1.3. Une adresse parfois déjà renseignée
      </h3>
      <p>
        Le service partenaire peut connaître l'adresse électronique de l'utilisateur avant le début de l'authentification.
      </p>
      <p>
        Il peut alors la transmettre à ProConnect afin de préremplir le champ correspondant.
      </p>
      <p>
        Cette possibilité simplifie le parcours, notamment lorsqu'un professionnel revient sur un service qu'il utilise régulièrement.
      </p>
      <p>
        L'utilisateur conserve la possibilité de modifier l'adresse préremplie lorsqu'il souhaite utiliser une autre identité professionnelle.
      </p>
      <h3 className="fr-h6">
        1.4. La redirection vers le fournisseur d'identité
      </h3>
      <p>
        Après la sélection du fournisseur d'identité, l'utilisateur est orienté vers le système chargé de l'authentifier.
      </p>
      <p>
        Cette redirection peut conduire vers une interface différente de celle de ProConnect.
      </p>
      <p>
        Ce changement d'écran est normal : le fournisseur d'identité possède ses propres méthodes de connexion.
      </p>
      <p>
        Selon son organisation, le professionnel peut devoir :
      </p>
      <ul>
        <li>
          saisir un identifiant et un mot de passe ;
        </li>
        <li>
          utiliser une carte professionnelle ;
        </li>
        <li>
          employer une clé d'accès ;
        </li>
        <li>
          valider un second facteur d'authentification ;
        </li>
        <li>
          suivre un parcours spécifique à son administration ou à son établissement.
        </li>
      </ul>
      <p>
        Les méthodes disponibles dépendent du fournisseur d'identité concerné.
      </p>
      <h3 className="fr-h6">
        1.5. Le retour vers le service partenaire
      </h3>
      <p>
        Lorsque l'authentification aboutit, le fournisseur d'identité communique son résultat à ProConnect Fédération.
      </p>
      <p>
        ProConnect permet ensuite au service partenaire de recevoir les informations nécessaires à la reconnaissance de l'utilisateur.
      </p>
      <p>
        Le professionnel est redirigé vers l'application qu'il souhaitait utiliser.
      </p>
      <p>
        Le service partenaire examine alors les informations reçues et applique ses propres règles d'accès.
      </p>
      <p>
        Si les conditions sont réunies, l'utilisateur accède au service.
      </p>
      <p>
        Dans le cas contraire, il peut recevoir un message indiquant qu'il ne dispose pas des autorisations nécessaires, même si son authentification a réussi.
      </p>
      <h2 className="fr-h4">
        Chapitre 2 — Choisir le bon fournisseur d'identité
      </h2>
      <h3 className="fr-h6">
        2.1. Pourquoi plusieurs fournisseurs peuvent-ils apparaître ?
      </h3>
      <p>
        Certaines administrations disposent de plusieurs systèmes informatiques d'identité.
      </p>
      <p>
        Deux personnes travaillant dans des structures proches peuvent donc utiliser des fournisseurs différents.
      </p>
      <p>
        La sélection ne repose pas uniquement sur le nom de l'administration ou sur la ressemblance des adresses électroniques.
      </p>
      <p>
        Elle dépend du système qui gère effectivement le compte professionnel de l'utilisateur.
      </p>
      <h3 className="fr-h6">
        2.2. Reconnaître son fournisseur d'identité
      </h3>
      <p>
        Lorsqu'une liste de fournisseurs apparaît, l'utilisateur doit rechercher celui qui correspond à son administration, à son établissement ou au système d'authentification habituellement utilisé dans son environnement professionnel.
      </p>
      <p>
        Par exemple, un agent relevant de la DGCCRF peut disposer d'un fournisseur propre à cette administration, tandis qu'un autre agent peut utiliser le fournisseur CISIRH ou celui de son ministère.
      </p>
      <p>
        Le bon fournisseur est celui auprès duquel son compte professionnel est effectivement reconnu.
      </p>
      <p>
        Si l'utilisateur ne connaît pas son fournisseur, son support informatique interne peut lui indiquer le système à utiliser.
      </p>
      <h3 className="fr-h6">
        2.3. Que signifie « Autre via ProConnect Identité (DINUM) » ?
      </h3>
      <p>
        Cette option permet, lorsque les conditions sont réunies, d'utiliser ProConnect Identité plutôt qu'un fournisseur institutionnel.
      </p>
      <p>
        Elle s'adresse notamment aux professionnels qui ne disposent pas d'un fournisseur d'identité dédié compatible avec la Fédération.
      </p>
      <p>
        Elle ne doit toutefois pas être considérée comme un moyen de contourner les règles d'authentification de son administration.
      </p>
      <p>
        Lorsqu'un fournisseur institutionnel est prévu pour une population d'utilisateurs, il convient de privilégier le parcours correspondant.
      </p>
      <h3 className="fr-h6">
        2.4. Le choix du fournisseur et l'environnement réseau
      </h3>
      <p>
        Certains services ou fournisseurs d'identité fonctionnent sur des environnements réseau spécifiques.
      </p>
      <p>
        Le Réseau interministériel de l'État, appelé RIE, est notamment utilisé par des administrations pour accéder à certains systèmes internes.
      </p>
      <p>
        ProConnect dispose d'environnements adaptés à ces contraintes.
      </p>
      <p>
        Pour un service partenaire hébergé sur le RIE, le parcours ne propose pas ProConnect Identité : l'authentification passe par un fournisseur d'identité compatible avec cet environnement.
      </p>
      <p>
        Cette distinction peut expliquer pourquoi un utilisateur ne retrouve pas les mêmes possibilités de connexion selon le service auquel il souhaite accéder.
      </p>
      <h2 className="fr-h4">
        Chapitre 3 — Se connecter avec ProConnect Identité
      </h2>
      <h3 className="fr-h6">
        3.1. Dans quelles situations utilise-t-on PCI ?
      </h3>
      <p>
        ProConnect Identité est destiné aux professionnels qui ne disposent pas d'un fournisseur d'identité dédié compatible avec la Fédération.
      </p>
      <p>
        Il leur permet d'utiliser un compte professionnel géré par la DINUM.
      </p>
      <p>
        Le parcours exact dépend de leur situation : première utilisation, compte déjà existant, méthodes de sécurité configurées ou vérifications supplémentaires nécessaires.
      </p>
      <h3 className="fr-h6">
        3.2. Se connecter avec un compte existant
      </h3>
      <p>
        Lorsqu'un professionnel possède déjà un compte ProConnect Identité, il peut être invité à renseigner son mot de passe après avoir été orienté vers PCI.
      </p>
      <p>
        Selon les circonstances, des vérifications complémentaires peuvent être demandées.
      </p>
      <p>
        Par exemple, ProConnect Identité peut demander de confirmer l'accès à l'adresse électronique professionnelle au moyen d'un code envoyé par courriel.
      </p>
      <p>
        Ce contrôle ne doit pas être confondu avec l'authentification multifacteur.
      </p>
      <p>
        Le parcours peut ensuite demander une méthode de sécurité supplémentaire lorsque celle-ci est configurée ou exigée.
      </p>
      <p>
        Une fois les étapes nécessaires terminées, l'utilisateur poursuit vers le service partenaire.
      </p>
      <h3 className="fr-h6">
        3.3. Le code de confirmation reçu par courriel
      </h3>
      <p>
        ProConnect Identité peut demander un code de confirmation à dix chiffres envoyé à l'adresse électronique professionnelle.
      </p>
      <p>
        Ce mécanisme sert notamment à vérifier l'accès à cette messagerie dans certaines circonstances.
      </p>
      <p>
        Il peut intervenir lors de la création du compte, lors de l'utilisation d'un nouveau navigateur ou après la disparition des informations permettant de reconnaître un navigateur déjà utilisé.
      </p>
      <p>
        Ce code est distinct du code temporaire généré par une application d'authentification.
      </p>
      <p>
        Le professionnel doit pouvoir accéder à sa messagerie pour réaliser cette vérification lorsqu'elle est demandée.
      </p>
      <h3 className="fr-h6">
        3.4. L'authentification multifacteur dans PCI
      </h3>
      <p>
        ProConnect Identité permet de renforcer la sécurité du compte au moyen de méthodes complémentaires.
      </p>
      <p>
        Deux méthodes sont notamment proposées :
      </p>
      <p>
        <strong>
          L'application d'authentification (TOTP).
        </strong>
        Elle génère un code temporaire à six chiffres, renouvelé régulièrement. L'utilisateur saisit ce code lorsque le parcours le demande.
      </p>
      <p>
        <strong>
          La clé d'accès (passkey).
        </strong>
        Elle permet d'utiliser un mécanisme d'authentification pris en charge par l'appareil ou le gestionnaire de clés d'accès, par exemple une validation biométrique ou un code local.
      </p>
      <p>
        Selon les exigences du service partenaire, l'utilisateur peut devoir activer une méthode d'authentification renforcée avant de poursuivre.
      </p>
      <h3 className="fr-h6">
        3.5. La première connexion
      </h3>
      <p>
        Lorsqu'un utilisateur ne possède pas encore de compte PCI, il peut être orienté vers un parcours de création de compte.
      </p>
      <p>
        Celui-ci permet notamment d'établir son identité professionnelle et de renseigner les informations nécessaires à son rattachement à une organisation.
      </p>
      <p>
        Selon la situation, des vérifications complémentaires peuvent intervenir.
      </p>
      <p>
        La création et la gestion du compte seront décrites en détail dans la Partie III.
      </p>
      <h2 className="fr-h4">
        Chapitre 4 — Se connecter avec un fournisseur d'identité institutionnel
      </h2>
      <h3 className="fr-h6">
        4.1. Utiliser les identifiants de son administration
      </h3>
      <p>
        Lorsqu'un professionnel dispose d'un fournisseur d'identité institutionnel compatible, il peut utiliser son compte professionnel habituel pour accéder aux services partenaires.
      </p>
      <p>
        Le parcours commence sur le service demandé, puis passe par ProConnect Fédération.
      </p>
      <p>
        L'utilisateur est ensuite orienté vers le fournisseur d'identité de son administration.
      </p>
      <p>
        Il s'authentifie selon les méthodes prévues par celle-ci.
      </p>
      <p>
        Il peut s'agir d'un mot de passe professionnel, d'une carte agent ou d'un dispositif d'authentification renforcée.
      </p>
      <h3 className="fr-h6">
        4.2. Qui gère les moyens de connexion ?
      </h3>
      <p>
        Dans ce parcours, le fournisseur institutionnel reste responsable de ses comptes et de ses méthodes d'authentification.
      </p>
      <p>
        Ainsi, lorsqu'un utilisateur doit modifier son mot de passe professionnel, débloquer son compte ou récupérer un moyen d'authentification propre à son administration, il doit généralement suivre les procédures de son fournisseur d'identité.
      </p>
      <p>
        La Fédération ProConnect ne remplace pas ces procédures.
      </p>
      <h3 className="fr-h6">
        4.3. Une connexion différente de PCI
      </h3>
      <p>
        Un professionnel utilisant un fournisseur ministériel ne suit pas nécessairement les mêmes écrans qu'un utilisateur de ProConnect Identité.
      </p>
      <p>
        Il peut ne jamais rencontrer les interfaces de création de compte PCI ou de gestion de ses méthodes de sécurité.
      </p>
      <p>
        Cette différence est normale : chaque fournisseur dispose de son propre système d'authentification.
      </p>
      <p>
        L'expérience commune réside dans la possibilité d'accéder au service partenaire grâce à ProConnect Fédération.
      </p>
      <h2 className="fr-h4">
        Chapitre 5 — Se connecter via la Fédération Éducation-Recherche
      </h2>
      <h3 className="fr-h6">
        5.1. Le rôle de RENATER
      </h3>
      <p>
        Dans l'enseignement supérieur et la recherche, de nombreux établissements disposent de systèmes d'identité permettant à leurs membres d'accéder à des ressources numériques.
      </p>
      <p>
        L'écosystème RENATER permet notamment de fédérer ces systèmes d'authentification.
      </p>
      <p>
        Lorsqu'un établissement est accessible dans le parcours ProConnect concerné, ses membres peuvent utiliser leur identité institutionnelle.
      </p>
      <h3 className="fr-h6">
        5.2. Sélectionner son établissement
      </h3>
      <p>
        Un professionnel peut être amené à sélectionner la Fédération RENATER, puis à rechercher son établissement dans la liste proposée.
      </p>
      <p>
        Après cette sélection, il est dirigé vers l'interface d'authentification de son établissement.
      </p>
      <p>
        Il utilise alors les identifiants fournis par celui-ci.
      </p>
      <p>
        Selon les règles de l'établissement, une authentification complémentaire peut être demandée.
      </p>
      <h3 className="fr-h6">
        5.3. Le retour vers ProConnect
      </h3>
      <p>
        Une fois l'authentification réussie, le résultat est transmis dans le cadre de la Fédération.
      </p>
      <p>
        L'utilisateur poursuit ensuite vers le service partenaire qu'il souhaitait consulter.
      </p>
      <p>
        Il n'a pas nécessairement besoin de posséder un compte ProConnect Identité.
      </p>
      <h3 className="fr-h6">
        5.4. À qui s'adresser en cas de difficulté ?
      </h3>
      <p>
        Si le professionnel ne parvient pas à s'authentifier sur le portail de son établissement, il doit privilégier le support informatique de celui-ci.
      </p>
      <p>
        Si la difficulté concerne l'orientation vers le fournisseur d'identité ou le fonctionnement du parcours ProConnect, le support ProConnect peut être concerné.
      </p>
      <p>
        Enfin, si la connexion réussit mais que le service refuse l'accès à certaines fonctionnalités, le support du service partenaire est généralement l'interlocuteur adapté.
      </p>
      <h2 className="fr-h4">
        Chapitre 6 — Comprendre l'authentification renforcée
      </h2>
      <h3 className="fr-h6">
        6.1. Pourquoi certains services demandent-ils davantage de sécurité ?
      </h3>
      <p>
        Tous les services partenaires ne présentent pas les mêmes enjeux.
      </p>
      <p>
        Un service permettant de consulter des informations peu sensibles peut avoir des exigences différentes de celles d'une application donnant accès à des données protégées ou à des opérations sensibles.
      </p>
      <p>
        Certains fournisseurs de services demandent donc une authentification offrant davantage de garanties.
      </p>
      <p>
        Cette exigence peut se traduire par la nécessité d'utiliser plusieurs facteurs d'authentification.
      </p>
      <h3 className="fr-h6">
        6.2. Des méthodes différentes selon les fournisseurs
      </h3>
      <p>
        Le fournisseur d'identité détermine les mécanismes disponibles pour ses utilisateurs.
      </p>
      <p>
        Avec PCI, le professionnel peut utiliser une application TOTP ou une clé d'accès.
      </p>
      <p>
        Un fournisseur institutionnel peut utiliser d'autres moyens, comme une carte professionnelle associée à un code personnel.
      </p>
      <p>
        L'important est que le mécanisme utilisé réponde aux exigences applicables au parcours.
      </p>
      <h3 className="fr-h6">
        6.3. Que se passe-t-il lorsque le niveau de sécurité est insuffisant ?
      </h3>
      <p>
        Un fournisseur de services peut demander un niveau d'authentification minimum.
      </p>
      <p>
        Si l'authentification réalisée ne répond pas à cette exigence, le parcours peut demander une authentification supplémentaire ou empêcher l'accès.
      </p>
      <p>
        Pour un utilisateur PCI, cela peut notamment conduire à configurer une méthode d'authentification renforcée.
      </p>
      <p>
        Pour un utilisateur institutionnel, les possibilités dépendent du fournisseur d'identité et de sa configuration.
      </p>
      <p>
        Les niveaux d'authentification et les mécanismes de sécurité seront approfondis dans la Partie V.
      </p>
      <h2 className="fr-h4">
        Chapitre 7 — Comprendre les sessions et les reconnexions
      </h2>
      <h3 className="fr-h6">
        7.1. Pourquoi ne doit-on pas toujours saisir ses identifiants ?
      </h3>
      <p>
        Après une authentification réussie, différents systèmes peuvent conserver temporairement des informations permettant de reconnaître la session de l'utilisateur.
      </p>
      <p>
        Le service partenaire peut maintenir sa propre session.
      </p>
      <p>
        Le fournisseur d'identité peut également conserver une session d'authentification, selon sa politique de sécurité.
      </p>
      <p>
        Ces mécanismes peuvent faciliter les connexions suivantes, mais leur durée et leur comportement ne sont pas nécessairement identiques.
      </p>
      <h3 className="fr-h6">
        7.2. Pourquoi une nouvelle vérification peut-elle être demandée ?
      </h3>
      <p>
        Un utilisateur peut devoir s'authentifier de nouveau lorsqu'une session a expiré, lorsqu'il change de navigateur ou lorsque le service partenaire exige une vérification supplémentaire.
      </p>
      <p>
        Dans ProConnect Identité, certaines situations peuvent également déclencher une nouvelle confirmation de l'adresse électronique professionnelle.
      </p>
      <p>
        Il est donc possible qu'un utilisateur accède facilement à un service un jour, puis doive réaliser davantage d'étapes lors d'une connexion ultérieure.
      </p>
      <h3 className="fr-h6">
        7.3. Se déconnecter du service
      </h3>
      <p>
        La déconnexion doit être distinguée selon les systèmes concernés.
      </p>
      <p>
        Quitter une application ou fermer un onglet ne garantit pas nécessairement la fermeture de toutes les sessions d'authentification.
      </p>
      <p>
        Le comportement dépend notamment des mécanismes de déconnexion mis en œuvre par le service partenaire et le fournisseur d'identité.
      </p>
      <p>
        Sur un ordinateur partagé, il est recommandé d'utiliser les fonctions de déconnexion prévues et de vérifier qu'aucune session personnelle ne reste accessible.
      </p>
      <h2 className="fr-h4">
        Chapitre 8 — Comprendre les difficultés de connexion
      </h2>
      <h3 className="fr-h6">
        8.1. Le fournisseur d'identité proposé ne correspond pas à l'utilisateur
      </h3>
      <p>
        Une mauvaise orientation peut empêcher le professionnel de poursuivre sa connexion.
      </p>
      <p>
        Il convient d'abord de vérifier que l'adresse électronique utilisée correspond bien à son identité professionnelle.
      </p>
      <p>
        Si plusieurs fournisseurs sont proposés, l'utilisateur doit choisir celui qui gère réellement son compte informatique.
      </p>
      <p>
        En cas d'incertitude, son support informatique interne peut l'aider à identifier le fournisseur approprié.
      </p>
      <h3 className="fr-h6">
        8.2. Le compte n'est pas reconnu par le fournisseur
      </h3>
      <p>
        Un fournisseur institutionnel peut refuser une authentification lorsque le compte n'existe pas, n'est pas actif ou ne répond pas aux conditions prévues.
      </p>
      <p>
        Ces situations relèvent généralement de la gestion du compte par le fournisseur d'identité concerné.
      </p>
      <p>
        Le professionnel doit alors suivre les procédures de son administration ou de son établissement.
      </p>
      <h3 className="fr-h6">
        8.3. La vérification de sécurité ne peut pas être terminée
      </h3>
      <p>
        Un utilisateur PCI peut rencontrer des difficultés pour recevoir son code de confirmation ou utiliser sa méthode d'authentification renforcée.
      </p>
      <p>
        Ces situations ne doivent pas être confondues.
      </p>
      <p>
        Le code envoyé par courriel vérifie l'accès à la messagerie professionnelle.
      </p>
      <p>
        Le code TOTP ou la clé d'accès intervient dans le cadre des méthodes d'authentification renforcée.
      </p>
      <p>
        Les démarches de récupération dépendent de la méthode concernée et seront détaillées dans la Partie V.
      </p>
      <h3 className="fr-h6">
        8.4. La connexion réussit, mais le service reste inaccessible
      </h3>
      <p>
        Une authentification réussie signifie que le parcours d'identification a abouti.
      </p>
      <p>
        Elle ne signifie pas nécessairement que l'utilisateur est autorisé à utiliser toutes les fonctionnalités du service.
      </p>
      <p>
        Le fournisseur de services peut notamment contrôler l'organisation, le profil, le fournisseur d'identité utilisé ou les habilitations nécessaires.
      </p>
      <p>
        Lorsque le blocage survient après le retour vers l'application, il convient de distinguer une erreur d'authentification d'un refus d'autorisation.
      </p>
      <p>
        Le support du service partenaire est généralement compétent pour expliquer ses règles d'accès.
      </p>
      <h3 className="fr-h6">
        8.5. Identifier le bon interlocuteur
      </h3>
      <p>
        Pour faciliter la résolution d'une difficulté, il est utile de déterminer à quelle étape le parcours s'interrompt.
      </p>
      <ul>
        <li>
          <strong>
            Avant la redirection vers le FI :
          </strong>
          le parcours ProConnect peut être concerné.
        </li>
        <li>
          <strong>
            Sur l'interface du FI institutionnel :
          </strong>
          le support informatique du fournisseur d'identité est généralement compétent.
        </li>
        <li>
          <strong>
            Dans la gestion du compte PCI :
          </strong>
          le support ProConnect Identité peut intervenir.
        </li>
        <li>
          <strong>
            Après une authentification réussie :
          </strong>
          le fournisseur de services peut être responsable des habilitations ou des fonctionnalités concernées.
        </li>
      </ul>
      <p>
        Cette distinction évite de solliciter un interlocuteur qui ne dispose pas des moyens nécessaires pour résoudre le problème.
      </p>
      <h2 className="fr-h4">
        Chapitre 9 — Ce qu'il faut retenir
      </h2>
      <p>
        Le parcours ProConnect commence généralement sur le service numérique auquel le professionnel souhaite accéder.
      </p>
      <p>
        ProConnect Fédération intervient ensuite pour permettre son authentification auprès d'un fournisseur d'identité compatible.
      </p>
      <p>
        L'adresse électronique professionnelle joue un rôle important dans l'orientation vers le fournisseur approprié.
      </p>
      <p>
        Les méthodes de connexion varient selon le fournisseur utilisé : ProConnect Identité, fournisseur ministériel, établissement raccordé à RENATER ou autre fournisseur compatible.
      </p>
      <p>
        Le niveau de sécurité demandé peut également varier selon les exigences du service partenaire.
      </p>
      <p>
        Enfin, une authentification réussie ne garantit pas automatiquement les droits d'accès à toutes les fonctionnalités d'une application.
      </p>
      <p>
        <strong>
          Dans la Partie III
        </strong>
        , nous découvrirons en détail ProConnect Identité : création du compte, vérification de l'adresse électronique, gestion du profil, rattachement à une organisation et méthodes de connexion.
      </p>
      <hr />
      </article>
    </DocumentationLayout>
  );
}
