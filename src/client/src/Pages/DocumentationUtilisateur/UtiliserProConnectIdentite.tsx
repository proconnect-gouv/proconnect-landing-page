import { DocumentationLayout } from "./DocumentationLayout";

export default function UtiliserProConnectIdentite() {
  return (
    <DocumentationLayout>
      <article>
      <p className="fr-badge fr-badge--blue-france">
        Partie 3 sur 8
      </p>
      <h1 className="fr-h2">
        Partie III — Utiliser ProConnect Identité
      </h1>
      <p>
        <em>
          Créer, utiliser et gérer son identité professionnelle
        </em>
      </p>
      <h2 className="fr-h4">
        Chapitre 1 — Comprendre ProConnect Identité
      </h2>
      <h3 className="fr-h6">
        1.1. À quoi sert ProConnect Identité ?
      </h3>
      <p>
        ProConnect Identité, également appelé PCI, est un fournisseur d'identité de l'écosystème ProConnect.
      </p>
      <p>
        Il permet aux professionnels qui ne disposent pas d'un fournisseur d'identité institutionnel compatible d'utiliser une identité professionnelle pour accéder aux services partenaires.
      </p>
      <p>
        Contrairement à ProConnect Fédération, qui assure la liaison entre les services et les fournisseurs d'identité, ProConnect Identité propose directement les fonctionnalités nécessaires à la gestion d'un compte professionnel.
      </p>
      <p>
        Un utilisateur de PCI peut notamment :
      </p>
      <ul>
        <li>
          créer son compte à partir d'une adresse électronique professionnelle ;
        </li>
        <li>
          renseigner les informations de son identité ;
        </li>
        <li>
          associer son compte à une ou plusieurs organisations ;
        </li>
        <li>
          gérer ses méthodes de connexion et de sécurité ;
        </li>
        <li>
          consulter et modifier certaines informations de son profil ;
        </li>
        <li>
          supprimer son compte lorsqu'il n'en a plus besoin.
        </li>
      </ul>
      <p>
        Le compte ProConnect Identité est personnel. Il représente une personne physique qui agit dans un contexte professionnel.
      </p>
      <h3 className="fr-h6">
        1.2. Un compte nominatif, lié à une adresse électronique
      </h3>
      <p>
        Chaque compte PCI est associé à une adresse électronique.
      </p>
      <p>
        Cette adresse constitue un élément essentiel du parcours : elle permet de recevoir les communications liées au compte et les codes de confirmation nécessaires à certaines opérations.
      </p>
      <p>
        Elle joue également un rôle dans l'établissement du lien entre le professionnel et son organisation.
      </p>
      <p>
        Un compte ne doit pas être partagé entre plusieurs collègues, même lorsque ceux-ci exercent les mêmes fonctions.
      </p>
      <p>
        Par exemple, une mairie ne doit pas utiliser un compte créé au nom du maire pour permettre à plusieurs agents de réaliser leurs démarches. Chaque personne doit disposer de sa propre identité.
      </p>
      <h3 className="fr-h6">
        1.3. Un compte distinct des services utilisés
      </h3>
      <p>
        Créer un compte PCI ne signifie pas créer un compte sur chaque application partenaire.
      </p>
      <p>
        L'utilisateur possède une identité professionnelle qu'il peut réutiliser pour s'authentifier auprès de plusieurs services intégrant ProConnect.
      </p>
      <p>
        Chaque application conserve toutefois ses propres règles de fonctionnement et d'autorisation.
      </p>
      <p>
        Ainsi, une personne peut utiliser le même compte PCI pour accéder à plusieurs applications, sans nécessairement disposer des mêmes droits dans chacune.
      </p>
      <h2 className="fr-h4">
        Chapitre 2 — Créer son compte ProConnect Identité
      </h2>
      <h3 className="fr-h6">
        2.1. Commencer depuis le service souhaité
      </h3>
      <p>
        La création d'un compte intervient généralement lorsqu'un professionnel souhaite accéder à un service partenaire pour la première fois.
      </p>
      <p>
        Il ouvre l'application concernée, puis sélectionne le bouton de connexion ProConnect.
      </p>
      <p>
        Après avoir renseigné son adresse électronique professionnelle, il peut être orienté vers ProConnect Identité si ce fournisseur correspond à sa situation.
      </p>
      <p>
        Lorsque l'utilisateur dispose déjà d'un fournisseur institutionnel compatible, il doit normalement privilégier ce dernier.
      </p>
      <h3 className="fr-h6">
        2.2. Vérifier son adresse électronique
      </h3>
      <p>
        Lors de la création du compte PCI, l'utilisateur doit confirmer qu'il dispose bien de l'adresse électronique renseignée.
      </p>
      <p>
        Un code de validation lui est envoyé par courriel.
      </p>
      <p>
        Il doit consulter sa messagerie, récupérer le code et le saisir dans l'interface ProConnect.
      </p>
      <p>
        Cette vérification permet d'établir qu'il contrôle l'adresse utilisée pour créer le compte.
      </p>
      <p>
        Elle ne constitue pas, à elle seule, une preuve de son appartenance à l'organisation qu'il souhaite rejoindre.
      </p>
      <h3 className="fr-h6">
        2.3. Définir un mot de passe
      </h3>
      <p>
        Après la confirmation de son adresse, l'utilisateur choisit un mot de passe.
      </p>
      <p>
        Ce mot de passe lui permettra de s'authentifier auprès de PCI lors de ses prochaines connexions, sous réserve des autres vérifications éventuellement nécessaires.
      </p>
      <p>
        Il doit être personnel, suffisamment robuste et ne jamais être communiqué à un tiers.
      </p>
      <p>
        L'utilisation d'un gestionnaire de mots de passe est recommandée pour conserver un mot de passe unique et difficile à deviner.
      </p>
      <h3 className="fr-h6">
        2.4. Renseigner son organisation
      </h3>
      <p>
        Le parcours de création demande à l'utilisateur de préciser l'organisation au nom de laquelle il exerce son activité.
      </p>
      <p>
        Cette identification s'effectue notamment à partir du numéro SIRET.
      </p>
      <p>
        Le SIRET est un identifiant à quatorze chiffres attribué à un établissement.
      </p>
      <p>
        Il permet de distinguer les établissements d'une même entité juridique.
      </p>
      <p>
        Un professionnel peut retrouver ce numéro sur les documents de son organisation ou en consultant l'Annuaire des Entreprises.
      </p>
      <p>
        Il est important de sélectionner l'établissement correspondant réellement à sa situation professionnelle.
      </p>
      <h3 className="fr-h6">
        2.5. Compléter ses informations personnelles
      </h3>
      <p>
        L'utilisateur renseigne ensuite les informations nécessaires à son identification.
      </p>
      <p>
        Ces informations permettent de constituer son profil professionnel et de faciliter son identification par les services partenaires.
      </p>
      <p>
        Les informations saisies doivent correspondre à son identité réelle.
      </p>
      <p>
        Une fois les étapes terminées, le compte est créé. Certaines vérifications complémentaires peuvent néanmoins être nécessaires pour confirmer le rattachement à l'organisation.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-creer-un-compte-sur-proconnect-q4h0ci/">
          Comment créer un compte sur ProConnect ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 3 — Comprendre l'adresse électronique professionnelle
      </h2>
      <h3 className="fr-h6">
        3.1. Pourquoi l'adresse électronique est-elle importante ?
      </h3>
      <p>
        Dans PCI, l'adresse électronique remplit plusieurs fonctions.
      </p>
      <p>
        Elle identifie le compte, permet de recevoir les messages de sécurité et contribue à établir le contexte professionnel de l'utilisateur.
      </p>
      <p>
        Le domaine de l'adresse peut notamment constituer un indice de rattachement à une organisation.
      </p>
      <p>
        Par exemple, une adresse appartenant à un domaine réservé à une entreprise peut contribuer à confirmer que son utilisateur appartient à cette entreprise.
      </p>
      <p>
        Cependant, la possession d'une adresse ne suffit pas toujours à établir ce lien.
      </p>
      <h3 className="fr-h6">
        3.2. Les adresses professionnelles avec domaine personnalisé
      </h3>
      <p>
        Certaines organisations possèdent leur propre nom de domaine.
      </p>
      <p>
        Une adresse comme
        <code>
          prenom.nom@organisation.fr
        </code>
        peut permettre d'identifier plus facilement l'organisation concernée.
      </p>
      <p>
        ProConnect peut s'appuyer sur la cohérence entre ce domaine et l'organisation sélectionnée pour faciliter certaines vérifications.
      </p>
      <p>
        Le domaine doit toutefois être réellement lié à l'organisation.
      </p>
      <p>
        Une simple ressemblance entre deux noms ne constitue pas nécessairement une preuve suffisante.
      </p>
      <h3 className="fr-h6">
        3.3. Les adresses utilisant un domaine de messagerie gratuit
      </h3>
      <p>
        Certaines petites structures utilisent des adresses fournies par des services de messagerie grand public.
      </p>
      <p>
        C'est notamment le cas d'adresses se terminant par
        <code>
          gmail.com
        </code>
        ,
        <code>
          orange.fr
        </code>
        ,
        <code>
          outlook.fr
        </code>
        ou d'autres domaines similaires.
      </p>
      <p>
        Ces domaines sont partagés par de nombreuses personnes et organisations.
      </p>
      <p>
        Ils ne permettent donc pas, à eux seuls, de déterminer à quelle structure appartient l'utilisateur.
      </p>
      <p>
        Selon l'organisation concernée et les règles applicables, leur utilisation peut être autorisée sous réserve de vérifications complémentaires, ou ne pas permettre le rattachement demandé.
      </p>
      <p>
        Il ne faut donc pas considérer qu'une adresse de messagerie gratuite est systématiquement acceptée pour toutes les organisations.
      </p>
      <h3 className="fr-h6">
        3.4. Les domaines partagés entre plusieurs structures
      </h3>
      <p>
        Certaines organisations utilisent un domaine commun à plusieurs établissements, services ou entités juridiques.
      </p>
      <p>
        Dans cette situation, le domaine ne permet pas toujours de déterminer précisément à quel établissement appartient la personne.
      </p>
      <p>
        Des vérifications supplémentaires peuvent alors être nécessaires.
      </p>
      <p>
        Cette situation peut notamment concerner certains réseaux d'établissements, structures mutualisées ou groupes d'organisations.
      </p>
      <h3 className="fr-h6">
        3.5. Peut-on changer l'adresse électronique de son compte ?
      </h3>
      <p>
        L'adresse électronique associée à un compte PCI ne peut pas être modifiée directement.
      </p>
      <p>
        Lorsqu'un professionnel change d'adresse, notamment à la suite d'un changement d'employeur ou de domaine, il doit suivre le parcours prévu pour utiliser une nouvelle adresse.
      </p>
      <p>
        La FAQ actuelle indique qu'il faut supprimer le compte associé à l'ancienne adresse, puis créer un nouveau compte.
      </p>
      <p>
        Cette opération doit être préparée avec attention, particulièrement si le compte est utilisé pour accéder à plusieurs services.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-modifier-mon-compte-hcuo5x/">
          Comment modifier mon compte ?
        </a>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/pourquoi-mon-adresse-e-mail-nest-elle-pas-acceptee-153hixq/">
          Pourquoi mon adresse e-mail n'est-elle pas acceptée ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 4 — Comprendre le rattachement à une organisation
      </h2>
      <h3 className="fr-h6">
        4.1. Une identité personnelle dans un contexte professionnel
      </h3>
      <p>
        Le compte PCI identifie une personne physique.
      </p>
      <p>
        Le rattachement à une organisation permet de préciser le contexte dans lequel cette personne exerce son activité.
      </p>
      <p>
        Ces deux éléments doivent être distingués.
      </p>
      <p>
        Une personne peut conserver la même identité tout en changeant d'organisation ou en intervenant pour plusieurs structures.
      </p>
      <h3 className="fr-h6">
        4.2. Le rôle du SIRET
      </h3>
      <p>
        Lorsqu'un utilisateur rejoint une organisation, PCI doit identifier précisément la structure concernée.
      </p>
      <p>
        Le SIRET permet d'éviter certaines confusions entre des organisations portant des noms proches ou entre plusieurs établissements d'une même entité.
      </p>
      <p>
        Il est donc important de sélectionner le bon établissement.
      </p>
      <p>
        Par exemple, une collectivité, un établissement public et une structure qui lui est rattachée peuvent disposer d'identifiants différents.
      </p>
      <h3 className="fr-h6">
        4.3. Le rattachement peut faire l'objet d'une vérification
      </h3>
      <p>
        Lorsqu'un professionnel demande à rejoindre une organisation, ProConnect peut vérifier la cohérence entre son identité, son adresse électronique et la structure choisie.
      </p>
      <p>
        Selon la situation, cette vérification peut être automatique ou nécessiter une intervention complémentaire.
      </p>
      <p>
        L'objectif est d'éviter qu'une personne puisse se déclarer membre d'une organisation sans disposer d'un lien professionnel légitime avec celle-ci.
      </p>
      <h3 className="fr-h6">
        4.4. Comprendre la modération
      </h3>
      <p>
        La modération est un mécanisme de contrôle permettant d'examiner certaines demandes de rattachement.
      </p>
      <p>
        Elle intervient notamment lorsque les informations disponibles ne suffisent pas à établir automatiquement le lien entre l'utilisateur et l'organisation.
      </p>
      <p>
        La demande peut être acceptée, refusée ou faire l'objet d'une vérification complémentaire.
      </p>
      <p>
        Certaines vérifications peuvent également intervenir après la création du compte.
      </p>
      <p>
        Dans ce cas, un rattachement initialement accordé peut être retiré si les contrôles ultérieurs ne permettent pas de le confirmer.
      </p>
      <p>
        Le retrait d'un rattachement ne signifie pas nécessairement la suppression du compte PCI.
      </p>
      <p>
        Il peut simplement empêcher l'utilisateur de continuer à agir au nom de l'organisation concernée.
      </p>
      <h3 className="fr-h6">
        4.5. Rejoindre plusieurs organisations
      </h3>
      <p>
        Un professionnel peut exercer plusieurs activités ou représenter plusieurs structures.
      </p>
      <p>
        PCI permet, selon les conditions applicables, de rattacher un compte à plusieurs organisations.
      </p>
      <p>
        Depuis son espace personnel, l'utilisateur peut accéder à la rubrique « Organisations » puis sélectionner « Rejoindre une autre organisation ».
      </p>
      <p>
        Chaque rattachement doit correspondre à une situation professionnelle réelle.
      </p>
      <h3 className="fr-h6">
        4.6. Le cas des prestataires et consultants
      </h3>
      <p>
        Un professionnel intervenant pour un client ne devient pas automatiquement membre de l'organisation de ce client.
      </p>
      <p>
        Par exemple, un consultant travaillant pour une administration reste généralement rattaché à son entreprise ou à sa propre structure professionnelle.
      </p>
      <p>
        Le fait d'effectuer une mission pour une autre organisation ne suffit pas à justifier un rattachement PCI à celle-ci.
      </p>
      <p>
        Les éventuelles autorisations nécessaires pour intervenir dans les applications du client relèvent des mécanismes prévus par ces services.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-rattacher-son-compte-a-une-autre-organisation-1u83adu/">
          Comment rattacher son compte à une autre organisation ?
        </a>
      </p>
      <p>
        La Partie IV approfondira les règles de rattachement, les structures particulières et les contrôles de modération.
      </p>
      <h2 className="fr-h4">
        Chapitre 5 — Vérifier son identité avec FranceConnect
      </h2>
      <h3 className="fr-h6">
        5.1. Pourquoi une vérification supplémentaire peut-elle être nécessaire ?
      </h3>
      <p>
        Dans certaines situations, l'adresse électronique professionnelle et les informations déclarées par l'utilisateur ne suffisent pas à garantir la fiabilité de son identité.
      </p>
      <p>
        ProConnect Identité peut alors demander une vérification complémentaire au moyen de FranceConnect.
      </p>
      <p>
        Cette démarche vise à confirmer l'identité de la personne physique.
      </p>
      <p>
        Elle ne constitue pas une authentification auprès du fournisseur d'identité de son administration.
      </p>
      <h3 className="fr-h6">
        5.2. FranceConnect et ProConnect : deux usages distincts
      </h3>
      <p>
        FranceConnect est un dispositif d'identification permettant aux particuliers de s'authentifier auprès de services en ligne.
      </p>
      <p>
        Dans certains parcours PCI, il peut également être utilisé comme moyen de vérification de l'identité civile.
      </p>
      <p>
        L'utilisateur peut alors être invité à s'identifier avec FranceConnect pour confirmer les informations associées à son compte.
      </p>
      <p>
        Cette opération ne transforme pas son compte professionnel en compte particulier.
      </p>
      <p>
        Il continue d'utiliser PCI dans le cadre de son activité professionnelle.
      </p>
      <h3 className="fr-h6">
        5.3. Dans quels cas cette vérification intervient-elle ?
      </h3>
      <p>
        Depuis les évolutions de sécurité déployées en 2026, certaines catégories d'utilisateurs peuvent être soumises à une vérification périodique de leur identité.
      </p>
      <p>
        Les règles tiennent notamment compte de la nature de l'organisation et du domaine électronique utilisé.
      </p>
      <p>
        Par exemple, les professionnels utilisant une adresse issue d'un domaine de messagerie gratuit peuvent être concernés par cette exigence dans certaines configurations.
      </p>
      <p>
        À l'inverse, certaines petites organisations disposant d'un domaine professionnel personnalisé bénéficient de règles différentes.
      </p>
      <p>
        Le comportement exact dépend des conditions applicables au compte.
      </p>
      <h3 className="fr-h6">
        5.4. Quelles informations sont utilisées ?
      </h3>
      <p>
        FranceConnect permet notamment de transmettre les informations d'identité civile nécessaires à la vérification.
      </p>
      <p>
        Les noms et prénoms peuvent être utilisés pour rapprocher l'identité déclarée dans PCI de l'identité vérifiée.
      </p>
      <p>
        Ces informations peuvent également influencer les choix proposés dans l'espace de gestion du profil.
      </p>
      <h3 className="fr-h6">
        5.5. Comprendre les informations d'identité issues de FranceConnect
      </h3>
      <p>
        Lorsqu'une identité a été vérifiée avec FranceConnect, certaines informations officielles peuvent être utilisées dans PCI.
      </p>
      <p>
        L'utilisateur peut notamment choisir, parmi les informations disponibles, le prénom ou le nom à afficher selon les possibilités proposées.
      </p>
      <p>
        En revanche, il n'est pas possible de saisir librement un nom ou un prénom différent des informations officielles transmises.
      </p>
      <p>
        Cette restriction vise à préserver la fiabilité de l'identité.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/pourquoi-dois-je-midentifier-avec-franceconnect-1ti7e34/">
          Pourquoi ProConnect me demande de m'identifier avec FranceConnect ?
        </a>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-modifier-mon-compte-hcuo5x/">
          Comment modifier mon compte ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 6 — Gérer son profil professionnel
      </h2>
      <h3 className="fr-h6">
        6.1. Accéder à son espace personnel
      </h3>
      <p>
        Une fois connecté, l'utilisateur peut accéder à son espace de gestion PCI.
      </p>
      <p>
        Depuis son nom affiché dans l'interface, il peut ouvrir « Mon compte », puis « Gérer le profil ».
      </p>
      <p>
        Cet espace rassemble les principales informations associées à son identité.
      </p>
      <p>
        Il permet également d'accéder aux rubriques consacrées aux organisations et aux moyens de connexion.
      </p>
      <h3 className="fr-h6">
        6.2. Les informations personnelles
      </h3>
      <p>
        La rubrique « Infos personnelles » permet de consulter les informations d'identité associées au compte.
      </p>
      <p>
        Selon leur origine et leur niveau de vérification, certaines informations peuvent être modifiables tandis que d'autres sont limitées aux valeurs officiellement disponibles.
      </p>
      <p>
        Il est important de conserver des informations cohérentes avec son identité réelle et sa situation professionnelle.
      </p>
      <h3 className="fr-h6">
        6.3. Les organisations
      </h3>
      <p>
        La rubrique « Organisations » permet de consulter les rattachements associés au compte.
      </p>
      <p>
        L'utilisateur peut notamment demander à rejoindre une nouvelle organisation ou quitter une organisation à laquelle il n'appartient plus.
      </p>
      <p>
        Ces opérations peuvent avoir des conséquences sur les accès aux services partenaires.
      </p>
      <p>
        Par exemple, quitter une organisation peut empêcher l'accès à une application qui réserve certaines fonctionnalités aux membres de cette structure.
      </p>
      <h3 className="fr-h6">
        6.4. Compte et connexion
      </h3>
      <p>
        La rubrique « Compte et connexion » rassemble les fonctionnalités liées à la sécurité et à la gestion du compte.
      </p>
      <p>
        Elle permet notamment d'accéder aux paramètres de double authentification et aux méthodes de connexion proposées par PCI.
      </p>
      <p>
        L'utilisateur peut y gérer les méthodes disponibles selon les fonctionnalités de son compte.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-modifier-mon-compte-hcuo5x/">
          Comment modifier mon compte ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 7 — Sécuriser son compte PCI
      </h2>
      <h3 className="fr-h6">
        7.1. Le mot de passe ne constitue pas toujours une protection suffisante
      </h3>
      <p>
        Le mot de passe permet de vérifier qu'une personne connaît un secret associé au compte.
      </p>
      <p>
        Cependant, un mot de passe peut être compromis, notamment à la suite d'un hameçonnage ou d'une réutilisation sur plusieurs services.
      </p>
      <p>
        Pour renforcer la sécurité, PCI propose des mécanismes d'authentification complémentaires.
      </p>
      <h3 className="fr-h6">
        7.2. L'application d'authentification
      </h3>
      <p>
        Une application compatible avec le mécanisme TOTP permet de générer des codes temporaires.
      </p>
      <p>
        Lors de la configuration, l'utilisateur associe l'application à son compte PCI.
      </p>
      <p>
        Il peut ensuite être invité à saisir le code affiché dans cette application pour confirmer une connexion.
      </p>
      <p>
        Ces codes sont renouvelés régulièrement et ne doivent jamais être transmis à un tiers.
      </p>
      <h3 className="fr-h6">
        7.3. La clé d'accès
      </h3>
      <p>
        Une clé d'accès, également appelée passkey, constitue une autre méthode d'authentification.
      </p>
      <p>
        Elle peut s'appuyer sur les fonctions de sécurité de l'appareil ou sur un gestionnaire de clés d'accès.
      </p>
      <p>
        Selon l'environnement utilisé, la validation peut reposer sur une empreinte digitale, une reconnaissance faciale ou un code local.
      </p>
      <p>
        La disponibilité de la clé d'accès dépend notamment de son mode de stockage et de synchronisation.
      </p>
      <h3 className="fr-h6">
        7.4. Prévoir plusieurs moyens d'accès
      </h3>
      <p>
        Lorsqu'un utilisateur ne dispose que d'une seule méthode de sécurité, la perte de son appareil peut compliquer l'accès au compte.
      </p>
      <p>
        Il est donc recommandé de prévoir, lorsque cela est possible, plusieurs méthodes de connexion.
      </p>
      <p>
        Par exemple, une personne peut utiliser une application d'authentification et disposer également d'une clé d'accès.
      </p>
      <h3 className="fr-h6">
        7.5. Les mots de secours
      </h3>
      <p>
        Les mots de secours constituent un mécanisme de récupération permettant de retrouver l'accès au compte dans certaines situations.
      </p>
      <p>
        Ils doivent être conservés de manière confidentielle et dans un endroit sûr.
      </p>
      <p>
        Ils ne doivent pas être transmis au support ou à une autre personne.
      </p>
      <p>
        Leur utilisation et leur gestion feront l'objet d'explications détaillées dans la Partie V.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/configurer-la-2fa-totp-ou-passkeycle-dacces-1a6x6i0/">
          Configurer la double authentification avec une application TOTP ou une clé d'accès
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 8 — Comprendre les vérifications lors de la connexion
      </h2>
      <h3 className="fr-h6">
        8.1. Plusieurs vérifications peuvent se succéder
      </h3>
      <p>
        Un utilisateur peut être surpris de devoir réaliser plusieurs étapes avant d'accéder à un service.
      </p>
      <p>
        Par exemple, PCI peut lui demander son mot de passe, puis un code de confirmation reçu par courriel et enfin une méthode d'authentification renforcée.
      </p>
      <p>
        Ces étapes ne remplissent pas toutes la même fonction.
      </p>
      <h3 className="fr-h6">
        8.2. Le code de confirmation à dix chiffres
      </h3>
      <p>
        Le code reçu par courriel sert notamment à confirmer l'accès à l'adresse électronique associée au compte.
      </p>
      <p>
        Il peut être demandé lors de la création du compte, de l'utilisation d'un nouveau navigateur ou dans d'autres circonstances de sécurité.
      </p>
      <p>
        Cette vérification peut être renouvelée périodiquement.
      </p>
      <p>
        Elle ne doit pas être confondue avec la double authentification TOTP.
      </p>
      <h3 className="fr-h6">
        8.3. Le code TOTP à six chiffres
      </h3>
      <p>
        Le code généré par une application d'authentification sert à confirmer la possession d'une méthode de sécurité configurée.
      </p>
      <p>
        Il est produit par l'application, et non envoyé par courriel.
      </p>
      <p>
        Il est renouvelé automatiquement à intervalles réguliers.
      </p>
      <h3 className="fr-h6">
        8.4. La vérification d'identité avec FranceConnect
      </h3>
      <p>
        Cette opération constitue encore une autre forme de contrôle.
      </p>
      <p>
        Elle vise à confirmer l'identité civile de la personne lorsque les règles applicables l'exigent.
      </p>
      <p>
        Elle ne remplace pas nécessairement les autres vérifications de connexion.
      </p>
      <h3 className="fr-h6">
        8.5. Pourquoi la connexion peut-elle devenir plus exigeante ?
      </h3>
      <p>
        Certains services partenaires demandent un niveau d'authentification renforcé.
      </p>
      <p>
        Un utilisateur qui se connectait auparavant avec son mot de passe peut alors devoir configurer ou utiliser un second facteur.
      </p>
      <p>
        Il ne s'agit pas nécessairement d'un dysfonctionnement : le service partenaire peut avoir renforcé ses exigences de sécurité.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-regler-les-problematiques-liees-au-code-de-confirmation-a-10-chiffres-jyepuz/">
          Comment régler les problématiques liées au code de confirmation à 10 chiffres ?
        </a>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/je-recois-mon-code-de-confirmation-proconnect-sur-une-messagerie-a-laquelle-je-dois-me-connecter-avec-proconnect-que-faire-1dp44v7/">
          Je reçois mon code de confirmation sur une messagerie à laquelle je dois me connecter avec ProConnect
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 9 — Retrouver l'accès à son compte
      </h2>
      <h3 className="fr-h6">
        9.1. Identifier la difficulté rencontrée
      </h3>
      <p>
        Toutes les difficultés de connexion ne nécessitent pas la même démarche.
      </p>
      <p>
        Un utilisateur peut avoir oublié son mot de passe, perdu l'accès à sa messagerie, changé de téléphone ou ne plus disposer de ses méthodes de double authentification.
      </p>
      <p>
        Il est important de distinguer ces situations.
      </p>
      <h3 className="fr-h6">
        9.2. Le mot de passe oublié
      </h3>
      <p>
        Lorsque l'utilisateur ne connaît plus son mot de passe, il doit utiliser le parcours de récupération proposé par PCI.
      </p>
      <p>
        Cette démarche repose sur les mécanismes de vérification prévus pour son compte.
      </p>
      <p>
        Elle ne nécessite pas de communiquer son ancien mot de passe au support.
      </p>
      <h3 className="fr-h6">
        9.3. La perte d'une méthode de double authentification
      </h3>
      <p>
        Un changement de téléphone ou la suppression d'une application peut rendre une méthode TOTP inutilisable.
      </p>
      <p>
        L'utilisateur peut néanmoins disposer d'une autre méthode configurée ou de mots de secours.
      </p>
      <p>
        Il convient de vérifier les possibilités de récupération disponibles avant de demander une intervention du support.
      </p>
      <h3 className="fr-h6">
        9.4. La perte de toutes les méthodes de sécurité
      </h3>
      <p>
        Lorsqu'aucune méthode d'authentification renforcée ni aucun moyen de récupération utilisable n'est disponible, l'utilisateur peut devoir contacter l'assistance ProConnect.
      </p>
      <p>
        Le support dispose de procédures spécifiques pour traiter les situations de perte d'accès.
      </p>
      <p>
        Ces procédures visent à permettre une récupération sécurisée sans compromettre l'identité de l'utilisateur.
      </p>
      <h3 className="fr-h6">
        9.5. L'accès à la messagerie professionnelle
      </h3>
      <p>
        Certaines étapes de récupération nécessitent de pouvoir recevoir un message à l'adresse associée au compte.
      </p>
      <p>
        Cela peut poser une difficulté lorsque l'utilisateur n'a plus accès à sa messagerie, notamment après un changement d'employeur ou lorsque cette messagerie nécessite elle-même une connexion ProConnect.
      </p>
      <p>
        Ces situations doivent être examinées selon leur contexte.
      </p>
      <p>
        Il ne faut jamais communiquer un code reçu par courriel, un mot de passe, une clé secrète ou des mots de secours à une personne prétendant intervenir pour le support.
      </p>
      <h2 className="fr-h4">
        Chapitre 10 — Quitter une organisation ou supprimer son compte
      </h2>
      <h3 className="fr-h6">
        10.1. Quitter une organisation
      </h3>
      <p>
        Lorsqu'un professionnel cesse d'appartenir à une organisation, son rattachement peut ne plus être justifié.
      </p>
      <p>
        Depuis la rubrique « Organisations », il peut utiliser la fonction permettant de quitter cette structure.
      </p>
      <p>
        Cette opération ne signifie pas nécessairement que son compte PCI sera supprimé.
      </p>
      <p>
        Elle modifie les organisations au nom desquelles il peut agir.
      </p>
      <h3 className="fr-h6">
        10.2. Supprimer son compte
      </h3>
      <p>
        Un utilisateur peut décider de supprimer son compte PCI lorsqu'il n'en a plus l'usage.
      </p>
      <p>
        La FAQ indique que cette opération est accessible depuis la rubrique « Compte et connexion », au moyen de l'action « Supprimer mon compte ».
      </p>
      <p>
        La suppression est irréversible.
      </p>
      <p>
        Si l'utilisateur souhaite ensuite utiliser de nouveau PCI, il devra créer un nouveau compte.
      </p>
      <h3 className="fr-h6">
        10.3. Les conséquences sur les services partenaires
      </h3>
      <p>
        La suppression du compte PCI ne doit pas être confondue avec la suppression des données conservées par les services partenaires.
      </p>
      <p>
        Chaque service dispose de ses propres règles de gestion des comptes, des habilitations et des données.
      </p>
      <p>
        Il peut donc être nécessaire de contacter séparément le service concerné pour toute demande relative aux informations qu'il conserve.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-modifier-mon-compte-hcuo5x/">
          Comment modifier mon compte ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 11 — Ce qu'il faut retenir
      </h2>
      <p>
        ProConnect Identité permet aux professionnels concernés de disposer d'un compte utilisable dans l'écosystème ProConnect.
      </p>
      <p>
        Ce compte est nominatif et associé à une adresse électronique.
      </p>
      <p>
        Sa création nécessite notamment de vérifier cette adresse, de définir un mot de passe, de renseigner son identité et d'identifier son organisation.
      </p>
      <p>
        Le rattachement à une organisation peut faire l'objet de contrôles destinés à confirmer la légitimité du lien professionnel.
      </p>
      <p>
        Le compte peut être protégé par plusieurs mécanismes complémentaires : mot de passe, confirmation de l'adresse électronique, authentification multifacteur et, dans certaines situations, vérification de l'identité civile.
      </p>
      <p>
        L'utilisateur dispose également d'un espace personnel pour consulter ses informations, gérer ses organisations et administrer ses méthodes de connexion.
      </p>
      <p>
        Enfin, les opérations de récupération et de suppression doivent être réalisées avec précaution afin de préserver la sécurité de son identité professionnelle.
      </p>
      <p>
        <strong>
          Dans la Partie IV
        </strong>
        , nous approfondirons le fonctionnement des organisations, les règles de rattachement, les SIRET, la modération et les situations particulières rencontrées par les professionnels.
      </p>
      <hr />
      </article>
    </DocumentationLayout>
  );
}
