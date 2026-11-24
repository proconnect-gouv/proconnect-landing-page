import { DocumentationLayout } from "./DocumentationLayout";

export default function SecuriserIdentite() {
  return (
    <DocumentationLayout>
      <article>
        <p className="fr-badge fr-badge--blue-france">Partie 5 sur 8</p>
        <h1 className="fr-h2">Partie V — Sécuriser son identité</h1>
        <p>
          <em>
            Comprendre l'authentification renforcée, protéger ses accès et
            retrouver l'usage de son compte.
          </em>
        </p>
        <h2 className="fr-h4">
          Chapitre 1 — Pourquoi sécuriser son identité professionnelle ?
        </h2>
        <h3 className="fr-h6">
          1.1. Une identité professionnelle donne accès à des services sensibles
        </h3>
        <p>
          Une identité professionnelle permet d'accéder à des applications, à
          des informations et parfois à des démarches réalisées au nom d'une
          organisation.
        </p>
        <p>
          Selon le service, ces accès peuvent concerner des données
          administratives, des informations internes ou des opérations ayant des
          conséquences importantes.
        </p>
        <p>La protection de l'identité professionnelle est donc essentielle.</p>
        <p>
          Un compte compromis peut permettre à une personne non autorisée de se
          faire passer pour son titulaire.
        </p>
        <h3 className="fr-h6">1.2. Le mot de passe ne suffit pas toujours</h3>
        <p>
          Un mot de passe peut être découvert, réutilisé à la suite d'une fuite
          de données ou obtenu par hameçonnage.
        </p>
        <p>
          Même lorsqu'il est robuste, il reste vulnérable à certaines attaques.
        </p>
        <p>
          L'authentification renforcée permet de réduire ce risque en demandant
          une preuve supplémentaire lors de la connexion.
        </p>
        <h3 className="fr-h6">
          1.3. Une sécurité partagée entre plusieurs acteurs
        </h3>
        <p>
          Dans ProConnect, la sécurité de la connexion repose sur plusieurs
          acteurs.
        </p>
        <p>
          Le fournisseur de services détermine le niveau de sécurité nécessaire
          pour accéder à son application.
        </p>
        <p>
          ProConnect Fédération transmet cette exigence au fournisseur
          d'identité et permet au service de connaître le niveau effectivement
          atteint.
        </p>
        <p>
          Le fournisseur d'identité réalise l'authentification de l'utilisateur.
        </p>
        <p>
          Il peut s'agir de ProConnect Identité ou d'un fournisseur
          institutionnel.
        </p>
        <p>
          Cette distinction est importante : tous les utilisateurs de ProConnect
          ne disposent pas des mêmes méthodes de sécurité.
        </p>
        <h2 className="fr-h4">
          Chapitre 2 — Comprendre la double authentification
        </h2>
        <h3 className="fr-h6">
          2.1. Qu'est-ce que la double authentification ?
        </h3>
        <p>
          La double authentification, également appelée 2FA, consiste à
          renforcer une connexion en utilisant deux preuves distinctes.
        </p>
        <p>Elle constitue une forme d'authentification multifacteur, ou MFA.</p>
        <p>
          Les facteurs d'authentification appartiennent généralement à trois
          catégories :
        </p>
        <ul>
          <li>
            <strong>Ce que l'on connaît :</strong>
            un mot de passe ou un code personnel.
          </li>
          <li>
            <strong>Ce que l'on possède :</strong>
            un appareil, une clé de sécurité ou un moyen cryptographique.
          </li>
          <li>
            <strong>Ce que l'on est :</strong>
            une caractéristique biométrique utilisée pour déverrouiller un
            dispositif.
          </li>
        </ul>
        <p>
          Pour parler d'authentification multifacteur, les preuves doivent
          reposer sur des catégories différentes ou sur un mécanisme apportant
          des garanties équivalentes.
        </p>
        <p>
          Par exemple, demander deux mots de passe ne constitue pas une
          authentification multifacteur.
        </p>
        <h3 className="fr-h6">
          2.2. Pourquoi la double authentification protège-t-elle mieux le
          compte ?
        </h3>
        <p>
          Imaginons qu'une personne malveillante découvre le mot de passe d'un
          professionnel.
        </p>
        <p>
          Sans protection supplémentaire, elle pourrait tenter d'utiliser ce mot
          de passe pour accéder au compte.
        </p>
        <p>
          Avec une méthode d'authentification renforcée, la connaissance du mot
          de passe ne suffit plus nécessairement.
        </p>
        <p>
          L'attaquant doit également satisfaire le contrôle supplémentaire
          demandé.
        </p>
        <p>
          Cette protection réduit les risques d'accès non autorisé, même si elle
          ne supprime pas toutes les menaces.
        </p>
        <h3 className="fr-h6">
          2.3. Pourquoi la 2FA peut-elle devenir obligatoire ?
        </h3>
        <p>
          Certains services partenaires exigent un niveau de sécurité renforcé.
        </p>
        <p>
          Cette exigence dépend notamment des risques associés aux données ou
          aux fonctionnalités proposées.
        </p>
        <p>
          Un professionnel peut donc accéder à une application sans
          authentification renforcée, puis devoir utiliser un second facteur
          lorsqu'il se connecte à un autre service.
        </p>
        <p>Il ne s'agit pas nécessairement d'une modification de son compte.</p>
        <p>
          C'est parfois le service partenaire qui impose une garantie plus
          élevée.
        </p>
        <h3 className="fr-h6">
          2.4. Peut-on désactiver la double authentification ?
        </h3>
        <p>
          Lorsqu'un service exige une authentification renforcée, l'utilisateur
          ne peut pas contourner cette exigence pour accéder au service.
        </p>
        <p>Il doit utiliser une méthode compatible avec le niveau demandé.</p>
        <p>
          Dans ProConnect Identité, la gestion des méthodes configurées dépend
          des possibilités proposées par le compte et des règles de sécurité
          applicables.
        </p>
        <p>
          <strong>Pour aller plus loin — FAQ</strong>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/category/double-authentification-2fa-1efbs0/">
            Pourquoi la double authentification est-elle obligatoire ?
          </a>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/article/pourquoi-ne-puis-je-pas-desactiver-la-double-authentification-1ff190/">
            Pourquoi ne puis-je pas désactiver la double authentification ?
          </a>
        </p>
        <h2 className="fr-h4">
          Chapitre 3 — Activer la double authentification dans ProConnect
          Identité
        </h2>
        <h3 className="fr-h6">3.1. Deux situations possibles</h3>
        <p>
          Un utilisateur PCI peut configurer une méthode de double
          authentification de sa propre initiative.
        </p>
        <p>
          Il peut également être invité à le faire lorsqu'il souhaite accéder à
          un service partenaire exigeant une sécurité renforcée.
        </p>
        <p>
          Dans les deux cas, la configuration concerne son compte ProConnect
          Identité.
        </p>
        <p>
          Elle pourra ensuite être utilisée lors de ses connexions, selon les
          exigences des services consultés.
        </p>
        <h3 className="fr-h6">3.2. Accéder aux paramètres de sécurité</h3>
        <p>
          Depuis son compte PCI, l'utilisateur peut accéder à la rubrique «
          Compte et connexion ».
        </p>
        <p>
          Il y retrouve les fonctionnalités de gestion des méthodes
          d'authentification.
        </p>
        <p>Il peut alors choisir une méthode de validation supplémentaire.</p>
        <p>
          Les principales possibilités sont l'application d'authentification
          TOTP et la clé d'accès.
        </p>
        <h3 className="fr-h6">3.3. Choisir une méthode adaptée</h3>
        <p>
          Le choix dépend notamment du matériel disponible et des contraintes de
          l'environnement professionnel.
        </p>
        <p>
          Une application TOTP peut convenir à un utilisateur disposant d'un
          smartphone ou d'un gestionnaire compatible.
        </p>
        <p>
          Une clé d'accès peut être pratique lorsque le navigateur, l'appareil
          ou le gestionnaire utilisé permet de l'enregistrer et de la retrouver
          facilement.
        </p>
        <p>
          Sur certains postes professionnels, les politiques informatiques de
          l'organisation peuvent limiter les méthodes disponibles.
        </p>
        <p>
          Il est donc important de choisir une solution réellement utilisable
          dans son environnement quotidien.
        </p>
        <h2 className="fr-h4">
          Chapitre 4 — Utiliser une application d'authentification TOTP
        </h2>
        <h3 className="fr-h6">4.1. Qu'est-ce que le TOTP ?</h3>
        <p>
          TOTP signifie
          <em>Time-based One-Time Password</em>.
        </p>
        <p>
          Il s'agit d'un mécanisme permettant de générer des codes temporaires à
          usage unique.
        </p>
        <p>
          Dans ProConnect Identité, le code affiché comporte six chiffres et
          change toutes les trente secondes.
        </p>
        <p>
          Contrairement au code de confirmation envoyé par courriel, le code
          TOTP est généré directement par une application ou un gestionnaire
          compatible.
        </p>
        <h3 className="fr-h6">4.2. Quelles applications peut-on utiliser ?</h3>
        <p>Plusieurs applications prennent en charge le TOTP.</p>
        <p>
          C'est notamment le cas de FreeOTP, Google Authenticator, Microsoft
          Authenticator et de certains gestionnaires de mots de passe.
        </p>
        <p>
          Le choix dépend des préférences de l'utilisateur, des appareils
          disponibles et des règles informatiques de son organisation.
        </p>
        <h3 className="fr-h6">4.3. Configurer une application TOTP</h3>
        <p>
          Lors de l'activation de la double authentification, l'utilisateur
          sélectionne « Application d'authentification ».
        </p>
        <p>
          ProConnect Identité affiche alors un QR code et peut proposer une clé
          de configuration à saisir manuellement.
        </p>
        <p>
          L'utilisateur ouvre son application d'authentification et ajoute un
          nouveau compte.
        </p>
        <p>Il scanne le QR code ou saisit la clé de configuration.</p>
        <p>L'application commence alors à générer des codes temporaires.</p>
        <p>
          Pour confirmer la configuration, l'utilisateur renseigne dans
          ProConnect le code à six chiffres affiché par son application.
        </p>
        <p>
          Une fois la validation réussie, la méthode est associée au compte.
        </p>
        <h3 className="fr-h6">4.4. Se connecter avec TOTP</h3>
        <p>
          Lorsqu'une authentification renforcée est demandée, l'utilisateur
          ouvre son application TOTP.
        </p>
        <p>Il repère le code correspondant à son compte ProConnect.</p>
        <p>Il saisit le code affiché dans le parcours de connexion.</p>
        <p>Si le code est valide, l'authentification peut se poursuivre.</p>
        <h3 className="fr-h6">
          4.5. Pourquoi un code TOTP peut-il être refusé ?
        </h3>
        <p>
          Un code peut être refusé lorsqu'il a expiré ou lorsqu'il ne correspond
          pas au compte attendu.
        </p>
        <p>
          Une différence importante entre l'heure de l'appareil et l'heure
          réelle peut également empêcher la validation.
        </p>
        <p>
          L'utilisateur peut alors attendre la génération d'un nouveau code et
          vérifier que l'heure de son appareil est correctement synchronisée.
        </p>
        <p>
          Il doit également s'assurer qu'il utilise bien l'application et le
          compte configurés pour ProConnect.
        </p>
        <h3 className="fr-h6">
          4.6. Que se passe-t-il si l'application est supprimée ?
        </h3>
        <p>
          La suppression d'une application d'authentification peut entraîner la
          perte des configurations qu'elle contient.
        </p>
        <p>
          Certaines applications disposent de fonctions de sauvegarde ou de
          synchronisation, mais ce n'est pas systématique.
        </p>
        <p>
          Avant de changer de téléphone, il est donc important de vérifier
          comment transférer ou conserver ses configurations.
        </p>
        <p>
          <strong>Pour aller plus loin — FAQ</strong>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/article/configurer-la-2fa-totp-ou-passkeycle-dacces-1a6x6i0/">
            Configurer la 2FA avec une application d'authentification ou une clé
            d'accès
          </a>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/category/double-authentification-2fa-1efbs0/">
            Consulter les articles consacrés à la double authentification
          </a>
        </p>
        <h2 className="fr-h4">
          Chapitre 5 — Utiliser une clé d'accès (passkey)
        </h2>
        <h3 className="fr-h6">5.1. Qu'est-ce qu'une passkey ?</h3>
        <p>
          Une passkey est une clé d'accès reposant sur des mécanismes
          cryptographiques.
        </p>
        <p>
          Elle permet de s'authentifier sans devoir recopier un code temporaire
          généré par une application.
        </p>
        <p>
          La clé peut être enregistrée sur un appareil, dans un gestionnaire
          compatible ou sur une clé de sécurité physique.
        </p>
        <p>
          L'utilisateur confirme son utilisation au moyen du mécanisme prévu par
          son environnement.
        </p>
        <h3 className="fr-h6">5.2. Comment fonctionne une passkey ?</h3>
        <p>
          Lorsqu'une passkey est créée, un mécanisme cryptographique associe une
          clé privée à l'environnement de l'utilisateur et une clé publique au
          service.
        </p>
        <p>La clé privée n'est pas communiquée au service.</p>
        <p>
          Lors de l'authentification, le dispositif utilise cette clé pour
          répondre à une demande de vérification.
        </p>
        <p>
          L'utilisateur peut devoir confirmer l'opération au moyen d'un code
          local, d'une empreinte digitale ou d'une reconnaissance faciale.
        </p>
        <h3 className="fr-h6">5.3. Configurer une passkey dans PCI</h3>
        <p>
          Depuis les paramètres de double authentification, l'utilisateur
          sélectionne « Clé d'accès ».
        </p>
        <p>
          Le navigateur ou le système d'exploitation lui propose alors les
          possibilités disponibles.
        </p>
        <p>
          Il peut s'agir d'une clé enregistrée sur l'appareil, dans un
          gestionnaire de clés d'accès ou sur un dispositif de sécurité
          compatible.
        </p>
        <p>
          L'utilisateur suit les instructions affichées pour confirmer
          l'enregistrement.
        </p>
        <p>
          Une fois la configuration terminée, la passkey peut être utilisée lors
          des prochaines connexions.
        </p>
        <h3 className="fr-h6">
          5.4. Les passkeys sur ordinateur et smartphone
        </h3>
        <p>
          Une passkey peut être enregistrée sur un smartphone ou un ordinateur.
        </p>
        <p>
          Selon les mécanismes utilisés, elle peut être synchronisée entre
          plusieurs appareils.
        </p>
        <p>
          Cependant, cette synchronisation dépend du système d'exploitation, du
          compte utilisé ou du gestionnaire de clés d'accès.
        </p>
        <p>
          Une passkey créée sur un téléphone n'est donc pas nécessairement
          disponible directement sur un ordinateur professionnel.
        </p>
        <p>
          Dans certaines situations, un parcours entre appareils peut être
          proposé.
        </p>
        <h3 className="fr-h6">5.5. Les clés de sécurité physiques</h3>
        <p>
          Une clé de sécurité matérielle compatible peut également être utilisée
          pour certaines méthodes d'authentification.
        </p>
        <p>Il peut s'agir d'un dispositif USB, USB-C ou NFC.</p>
        <p>
          Ce type de dispositif est particulièrement intéressant dans certains
          environnements professionnels exigeant une sécurité renforcée.
        </p>
        <p>
          Son utilisation dépend toutefois de la compatibilité du navigateur, du
          système et du service.
        </p>
        <h3 className="fr-h6">5.6. Ne pas confondre passkey et TOTP</h3>
        <p>
          Les deux méthodes permettent de renforcer l'authentification, mais
          elles fonctionnent différemment.
        </p>
        <p>
          Avec TOTP, l'utilisateur scanne un QR code de configuration dans une
          application d'authentification, puis saisit un code temporaire.
        </p>
        <p>
          Avec une passkey, il enregistre une clé d'accès et confirme ensuite
          son utilisation sur un appareil compatible.
        </p>
        <p>
          Un QR code commençant par
          <code>FIDO:/</code>
          correspond à un parcours de clé d'accès.
        </p>
        <p>Il ne doit pas être scanné avec une application TOTP.</p>
        <h3 className="fr-h6">
          5.7. Que faire si une passkey n'est plus disponible ?
        </h3>
        <p>
          Si l'utilisateur ne retrouve plus sa passkey, il doit d'abord vérifier
          sur quel appareil ou dans quel gestionnaire elle a été enregistrée.
        </p>
        <p>
          Il peut également rechercher si elle est synchronisée avec un autre
          appareil.
        </p>
        <p>
          S'il dispose d'une autre méthode d'authentification déjà configurée,
          il peut l'utiliser pour accéder à son compte.
        </p>
        <p>Il pourra ensuite gérer ses méthodes de sécurité.</p>
        <p>
          <strong>Pour aller plus loin — FAQ</strong>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/article/configurer-la-2fa-totp-ou-passkeycle-dacces-1a6x6i0/">
            Configurer la 2FA avec une application TOTP ou une passkey
          </a>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/category/double-authentification-2fa-1efbs0/">
            Centre d'aide — Double authentification
          </a>
        </p>
        <h2 className="fr-h4">
          Chapitre 6 — Gérer plusieurs méthodes d'authentification
        </h2>
        <h3 className="fr-h6">
          6.1. Pourquoi prévoir une méthode supplémentaire ?
        </h3>
        <p>
          Lorsqu'un utilisateur ne dispose que d'une seule méthode
          d'authentification, il dépend fortement de l'appareil qui la contient.
        </p>
        <p>
          La perte, le remplacement ou la panne de cet appareil peut alors
          empêcher l'accès au compte.
        </p>
        <p>Prévoir plusieurs méthodes permet de réduire ce risque.</p>
        <p>
          Par exemple, un professionnel peut disposer d'une application TOTP et
          d'une passkey enregistrée sur un autre dispositif.
        </p>
        <h3 className="fr-h6">6.2. Ajouter une méthode supplémentaire</h3>
        <p>
          Depuis son compte ProConnect Identité, l'utilisateur peut ouvrir «
          Compte et connexion ».
        </p>
        <p>
          Il peut ensuite sélectionner la fonction permettant d'ajouter une
          méthode de validation supplémentaire.
        </p>
        <p>
          Il choisit une méthode compatible et suit les étapes de configuration.
        </p>
        <p>
          Cette opération lui permet de disposer de plusieurs moyens
          d'authentification.
        </p>
        <h3 className="fr-h6">6.3. Modifier ou retirer une méthode</h3>
        <p>
          Lorsqu'un utilisateur remplace son téléphone ou change d'environnement
          professionnel, il peut être nécessaire de revoir ses méthodes de
          sécurité.
        </p>
        <p>
          Il est recommandé de configurer et de tester une nouvelle méthode
          avant de supprimer celle qui fonctionne encore.
        </p>
        <p>
          Cela évite de se retrouver sans moyen d'authentification utilisable.
        </p>
        <h3 className="fr-h6">
          6.4. Les contraintes des postes professionnels
        </h3>
        <p>
          Certaines organisations imposent des restrictions sur leurs
          ordinateurs.
        </p>
        <p>
          Il peut notamment être impossible d'installer une application,
          d'utiliser un smartphone personnel ou d'enregistrer certaines clés
          d'accès.
        </p>
        <p>Ces contraintes peuvent limiter les méthodes disponibles.</p>
        <p>
          L'utilisateur peut alors se rapprocher de son service informatique
          pour connaître les moyens autorisés.
        </p>
        <p>
          <strong>Pour aller plus loin — FAQ</strong>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/category/double-authentification-2fa-1efbs0/">
            Ajouter une méthode de double authentification supplémentaire
          </a>
        </p>
        <h2 className="fr-h4">Chapitre 7 — Comprendre les mots de secours</h2>
        <h3 className="fr-h6">7.1. À quoi servent les mots de secours ?</h3>
        <p>
          Les mots de secours constituent un mécanisme de récupération de
          l'accès au compte ProConnect Identité.
        </p>
        <p>
          Ils permettent de disposer d'une solution lorsque la méthode
          habituelle de double authentification n'est plus utilisable.
        </p>
        <p>
          Ils sont particulièrement utiles en cas de perte de téléphone, de
          suppression d'une application ou d'indisponibilité d'une clé d'accès.
        </p>
        <h3 className="fr-h6">
          7.2. Quand les mots de secours sont-ils proposés ?
        </h3>
        <p>
          Les mots de secours sont associés au parcours de sécurisation du
          compte.
        </p>
        <p>
          L'utilisateur peut être invité à les générer et à les conserver
          lorsqu'il configure ses méthodes d'authentification.
        </p>
        <p>
          Il doit prendre cette étape au sérieux, même s'il ne prévoit pas de
          les utiliser immédiatement.
        </p>
        <h3 className="fr-h6">7.3. Comment les conserver ?</h3>
        <p>
          Les mots de secours doivent être conservés dans un endroit sécurisé et
          accessible en cas de problème.
        </p>
        <p>
          Ils peuvent être placés dans un gestionnaire de secrets adapté ou
          conservés hors ligne selon les pratiques de sécurité de l'utilisateur.
        </p>
        <p>
          Il est important de ne pas dépendre exclusivement de l'appareil
          contenant la méthode d'authentification principale.
        </p>
        <p>
          Par exemple, conserver les mots de secours uniquement sur un téléphone
          qui contient aussi l'application TOTP peut rendre la récupération
          difficile si ce téléphone est perdu.
        </p>
        <h3 className="fr-h6">7.4. Utiliser les mots de secours</h3>
        <p>
          Lorsque le parcours de connexion le permet, l'utilisateur peut
          recourir à ses mots de secours pour retrouver l'accès à son compte.
        </p>
        <p>Il doit suivre les instructions affichées dans l'interface PCI.</p>
        <p>
          Après cette récupération, il est recommandé de vérifier ses méthodes
          d'authentification et de rétablir une configuration permettant de se
          connecter normalement.
        </p>
        <h3 className="fr-h6">
          7.5. Consulter ou renouveler les mots de secours
        </h3>
        <p>
          La gestion des mots de secours évolue avec les fonctionnalités de PCI.
        </p>
        <p>
          Le parcours récent prévoit leur gestion depuis l'interface du compte,
          sans le téléchargement d'un document PDF.
        </p>
        <p>
          L'utilisateur peut ainsi accéder aux fonctionnalités proposées pour
          gérer ou renouveler ses mots de secours.
        </p>
        <h3 className="fr-h6">
          7.6. Des informations strictement confidentielles
        </h3>
        <p>Les mots de secours sont des secrets de sécurité.</p>
        <p>
          Ils ne doivent jamais être communiqués au support ProConnect, à un
          administrateur ou à une autre personne.
        </p>
        <p>
          Une personne qui demande ces mots pour « vérifier » ou « débloquer »
          un compte ne suit pas une procédure normale de support.
        </p>
        <p>
          En cas de doute, il faut interrompre l'échange et contacter
          l'assistance par un canal officiel.
        </p>
        <h2 className="fr-h4">Chapitre 8 — Retrouver l'accès à son compte</h2>
        <h3 className="fr-h6">8.1. Identifier la cause du blocage</h3>
        <p>Une difficulté de connexion peut avoir plusieurs origines.</p>
        <p>
          L'utilisateur peut avoir oublié son mot de passe, perdu son appareil,
          supprimé son application d'authentification ou ne plus disposer de sa
          passkey.
        </p>
        <p>Il peut également avoir perdu ses mots de secours.</p>
        <p>Ces situations ne nécessitent pas toutes la même intervention.</p>
        <h3 className="fr-h6">8.2. Le mot de passe est oublié</h3>
        <p>
          Lorsque le mot de passe est oublié, l'utilisateur doit utiliser le
          parcours de récupération proposé par ProConnect Identité.
        </p>
        <p>
          La récupération repose sur les vérifications prévues pour le compte.
        </p>
        <p>
          Le support ne doit jamais demander à connaître le mot de passe
          précédent.
        </p>
        <h3 className="fr-h6">8.3. L'application TOTP n'est plus accessible</h3>
        <p>
          Si l'utilisateur a changé de téléphone ou supprimé son application, il
          doit vérifier s'il dispose d'une sauvegarde ou d'une autre méthode
          configurée.
        </p>
        <p>
          Si une passkey ou une autre méthode est disponible, elle peut lui
          permettre de poursuivre la connexion.
        </p>
        <p>Il pourra ensuite configurer une nouvelle méthode TOTP.</p>
        <h3 className="fr-h6">8.4. La passkey est perdue</h3>
        <p>
          Lorsqu'une passkey n'est plus disponible, l'utilisateur peut vérifier
          si elle existe sur un autre appareil ou dans un gestionnaire
          synchronisé.
        </p>
        <p>
          S'il dispose d'une application TOTP ou d'une autre méthode compatible,
          il peut l'utiliser pour retrouver l'accès au compte.
        </p>
        <h3 className="fr-h6">8.5. Les mots de secours sont disponibles</h3>
        <p>
          Lorsque l'utilisateur possède encore ses mots de secours, il peut
          suivre le parcours de récupération prévu par PCI.
        </p>
        <p>
          Il doit ensuite vérifier ses paramètres de sécurité et rétablir les
          méthodes nécessaires.
        </p>
        <h3 className="fr-h6">8.6. Toutes les méthodes ont été perdues</h3>
        <p>
          Lorsqu'un utilisateur ne dispose plus d'aucune méthode
          d'authentification ni de mots de secours utilisables, il doit
          contacter l'assistance ProConnect.
        </p>
        <p>Le support dispose d'une procédure spécifique de récupération.</p>
        <p>
          Dans le fonctionnement prévu, une intervention sur l'identité du
          compte peut permettre de reprendre un parcours de connexion sécurisé,
          avec une nouvelle vérification de l'accès à la messagerie.
        </p>
        <p>
          L'utilisateur doit ensuite reconfigurer ses moyens d'authentification.
        </p>
        <p>
          Les modalités exactes de cette procédure sont susceptibles d'évoluer.
          Elles doivent être confirmées avant publication, notamment pour
          distinguer les actions de révocation d'identité et de réinitialisation
          des méthodes de sécurité.
        </p>
        <h3 className="fr-h6">
          8.7. L'accès à la messagerie professionnelle est également perdu
        </h3>
        <p>
          La situation est plus complexe lorsque l'utilisateur n'a plus accès à
          l'adresse électronique associée à son compte.
        </p>
        <p>
          Certaines vérifications et opérations de récupération reposent en
          effet sur cette messagerie.
        </p>
        <p>
          Il convient alors de distinguer la récupération de l'accès à la
          messagerie, qui peut relever de l'organisation, et la récupération du
          compte PCI.
        </p>
        <p>
          Le support ProConnect ne peut pas rétablir directement l'accès à une
          boîte électronique administrée par un organisme tiers.
        </p>
        <h2 className="fr-h4">Chapitre 9 — Comprendre les codes de sécurité</h2>
        <h3 className="fr-h6">9.1. Tous les codes n'ont pas le même rôle</h3>
        <p>
          Un utilisateur peut rencontrer plusieurs types de codes dans son
          parcours.
        </p>
        <p>Il est important de ne pas les confondre.</p>
        <h3 className="fr-h6">9.2. Le code de confirmation à dix chiffres</h3>
        <p>
          Ce code est envoyé par courriel dans certains parcours de ProConnect
          Identité.
        </p>
        <p>
          Il permet notamment de confirmer l'accès à l'adresse électronique
          professionnelle.
        </p>
        <p>
          Il peut être demandé lors de la création du compte ou dans certaines
          circonstances de connexion.
        </p>
        <h3 className="fr-h6">9.3. Le code TOTP à six chiffres</h3>
        <p>Ce code est généré par une application d'authentification.</p>
        <p>Il change toutes les trente secondes.</p>
        <p>
          Il sert à valider une méthode de double authentification configurée
          dans le compte.
        </p>
        <h3 className="fr-h6">9.4. Le code par courriel dans la Fédération</h3>
        <p>
          Dans le cadre du déploiement progressif de l'authentification
          multifacteur, ProConnect Fédération peut également demander un code à
          usage unique envoyé par courriel après une authentification auprès
          d'un fournisseur institutionnel.
        </p>
        <p>
          Ce mécanisme intervient notamment lorsqu'un service partenaire exige
          la MFA et que le fournisseur d'identité n'est pas encore capable de
          fournir le niveau demandé.
        </p>
        <p>
          Il ne s'agit pas du même parcours que le code de confirmation de
          l'adresse électronique dans PCI.
        </p>
        <p>
          Ce mécanisme transitoire n'est pas disponible pour les fournisseurs de
          services sur le RIE.
        </p>
        <h3 className="fr-h6">9.5. Les mots de secours</h3>
        <p>Les mots de secours constituent un moyen de récupération.</p>
        <p>
          Ils ne remplacent pas les codes TOTP dans le fonctionnement habituel
          de l'authentification.
        </p>
        <p>
          Leur rôle est de permettre à l'utilisateur de retrouver l'accès à son
          compte lorsque certaines méthodes ne sont plus disponibles.
        </p>
        <p>
          <strong>Pour aller plus loin — FAQ</strong>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/article/comment-regler-les-problematiques-liees-au-code-de-confirmation-a-10-chiffres-jyepuz/">
            Résoudre les problèmes de code de confirmation à dix chiffres
          </a>
        </p>
        <p>
          <a href="https://proconnect.crisp.help/fr/category/double-authentification-2fa-1efbs0/">
            Centre d'aide — Double authentification
          </a>
        </p>
        <h2 className="fr-h4">
          Chapitre 10 — L'authentification multifacteur dans ProConnect
          Fédération
        </h2>
        <h3 className="fr-h6">
          10.1. Les fournisseurs institutionnels disposent de leurs propres
          méthodes
        </h3>
        <p>
          Lorsqu'un utilisateur s'authentifie avec le fournisseur d'identité de
          son ministère ou de son établissement, ses méthodes de sécurité sont
          gérées par ce fournisseur.
        </p>
        <p>
          Il peut s'agir d'un mot de passe accompagné d'un code temporaire,
          d'une carte professionnelle ou d'un dispositif de sécurité matériel.
        </p>
        <p>
          L'utilisateur n'a pas nécessairement besoin de configurer une méthode
          TOTP dans ProConnect Identité.
        </p>
        <h3 className="fr-h6">
          10.2. Le service partenaire peut exiger la MFA
        </h3>
        <p>
          Lorsqu'un fournisseur de services souhaite renforcer la sécurité, il
          peut demander un niveau d'authentification compatible avec la MFA.
        </p>
        <p>
          ProConnect Fédération transmet cette exigence au fournisseur
          d'identité concerné.
        </p>
        <p>
          Le fournisseur doit alors réaliser l'authentification correspondante
          et déclarer le niveau effectivement atteint.
        </p>
        <h3 className="fr-h6">10.3. Le mécanisme transitoire par courriel</h3>
        <p>
          Tous les fournisseurs d'identité n'ont pas déployé la MFA au même
          moment.
        </p>
        <p>
          Dans le cadre du calendrier de généralisation, ProConnect Fédération
          dispose d'un mécanisme permettant d'ajouter une vérification par
          courriel dans certaines situations.
        </p>
        <p>
          L'utilisateur peut donc réussir son authentification institutionnelle,
          puis voir apparaître une étape supplémentaire demandant un code reçu
          par courriel.
        </p>
        <p>Cette étape est liée à l'exigence du service partenaire.</p>
        <p>Elle ne signifie pas que l'utilisateur possède un compte PCI.</p>
        <h3 className="fr-h6">10.4. Les limites de ce mécanisme</h3>
        <p>
          L'ajout d'un code par courriel ne présente pas nécessairement les
          mêmes garanties qu'une authentification multifacteur directement
          assurée par le fournisseur d'identité.
        </p>
        <p>
          Les niveaux déclarés doivent refléter la sécurité réellement obtenue.
        </p>
        <p>
          Par ailleurs, le mécanisme de relais par courriel n'est pas disponible
          pour les services partenaires sur le RIE.
        </p>
        <h2 className="fr-h4">
          Chapitre 11 — Comprendre les niveaux d'authentification
        </h2>
        <h3 className="fr-h6">
          11.1. Une authentification réussie ne signifie pas toujours le même
          niveau de sécurité
        </h3>
        <p>
          Deux professionnels peuvent réussir à se connecter à ProConnect en
          utilisant des méthodes très différentes.
        </p>
        <p>L'un peut saisir un mot de passe.</p>
        <p>
          L'autre peut utiliser une carte professionnelle associée à un code
          personnel.
        </p>
        <p>
          Les deux connexions sont réussies, mais elles ne présentent pas
          nécessairement les mêmes garanties.
        </p>
        <h3 className="fr-h6">
          11.2. Le niveau déclaré par le fournisseur d'identité
        </h3>
        <p>
          Le fournisseur d'identité communique à ProConnect des informations
          permettant de caractériser l'authentification réalisée.
        </p>
        <p>
          Ces informations peuvent notamment indiquer le niveau de confiance
          atteint et les méthodes utilisées.
        </p>
        <p>
          Dans la documentation technique, elles sont représentées par des
          attributs appelés
          <code>acr</code>
          et
          <code>amr</code>.
        </p>
        <h3 className="fr-h6">11.3. Comprendre simplement ACR et AMR</h3>
        <p>
          L'attribut
          <code>acr</code>
          permet de décrire le niveau d'authentification atteint.
        </p>
        <p>
          L'attribut
          <code>amr</code>
          indique les méthodes utilisées pendant l'authentification.
        </p>
        <p>
          Par exemple, une connexion avec mot de passe et application TOTP ne
          présente pas les mêmes caractéristiques qu'une connexion avec mot de
          passe seul.
        </p>
        <p>
          Le fournisseur d'identité doit déclarer les méthodes réellement
          utilisées et ne pas annoncer un niveau supérieur à celui effectivement
          atteint.
        </p>
        <h3 className="fr-h6">11.4. Le rôle du fournisseur de services</h3>
        <p>Le service partenaire peut exiger un niveau minimum.</p>
        <p>Il doit vérifier que le niveau reçu correspond à ses exigences.</p>
        <p>
          Si ce n'est pas le cas, il peut refuser l'accès ou demander un nouveau
          parcours d'authentification.
        </p>
        <h3 className="fr-h6">
          11.5. Authentification et identité professionnelle
        </h3>
        <p>
          Le niveau de sécurité de l'authentification ne doit pas être confondu
          avec la fiabilité de toutes les informations d'identité
          professionnelle.
        </p>
        <p>
          La confiance accordée à un parcours peut également dépendre de la
          vérification de l'identité de la personne et de son lien avec
          l'organisation.
        </p>
        <p>Ces différentes garanties seront approfondies dans la Partie VI.</p>
        <h2 className="fr-h4">
          Chapitre 12 — Adopter les bons réflexes de sécurité
        </h2>
        <h3 className="fr-h6">12.1. Ne jamais partager son compte</h3>
        <p>
          Un compte ProConnect doit être utilisé uniquement par son titulaire.
        </p>
        <p>
          Il ne doit pas être prêté à un collègue, à un supérieur hiérarchique
          ou à un prestataire.
        </p>
        <p>
          Lorsque plusieurs personnes doivent accéder aux mêmes informations, le
          service partenaire doit prévoir des mécanismes d'accès adaptés.
        </p>
        <h3 className="fr-h6">12.2. Ne jamais transmettre ses secrets</h3>
        <p>
          Les mots de passe, codes de confirmation, codes TOTP, mots de secours
          et secrets de configuration doivent rester confidentiels.
        </p>
        <p>
          Le support ProConnect n'a pas besoin de connaître ces informations
          pour diagnostiquer une difficulté.
        </p>
        <p>
          Il ne faut donc jamais les communiquer par courriel, messagerie
          instantanée ou téléphone.
        </p>
        <h3 className="fr-h6">12.3. Se méfier des tentatives d'hameçonnage</h3>
        <p>
          Un message frauduleux peut imiter une communication officielle et
          demander à l'utilisateur de se connecter sur un faux site.
        </p>
        <p>
          Avant de saisir ses identifiants, il est important de vérifier
          l'adresse du site et le contexte de la demande.
        </p>
        <p>
          En cas de doute, l'utilisateur doit éviter de suivre le lien reçu et
          privilégier l'accès direct au service connu.
        </p>
        <h3 className="fr-h6">
          12.4. Préparer le remplacement de son téléphone
        </h3>
        <p>
          Avant de remplacer un appareil contenant une application TOTP ou des
          passkeys, l'utilisateur doit vérifier qu'il dispose d'une méthode
          alternative.
        </p>
        <p>
          Il peut notamment configurer une méthode supplémentaire et s'assurer
          que ses moyens de récupération sont disponibles.
        </p>
        <h3 className="fr-h6">12.5. Protéger les appareils utilisés</h3>
        <p>
          Les appareils servant à l'authentification doivent être protégés par
          des mécanismes de verrouillage adaptés.
        </p>
        <p>
          Les mises à jour de sécurité doivent être appliquées régulièrement.
        </p>
        <p>
          Il est également recommandé de ne pas laisser une session ouverte sur
          un ordinateur partagé.
        </p>
        <h3 className="fr-h6">12.6. Signaler une situation suspecte</h3>
        <p>
          Lorsqu'un utilisateur pense que son compte a été compromis, il doit
          agir rapidement.
        </p>
        <p>
          Selon la situation, il peut être nécessaire de modifier ses moyens de
          connexion, de sécuriser sa messagerie professionnelle ou de contacter
          le support compétent.
        </p>
        <p>
          Si le compte dépend d'un fournisseur institutionnel, le support
          informatique de l'organisation doit être sollicité.
        </p>
        <h2 className="fr-h4">Chapitre 13 — Ce qu'il faut retenir</h2>
        <p>
          La sécurité de l'identité professionnelle repose sur plusieurs
          mécanismes complémentaires.
        </p>
        <p>
          L'authentification multifacteur permet de renforcer la connexion en
          ajoutant des garanties à celles d'un simple mot de passe.
        </p>
        <p>
          Dans ProConnect Identité, les utilisateurs peuvent notamment utiliser
          une application TOTP ou une clé d'accès.
        </p>
        <p>
          Les mots de secours constituent un moyen de récupération qu'il est
          important de conserver de manière sécurisée.
        </p>
        <p>
          Les fournisseurs d'identité institutionnels disposent de leurs propres
          méthodes d'authentification, qui ne doivent pas être confondues avec
          celles de PCI.
        </p>
        <p>
          Les services partenaires peuvent exiger un niveau de sécurité renforcé
          selon leurs besoins.
        </p>
        <p>
          Enfin, les méthodes d'authentification, la fiabilité de l'identité
          civile et la vérification du rattachement professionnel constituent
          des garanties distinctes.
        </p>
        <p>
          <strong>Dans la Partie VI</strong>, nous étudierons les mécanismes
          permettant de vérifier l'identité professionnelle et les droits :
          niveaux de confiance, certification, qualité de dirigeant et garanties
          transmises aux services partenaires.
        </p>
        <hr />
      </article>
    </DocumentationLayout>
  );
}
