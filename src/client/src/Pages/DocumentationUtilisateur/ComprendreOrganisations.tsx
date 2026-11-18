import { DocumentationLayout } from "./DocumentationLayout";

export default function ComprendreOrganisations() {
  return (
    <DocumentationLayout>
      <article>
      <p className="fr-badge fr-badge--blue-france">
        Partie 4 sur 8
      </p>
      <h1 className="fr-h2">
        Partie IV — Comprendre les organisations
      </h1>
      <p>
        <em>
          Identifier son organisation, comprendre les rattachements et les vérifications associées.
        </em>
      </p>
      <h2 className="fr-h4">
        Chapitre 1 — La place des organisations dans ProConnect
      </h2>
      <h3 className="fr-h6">
        1.1. Pourquoi ProConnect associe-t-il une personne à une organisation ?
      </h3>
      <p>
        ProConnect est un dispositif d'identification et d'authentification destiné aux usages professionnels.
      </p>
      <p>
        Dans ce contexte, reconnaître une personne ne suffit pas toujours. Il est également nécessaire de connaître l'organisation au nom de laquelle elle exerce son activité.
      </p>
      <p>
        Une même personne peut en effet travailler pour plusieurs structures, changer d'employeur ou exercer différentes fonctions au cours de sa carrière.
      </p>
      <p>
        Le rattachement à une organisation permet d'associer une identité professionnelle à une structure déterminée.
      </p>
      <p>
        Cette information peut ensuite être utilisée par les services partenaires pour appliquer leurs propres règles d'accès.
      </p>
      <p>
        Par exemple, un service administratif peut être réservé aux agents de certaines administrations, tandis qu'une autre application peut être accessible à des salariés d'entreprises privées ou à des représentants d'associations.
      </p>
      <p>
        L'organisation constitue donc une composante importante de l'identité professionnelle utilisée avec ProConnect.
      </p>
      <h3 className="fr-h6">
        1.2. Une organisation n'est pas un compte utilisateur
      </h3>
      <p>
        Une organisation représente une structure professionnelle.
      </p>
      <p>
        Le compte utilisateur représente une personne physique.
      </p>
      <p>
        Ces deux éléments sont distincts.
      </p>
      <p>
        Plusieurs personnes peuvent appartenir à une même organisation, mais chacune doit utiliser sa propre identité pour se connecter.
      </p>
      <p>
        Ainsi, les agents d'une mairie ne doivent pas partager un compte unique au nom de la collectivité.
      </p>
      <p>
        Chaque agent doit pouvoir être identifié individuellement.
      </p>
      <p>
        Cette séparation contribue à la sécurité des accès et à la traçabilité des opérations réalisées dans les services partenaires.
      </p>
      <h3 className="fr-h6">
        1.3. Une organisation n'est pas nécessairement un service partenaire
      </h3>
      <p>
        Une organisation peut être associée à un utilisateur sans exploiter elle-même un service numérique connecté à ProConnect.
      </p>
      <p>
        Par exemple, une association peut employer plusieurs salariés utilisant ProConnect pour accéder à une application administrative.
      </p>
      <p>
        Cette association constitue leur organisation professionnelle, mais elle n'est pas nécessairement fournisseur de services.
      </p>
      <p>
        Inversement, une administration peut proposer un service partenaire accessible à des professionnels appartenant à de nombreuses organisations différentes.
      </p>
      <p>
        Il est donc important de distinguer l'organisation de l'utilisateur et l'organisme qui exploite l'application consultée.
      </p>
      <h2 className="fr-h4">
        Chapitre 2 — Comprendre les identifiants SIREN et SIRET
      </h2>
      <h3 className="fr-h6">
        2.1. Le numéro SIREN
      </h3>
      <p>
        Le SIREN est un identifiant à neuf chiffres attribué à une unité légale.
      </p>
      <p>
        Il permet notamment d'identifier une entreprise, une association immatriculée ou un organisme public.
      </p>
      <p>
        Une même unité légale conserve son SIREN lorsqu'elle dispose de plusieurs établissements.
      </p>
      <h3 className="fr-h6">
        2.2. Le numéro SIRET
      </h3>
      <p>
        Le SIRET est un identifiant à quatorze chiffres permettant d'identifier un établissement.
      </p>
      <p>
        Il est composé du SIREN de l'unité légale et d'un numéro complémentaire propre à l'établissement.
      </p>
      <p>
        Une même entreprise peut donc posséder plusieurs SIRET correspondant à ses différents établissements.
      </p>
      <p>
        Dans ProConnect Identité, le SIRET joue un rôle important dans l'identification de l'organisation à laquelle l'utilisateur souhaite se rattacher.
      </p>
      <h3 className="fr-h6">
        2.3. Pourquoi le bon SIRET est-il important ?
      </h3>
      <p>
        Deux établissements peuvent appartenir à la même entreprise tout en possédant des SIRET différents.
      </p>
      <p>
        De la même manière, plusieurs organismes publics peuvent être liés administrativement sans partager le même identifiant.
      </p>
      <p>
        Le choix du SIRET permet donc de préciser la structure représentée.
      </p>
      <p>
        Une erreur peut conduire à associer le compte à un établissement qui ne correspond pas à la situation réelle de l'utilisateur.
      </p>
      <p>
        Cette différence peut également avoir des conséquences sur les services partenaires qui utilisent le SIRET pour déterminer les droits d'accès.
      </p>
      <h3 className="fr-h6">
        2.4. Comment retrouver le SIRET de son organisation ?
      </h3>
      <p>
        Le SIRET peut généralement être retrouvé sur les documents administratifs de l'organisation.
      </p>
      <p>
        Il est également possible de consulter l'Annuaire des Entreprises, qui permet de rechercher une structure à partir de son nom ou d'autres informations publiques.
      </p>
      <p>
        Lorsqu'une organisation dispose de plusieurs établissements, l'utilisateur doit vérifier lequel correspond à son activité.
      </p>
      <p>
        <strong>
          Ressource utile
        </strong>
      </p>
      <p>
        <a href="https://annuaire-entreprises.data.gouv.fr/">
          Consulter l'Annuaire des Entreprises
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 3 — Comprendre le rattachement professionnel
      </h2>
      <h3 className="fr-h6">
        3.1. Qu'est-ce qu'un rattachement ?
      </h3>
      <p>
        Le rattachement est l'association entre l'identité d'un utilisateur et une organisation.
      </p>
      <p>
        Il permet de représenter le lien professionnel déclaré entre une personne et la structure pour laquelle elle exerce son activité.
      </p>
      <p>
        Ce lien peut notamment correspondre à une relation de travail ou à une fonction de direction.
      </p>
      <p>
        Il ne doit pas être confondu avec une simple relation commerciale, une prestation ponctuelle ou une autorisation d'utiliser une application.
      </p>
      <h3 className="fr-h6">
        3.2. Comment le rattachement est-il établi ?
      </h3>
      <p>
        Dans ProConnect Identité, l'utilisateur sélectionne l'organisation qu'il souhaite rejoindre.
      </p>
      <p>
        Le système peut ensuite examiner plusieurs informations pour déterminer si ce rattachement peut être accepté.
      </p>
      <p>
        Le domaine de l'adresse électronique professionnelle joue notamment un rôle important.
      </p>
      <p>
        Lorsqu'il existe une correspondance suffisamment fiable entre ce domaine et l'organisation, le rattachement peut être facilité.
      </p>
      <p>
        Lorsque cette correspondance n'est pas établie, des vérifications complémentaires peuvent être nécessaires.
      </p>
      <h3 className="fr-h6">
        3.3. Le rôle du domaine électronique
      </h3>
      <p>
        Le domaine correspond à la partie de l'adresse électronique située après le symbole
        <code>
          @
        </code>
        .
      </p>
      <p>
        Par exemple, dans une adresse
        <code>
          prenom.nom@entreprise.fr
        </code>
        , le domaine est
        <code>
          entreprise.fr
        </code>
        .
      </p>
      <p>
        Lorsqu'une entreprise possède et utilise ce domaine pour ses collaborateurs, celui-ci peut constituer un indice de leur appartenance à la structure.
      </p>
      <p>
        Cependant, la correspondance n'est pas toujours évidente.
      </p>
      <p>
        Une entreprise peut utiliser un domaine différent de sa dénomination officielle.
      </p>
      <p>
        Plusieurs structures peuvent également partager un domaine commun.
      </p>
      <p>
        À l'inverse, une personne peut utiliser une adresse professionnelle appartenant à une autre organisation que celle qu'elle souhaite rejoindre.
      </p>
      <p>
        Ces situations nécessitent une analyse adaptée.
      </p>
      <h3 className="fr-h6">
        3.4. Pourquoi une adresse électronique ne suffit-elle pas toujours ?
      </h3>
      <p>
        La possession d'une adresse électronique permet de démontrer que l'utilisateur peut accéder à cette messagerie.
      </p>
      <p>
        Elle ne prouve pas nécessairement son appartenance à une organisation déterminée.
      </p>
      <p>
        Par exemple, une personne peut disposer d'une adresse appartenant à un prestataire informatique tout en intervenant quotidiennement dans les locaux d'une administration.
      </p>
      <p>
        Cette adresse établit un lien avec le prestataire, mais pas automatiquement avec l'administration cliente.
      </p>
      <p>
        De même, une adresse issue d'un domaine partagé peut ne pas permettre d'identifier précisément l'établissement employeur.
      </p>
      <p>
        C'est pourquoi certaines demandes de rattachement font l'objet d'une vérification complémentaire.
      </p>
      <h2 className="fr-h4">
        Chapitre 4 — Les différents états d'un rattachement
      </h2>
      <h3 className="fr-h6">
        4.1. Un rattachement accepté
      </h3>
      <p>
        Lorsque les informations disponibles permettent d'établir suffisamment le lien professionnel, le rattachement peut être accepté.
      </p>
      <p>
        L'organisation est alors associée au compte de l'utilisateur.
      </p>
      <p>
        Cette association peut être utilisée dans les parcours de connexion aux services partenaires.
      </p>
      <p>
        L'acceptation d'un rattachement ne constitue toutefois pas une habilitation générale à réaliser toutes les démarches au nom de l'organisation.
      </p>
      <h3 className="fr-h6">
        4.2. Un rattachement en cours de vérification
      </h3>
      <p>
        Certaines demandes nécessitent un examen complémentaire.
      </p>
      <p>
        L'utilisateur peut alors recevoir un message indiquant que son lien avec l'organisation est en cours de vérification.
      </p>
      <p>
        Cette situation ne signifie pas nécessairement que sa demande sera refusée.
      </p>
      <p>
        Elle indique que les informations disponibles ne permettent pas encore de conclure.
      </p>
      <p>
        Selon le cas, l'équipe chargée de la vérification peut rechercher des informations complémentaires ou solliciter des précisions auprès de l'utilisateur.
      </p>
      <h3 className="fr-h6">
        4.3. Un rattachement refusé
      </h3>
      <p>
        Un rattachement peut être refusé lorsque les éléments disponibles ne permettent pas d'établir un lien professionnel conforme aux règles de ProConnect.
      </p>
      <p>
        Par exemple, une personne peut demander à rejoindre une organisation pour laquelle elle réalise une prestation, sans disposer d'une adresse professionnelle ou d'un statut permettant ce rattachement.
      </p>
      <p>
        Le refus concerne alors le lien avec cette organisation.
      </p>
      <p>
        Il ne signifie pas nécessairement que la personne ne peut plus utiliser ProConnect pour une autre organisation à laquelle elle appartient réellement.
      </p>
      <h3 className="fr-h6">
        4.4. Un rattachement retiré après vérification
      </h3>
      <p>
        Un rattachement peut également être réexaminé après son acceptation.
      </p>
      <p>
        Lorsqu'un contrôle révèle une incohérence ou qu'un changement de situation est signalé, le rattachement peut être supprimé.
      </p>
      <p>
        Cette intervention peut notamment intervenir après un changement d'employeur, une modification du domaine de messagerie ou une correction d'organisation.
      </p>
      <p>
        Le compte PCI peut rester actif, même si le rattachement concerné disparaît.
      </p>
      <p>
        L'utilisateur peut toutefois perdre l'accès aux services qui exigent ce lien professionnel.
      </p>
      <h2 className="fr-h4">
        Chapitre 5 — Comprendre la modération des rattachements
      </h2>
      <h3 className="fr-h6">
        5.1. Pourquoi une modération est-elle nécessaire ?
      </h3>
      <p>
        Le rattachement à une organisation peut avoir des conséquences importantes.
      </p>
      <p>
        Certains services partenaires s'appuient sur cette information pour déterminer si un utilisateur appartient à une catégorie de professionnels autorisée.
      </p>
      <p>
        Il est donc nécessaire de limiter les rattachements injustifiés.
      </p>
      <p>
        La modération permet d'examiner les demandes pour lesquelles les contrôles automatiques ne fournissent pas de garanties suffisantes.
      </p>
      <h3 className="fr-h6">
        5.2. Les situations pouvant nécessiter une vérification
      </h3>
      <p>
        Plusieurs circonstances peuvent conduire à un examen complémentaire.
      </p>
      <p>
        C'est notamment le cas lorsque :
      </p>
      <ul>
        <li>
          le domaine électronique ne correspond pas clairement à l'organisation ;
        </li>
        <li>
          plusieurs structures utilisent le même domaine ;
        </li>
        <li>
          l'utilisateur demande un rattachement à une organisation différente de celle associée à son adresse ;
        </li>
        <li>
          l'organisation utilise une messagerie mutualisée ;
        </li>
        <li>
          les informations disponibles ne permettent pas de confirmer le lien professionnel.
        </li>
      </ul>
      <p>
        Ces situations ne conduisent pas toutes automatiquement à un refus.
      </p>
      <p>
        Leur traitement dépend des règles applicables et des éléments permettant de confirmer le rattachement.
      </p>
      <h3 className="fr-h6">
        5.3. Quels éléments peuvent être examinés ?
      </h3>
      <p>
        Selon la situation, la vérification peut reposer sur des informations publiques, sur la cohérence des données de l'organisation ou sur des éléments complémentaires.
      </p>
      <p>
        Pour certaines organisations privées, un document attestant du lien professionnel peut être nécessaire.
      </p>
      <p>
        Dans d'autres situations, il peut être utile d'établir le lien juridique entre plusieurs structures ou de confirmer l'utilisation d'un domaine électronique.
      </p>
      <p>
        Les éléments demandés doivent correspondre à la difficulté rencontrée et aux règles de vérification applicables.
      </p>
      <h3 className="fr-h6">
        5.4. Pourquoi le traitement n'est-il pas toujours immédiat ?
      </h3>
      <p>
        Lorsqu'une demande ne peut pas être acceptée automatiquement, une intervention humaine peut être nécessaire.
      </p>
      <p>
        L'équipe doit alors examiner les informations disponibles et, si besoin, demander des précisions.
      </p>
      <p>
        Le délai dépend notamment de la complexité de la situation et des vérifications nécessaires.
      </p>
      <p>
        Il est donc possible qu'un utilisateur puisse créer son compte PCI sans obtenir immédiatement la validation du rattachement demandé.
      </p>
      <h3 className="fr-h6">
        5.5. Que se passe-t-il après la décision ?
      </h3>
      <p>
        Une fois l'examen terminé, l'utilisateur peut être informé de l'acceptation ou du refus de sa demande.
      </p>
      <p>
        Si le rattachement est accepté, il peut poursuivre ses démarches dans le cadre de l'organisation concernée, sous réserve des conditions propres au service partenaire.
      </p>
      <p>
        En cas de refus, il peut être nécessaire d'utiliser une autre adresse professionnelle, de sélectionner la bonne organisation ou de faire clarifier sa situation.
      </p>
      <h2 className="fr-h4">
        Chapitre 6 — Les organisations utilisant un domaine mutualisé
      </h2>
      <h3 className="fr-h6">
        6.1. Qu'est-ce qu'un domaine mutualisé ?
      </h3>
      <p>
        Un domaine mutualisé est un domaine électronique utilisé par plusieurs organisations ou établissements distincts.
      </p>
      <p>
        Cette situation peut notamment exister dans des réseaux associatifs, des structures administratives ou des services informatiques partagés.
      </p>
      <p>
        Par exemple, plusieurs collectivités peuvent bénéficier d'une messagerie administrée par un organisme mutualisateur.
      </p>
      <p>
        Les agents utilisent alors des adresses professionnelles relevant du même domaine, alors qu'ils appartiennent à des collectivités différentes.
      </p>
      <h3 className="fr-h6">
        6.2. Pourquoi cette situation complique-t-elle le rattachement ?
      </h3>
      <p>
        Lorsqu'un domaine est utilisé par une seule organisation, la correspondance peut être relativement simple.
      </p>
      <p>
        En revanche, lorsqu'il est partagé entre plusieurs structures, le domaine ne permet pas de déterminer automatiquement à laquelle appartient l'utilisateur.
      </p>
      <p>
        Une adresse professionnelle peut donc être parfaitement légitime sans suffire à établir le rattachement demandé.
      </p>
      <h3 className="fr-h6">
        6.3. Le cas des collectivités territoriales
      </h3>
      <p>
        Certaines communes utilisent les services informatiques d'une communauté de communes, d'un centre de gestion ou d'un autre organisme mutualisateur.
      </p>
      <p>
        Les adresses électroniques des agents peuvent alors appartenir à un domaine commun.
      </p>
      <p>
        Il faut distinguer l'organisme qui fournit la messagerie de celui qui emploie réellement l'agent.
      </p>
      <p>
        Le rattachement doit correspondre à la situation professionnelle de l'utilisateur et non simplement à l'organisme qui héberge son adresse électronique.
      </p>
      <h3 className="fr-h6">
        6.4. Les domaines mutualisés peuvent faire l'objet de règles particulières
      </h3>
      <p>
        Lorsqu'un domaine est identifié comme mutualisé, son utilisation peut nécessiter des règles de vérification adaptées.
      </p>
      <p>
        Il peut notamment être nécessaire de distinguer les organisations autorisées à utiliser ce domaine.
      </p>
      <p>
        La simple existence d'une messagerie mutualisée ne garantit donc pas l'acceptation automatique de tous les rattachements demandés.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/pourquoi-mon-adresse-e-mail-nest-elle-pas-acceptee-153hixq/">
          Pourquoi mon adresse e-mail n'est-elle pas acceptée ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 7 — Les situations particulières selon le type d'organisation
      </h2>
      <h3 className="fr-h6">
        7.1. Les entreprises privées
      </h3>
      <p>
        Un salarié doit normalement être rattaché à l'organisation à laquelle il appartient réellement.
      </p>
      <p>
        Lorsque l'entreprise dispose d'un domaine électronique professionnel identifiable, celui-ci peut faciliter les vérifications.
      </p>
      <p>
        Si le domaine diffère de la dénomination juridique ou est partagé entre plusieurs sociétés, des éléments complémentaires peuvent être nécessaires.
      </p>
      <h3 className="fr-h6">
        7.2. Les entrepreneurs individuels et dirigeants
      </h3>
      <p>
        Les entrepreneurs individuels et les dirigeants peuvent utiliser PCI dans le cadre de leur activité professionnelle.
      </p>
      <p>
        Leur situation présente certaines particularités, notamment lorsque l'organisation ne dispose pas de domaine électronique propre.
      </p>
      <p>
        Selon les règles applicables, des vérifications supplémentaires peuvent être nécessaires pour établir l'identité de la personne ou son lien avec l'organisation.
      </p>
      <p>
        Il convient de distinguer la vérification de l'identité civile, la qualité de dirigeant et le rattachement à une structure.
      </p>
      <p>
        Ces trois éléments ne correspondent pas à la même garantie.
      </p>
      <h3 className="fr-h6">
        7.3. Les associations
      </h3>
      <p>
        Une association peut disposer de salariés, de dirigeants ou d'autres personnes intervenant dans son fonctionnement.
      </p>
      <p>
        Toutes ces situations ne donnent pas automatiquement lieu aux mêmes possibilités de rattachement.
      </p>
      <p>
        Le compte doit correspondre à une personne physique dont le lien professionnel avec l'association peut être établi selon les règles de ProConnect.
      </p>
      <p>
        Lorsqu'une association utilise un domaine partagé ou une adresse de messagerie grand public, les vérifications peuvent être plus complexes.
      </p>
      <h3 className="fr-h6">
        7.4. Les administrations et établissements publics
      </h3>
      <p>
        Les administrations disposent souvent de systèmes d'identité et d'organisations administratives structurés.
      </p>
      <p>
        Lorsqu'un fournisseur d'identité institutionnel compatible existe, les agents concernés doivent privilégier le parcours de connexion prévu par leur administration.
      </p>
      <p>
        Il n'est pas toujours nécessaire, ni approprié, de créer un compte PCI.
      </p>
      <p>
        Pour les utilisateurs relevant effectivement de PCI, le rattachement doit correspondre à l'organisation ou à l'établissement pertinent.
      </p>
      <h3 className="fr-h6">
        7.5. Les établissements d'enseignement supérieur et de recherche
      </h3>
      <p>
        Les établissements de l'enseignement supérieur et de la recherche peuvent disposer d'un fournisseur d'identité accessible par RENATER.
      </p>
      <p>
        Les professionnels concernés peuvent alors utiliser leur identité institutionnelle pour se connecter via ProConnect Fédération.
      </p>
      <p>
        Dans cette situation, la gestion du compte et des informations d'appartenance relève principalement du fournisseur d'identité de l'établissement.
      </p>
      <p>
        Il est donc important de ne pas confondre le rattachement géré dans PCI avec les informations d'organisation transmises par un fournisseur institutionnel.
      </p>
      <h2 className="fr-h4">
        Chapitre 8 — Prestataires, consultants et personnes intervenant pour un tiers
      </h2>
      <h3 className="fr-h6">
        8.1. Travailler pour une organisation ne signifie pas nécessairement lui appartenir
      </h3>
      <p>
        Un professionnel peut intervenir quotidiennement pour une organisation sans être salarié ou dirigeant de celle-ci.
      </p>
      <p>
        C'est notamment le cas des prestataires, consultants et intervenants extérieurs.
      </p>
      <p>
        Dans ProConnect Identité, le rattachement ne doit pas servir à représenter artificiellement une appartenance à l'organisation cliente.
      </p>
      <h3 className="fr-h6">
        8.2. L'exemple d'un consultant
      </h3>
      <p>
        Imaginons un consultant salarié d'une entreprise privée qui intervient pour une administration.
      </p>
      <p>
        Il utilise une adresse électronique fournie par son employeur.
      </p>
      <p>
        Cette adresse établit un lien avec son entreprise, mais ne justifie pas automatiquement son rattachement à l'administration cliente.
      </p>
      <p>
        Le consultant doit normalement utiliser son identité professionnelle réelle.
      </p>
      <p>
        Si l'administration souhaite lui donner accès à certaines applications, les habilitations nécessaires doivent être organisées dans le cadre prévu par ces services.
      </p>
      <h3 className="fr-h6">
        8.3. Le cas d'une adresse professionnelle attribuée par le client
      </h3>
      <p>
        Une organisation cliente peut attribuer une adresse professionnelle spécifique à un intervenant extérieur.
      </p>
      <p>
        Cette situation peut modifier les possibilités de rattachement, selon les règles applicables.
      </p>
      <p>
        Elle ne signifie toutefois pas qu'une prestation commerciale suffit à elle seule à établir une appartenance à l'organisation.
      </p>
      <p>
        Les conditions de rattachement doivent être vérifiées au regard du contexte réel.
      </p>
      <h3 className="fr-h6">
        8.4. Les habilitations ne remplacent pas le rattachement
      </h3>
      <p>
        Un service partenaire peut autoriser un consultant à réaliser certaines opérations pour le compte d'un client.
      </p>
      <p>
        Cette autorisation relève de la gestion des droits dans le service.
      </p>
      <p>
        Elle ne doit pas être confondue avec une déclaration d'appartenance à l'organisation cliente dans PCI.
      </p>
      <p>
        Cette distinction est essentielle pour préserver la fiabilité des informations professionnelles.
      </p>
      <h2 className="fr-h4">
        Chapitre 9 — Gérer plusieurs organisations
      </h2>
      <h3 className="fr-h6">
        9.1. Pourquoi une personne peut-elle avoir plusieurs rattachements ?
      </h3>
      <p>
        Certaines personnes exercent plusieurs activités professionnelles.
      </p>
      <p>
        Un dirigeant peut administrer plusieurs sociétés.
      </p>
      <p>
        Un professionnel peut également appartenir à différentes structures dans le cadre de ses activités.
      </p>
      <p>
        PCI prévoit la possibilité de gérer plusieurs organisations lorsque les conditions de rattachement sont remplies.
      </p>
      <h3 className="fr-h6">
        9.2. Ajouter une organisation
      </h3>
      <p>
        Depuis son espace personnel PCI, l'utilisateur peut accéder à la rubrique « Organisations ».
      </p>
      <p>
        Il peut ensuite sélectionner « Rejoindre une autre organisation ».
      </p>
      <p>
        Il renseigne les informations permettant d'identifier la structure concernée.
      </p>
      <p>
        Le nouveau rattachement peut faire l'objet des mêmes vérifications que le premier.
      </p>
      <h3 className="fr-h6">
        9.3. Les rattachements sont indépendants
      </h3>
      <p>
        L'acceptation d'un rattachement à une organisation ne signifie pas que les autres rattachements seront automatiquement acceptés.
      </p>
      <p>
        Chaque lien doit correspondre à une situation professionnelle légitime.
      </p>
      <p>
        De même, le retrait d'un rattachement ne signifie pas nécessairement que les autres organisations associées au compte seront supprimées.
      </p>
      <h3 className="fr-h6">
        9.4. Le contexte d'organisation utilisé par les services
      </h3>
      <p>
        Certains services partenaires utilisent l'organisation associée à l'utilisateur pour déterminer les démarches accessibles.
      </p>
      <p>
        Le contexte professionnel transmis lors de la connexion peut donc avoir une importance particulière.
      </p>
      <p>
        Lorsque plusieurs organisations sont associées à un compte, il faut s'assurer que le service reçoit le contexte correspondant à l'activité que l'utilisateur souhaite exercer.
      </p>
      <p>
        Les modalités exactes dépendent du parcours de connexion et des fonctionnalités du service partenaire.
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
      <h2 className="fr-h4">
        Chapitre 10 — Changer d'organisation ou quitter une structure
      </h2>
      <h3 className="fr-h6">
        10.1. Le changement d'employeur
      </h3>
      <p>
        Lorsqu'un professionnel change d'employeur, son ancienne adresse électronique peut ne plus correspondre à sa nouvelle situation.
      </p>
      <p>
        Il peut également perdre l'accès à sa messagerie précédente.
      </p>
      <p>
        Il est important de distinguer le changement d'adresse, le changement de compte PCI et la modification des rattachements.
      </p>
      <p>
        Ces opérations ne sont pas nécessairement équivalentes.
      </p>
      <h3 className="fr-h6">
        10.2. Quitter une organisation
      </h3>
      <p>
        Depuis son espace personnel, un utilisateur peut demander à quitter une organisation à laquelle il n'appartient plus.
      </p>
      <p>
        Cette opération retire le lien entre son compte et la structure concernée.
      </p>
      <p>
        Elle ne supprime pas nécessairement son compte PCI.
      </p>
      <h3 className="fr-h6">
        10.3. Le retrait d'un rattachement par le support
      </h3>
      <p>
        Dans certaines situations, un rattachement peut être retiré à la suite d'une vérification ou d'une demande recevable.
      </p>
      <p>
        Ce retrait peut intervenir pour corriger une erreur, tenir compte d'un changement de situation professionnelle ou régulariser une association incorrecte.
      </p>
      <p>
        L'utilisateur peut alors être informé de la modification et de ses conséquences.
      </p>
      <h3 className="fr-h6">
        10.4. Les conséquences sur les accès
      </h3>
      <p>
        Lorsqu'un service partenaire exige un rattachement particulier, sa suppression peut entraîner une perte d'accès.
      </p>
      <p>
        Le professionnel peut toutefois conserver la possibilité de se connecter à d'autres services si les conditions correspondantes restent réunies.
      </p>
      <p>
        La suppression d'un rattachement n'équivaut donc pas à une interdiction générale d'utiliser ProConnect.
      </p>
      <h2 className="fr-h4">
        Chapitre 11 — Rattachement, identité vérifiée et habilitation
      </h2>
      <h3 className="fr-h6">
        11.1. Trois garanties différentes
      </h3>
      <p>
        Pour comprendre les contrôles effectués autour des organisations, il faut distinguer trois éléments.
      </p>
      <p>
        <strong>
          L'identité de la personne
        </strong>
        permet de déterminer qui utilise le service.
      </p>
      <p>
        <strong>
          Le rattachement professionnel
        </strong>
        permet d'établir à quelle organisation cette personne est associée.
      </p>
      <p>
        <strong>
          L'habilitation
        </strong>
        permet de déterminer ce que cette personne est autorisée à faire dans une application.
      </p>
      <p>
        Ces éléments peuvent être vérifiés et gérés par des acteurs différents.
      </p>
      <h3 className="fr-h6">
        11.2. Un rattachement validé ne donne pas tous les droits
      </h3>
      <p>
        Un professionnel peut disposer d'un rattachement légitime à une organisation sans être autorisé à effectuer certaines démarches.
      </p>
      <p>
        Par exemple, un salarié peut appartenir à une entreprise sans être habilité à déposer une déclaration réservée à son dirigeant.
      </p>
      <p>
        Le service partenaire doit alors appliquer ses propres règles.
      </p>
      <h3 className="fr-h6">
        11.3. Le rôle des services partenaires
      </h3>
      <p>
        Les fournisseurs de services peuvent utiliser les informations professionnelles transmises par ProConnect pour faciliter leurs contrôles.
      </p>
      <p>
        Ils restent responsables de déterminer les conditions d'accès à leurs applications.
      </p>
      <p>
        Selon les besoins, ils peuvent demander des informations complémentaires ou mettre en œuvre leurs propres mécanismes d'habilitation.
      </p>
      <h3 className="fr-h6">
        11.4. Les niveaux de confiance
      </h3>
      <p>
        Les garanties associées à l'identité, à l'authentification et au rattachement peuvent contribuer à déterminer le niveau de confiance disponible dans un parcours ProConnect.
      </p>
      <p>
        Ces garanties ne doivent pas être confondues.
      </p>
      <p>
        Une authentification particulièrement sécurisée ne prouve pas, à elle seule, que le lien entre une personne et une organisation a été suffisamment vérifié.
      </p>
      <p>
        La Partie VI approfondira ces notions.
      </p>
      <h2 className="fr-h4">
        Chapitre 12 — Comprendre les difficultés liées aux organisations
      </h2>
      <h3 className="fr-h6">
        12.1. L'organisation recherchée ne correspond pas à la situation professionnelle
      </h3>
      <p>
        L'utilisateur doit vérifier qu'il a sélectionné le bon établissement.
      </p>
      <p>
        Une erreur de SIRET peut conduire à une demande de rattachement inadaptée.
      </p>
      <h3 className="fr-h6">
        12.2. Le domaine électronique n'est pas reconnu
      </h3>
      <p>
        Lorsque le domaine de l'adresse ne permet pas d'établir le lien avec l'organisation, une vérification peut être nécessaire.
      </p>
      <p>
        Il convient de vérifier que l'adresse utilisée est bien celle de l'activité professionnelle concernée.
      </p>
      <h3 className="fr-h6">
        12.3. La demande reste en attente
      </h3>
      <p>
        Une demande de rattachement peut nécessiter un examen humain.
      </p>
      <p>
        L'utilisateur doit alors attendre la décision ou répondre aux éventuelles demandes de précisions formulées dans le cadre du traitement.
      </p>
      <h3 className="fr-h6">
        12.4. Le rattachement est refusé
      </h3>
      <p>
        Un refus peut résulter d'une incohérence entre l'organisation sélectionnée et les informations disponibles.
      </p>
      <p>
        Selon la situation, l'utilisateur peut devoir sélectionner une autre organisation, utiliser une adresse professionnelle différente ou faire clarifier son lien avec la structure.
      </p>
      <h3 className="fr-h6">
        12.5. Le rattachement a été retiré
      </h3>
      <p>
        Lorsqu'un rattachement est supprimé, l'utilisateur peut perdre l'accès à certains services.
      </p>
      <p>
        Il doit vérifier si cette modification correspond à un changement de situation professionnelle ou à une correction.
      </p>
      <p>
        S'il estime qu'il s'agit d'une erreur, il peut contacter l'assistance ProConnect.
      </p>
      <h3 className="fr-h6">
        12.6. Le service refuse l'accès malgré un rattachement accepté
      </h3>
      <p>
        Un rattachement validé ne garantit pas l'accès à toutes les applications.
      </p>
      <p>
        Le service partenaire peut imposer des conditions supplémentaires.
      </p>
      <p>
        Dans ce cas, il convient de distinguer une difficulté de rattachement d'un problème d'habilitation propre au service.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/pourquoi-mon-adresse-e-mail-nest-elle-pas-acceptee-153hixq/">
          Pourquoi mon adresse e-mail n'est-elle pas acceptée ?
        </a>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-rattacher-son-compte-a-une-autre-organisation-1u83adu/">
          Comment rattacher son compte à une autre organisation ?
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 13 — Ce qu'il faut retenir
      </h2>
      <p>
        Dans ProConnect, l'organisation permet de représenter le contexte professionnel dans lequel une personne exerce son activité.
      </p>
      <p>
        Le SIRET contribue à identifier précisément la structure concernée.
      </p>
      <p>
        Le rattachement constitue le lien entre l'identité de l'utilisateur et cette organisation.
      </p>
      <p>
        Ce lien peut être établi automatiquement ou nécessiter des vérifications complémentaires.
      </p>
      <p>
        Les domaines électroniques jouent un rôle important dans ces contrôles, mais ils ne permettent pas toujours de confirmer une appartenance professionnelle.
      </p>
      <p>
        Les situations particulières, notamment les domaines mutualisés, les prestataires et les organisations multiples, nécessitent une attention adaptée.
      </p>
      <p>
        Enfin, un rattachement validé ne constitue pas une habilitation générale : chaque service partenaire conserve ses propres règles d'accès.
      </p>
      <p>
        <strong>
          Dans la Partie V
        </strong>
        , nous approfondirons les mécanismes permettant de sécuriser l'identité professionnelle : double authentification, clés d'accès, mots de secours, niveaux de sécurité et récupération du compte.
      </p>
      <hr />
      </article>
    </DocumentationLayout>
  );
}
