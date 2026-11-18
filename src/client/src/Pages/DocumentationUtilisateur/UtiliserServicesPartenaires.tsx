import { DocumentationLayout } from "./DocumentationLayout";

export default function UtiliserServicesPartenaires() {
  return (
    <DocumentationLayout>
      <article>
      <p className="fr-badge fr-badge--blue-france">
        Partie 7 sur 8
      </p>
      <h1 className="fr-h2">
        Partie VII — Utiliser les services partenaires
      </h1>
      <p>
        <em>
          Comprendre ce qui se passe dans l’application après une connexion ProConnect et comment obtenir les droits nécessaires.
        </em>
      </p>
      <h2 className="fr-h4">
        Chapitre 1 — Le service partenaire et ProConnect : deux rôles différents
      </h2>
      <h3 className="fr-h6">
        1.1. Le service auquel vous souhaitez accéder
      </h3>
      <p>
        Un service partenaire est une application qui utilise ProConnect pour authentifier les professionnels. Il peut permettre de consulter des informations, de transmettre des documents ou d'effectuer des démarches administratives.
      </p>
      <p>
        La connexion commence généralement sur le site du service, avec le bouton ProConnect. Le parcours de connexion est détaillé dans la
        <strong>
          Partie II
        </strong>
        ; la présente partie se concentre sur ce qui se passe ensuite.
      </p>
      <h3 className="fr-h6">
        1.2. Ce que le service reçoit et décide
      </h3>
      <p>
        À l'issue de l'authentification, le service partenaire peut recevoir les informations prévues pour reconnaître l'utilisateur et son contexte professionnel.
      </p>
      <p>
        Il détermine ensuite les fonctionnalités auxquelles la personne peut accéder. ProConnect ne gère ni les contenus de l'application, ni les opérations réalisées, ni ses habilitations internes.
      </p>
      <h2 className="fr-h4">
        Chapitre 2 — Être éligible à un service
      </h2>
      <h3 className="fr-h6">
        2.1. Des applications destinées à des publics différents
      </h3>
      <p>
        Un service peut être ouvert à de nombreux professionnels ou réservé à une population précise : agents d'une administration, membres de certaines organisations ou professionnels d'un secteur.
      </p>
      <p>
        Le service partenaire définit ses critères d'éligibilité. Il peut notamment tenir compte de l'organisation associée à l'utilisateur, du fournisseur d'identité utilisé ou du niveau de sécurité de l'authentification.
      </p>
      <h3 className="fr-h6">
        2.2. Pourquoi l'accès peut être refusé après une connexion réussie
      </h3>
      <p>
        L'authentification peut être parfaitement réussie alors que l'application refuse l'accès. Cela ne signifie pas nécessairement que le compte ProConnect présente une anomalie.
      </p>
      <p>
        Par exemple, le service peut être réservé à un organisme différent, demander un niveau de sécurité plus élevé ou exiger une habilitation individuelle.
      </p>
      <p>
        <strong>
          À retenir :
        </strong>
        la
        <strong>
          Partie IV
        </strong>
        explique le rattachement à une organisation ; la
        <strong>
          Partie VI
        </strong>
        explique les garanties et les niveaux de confiance. Ici, la question est de savoir si le service accepte ce profil.
      </p>
      <h2 className="fr-h4">
        Chapitre 3 — Comprendre les habilitations dans l'application
      </h2>
      <h3 className="fr-h6">
        3.1. Les droits sont propres à chaque service
      </h3>
      <p>
        Deux personnes d'une même organisation peuvent avoir des autorisations différentes dans une application. L'une peut consulter des données, tandis que l'autre peut les modifier ou valider une démarche.
      </p>
      <p>
        Certains services utilisent des rôles comme lecteur, contributeur, gestionnaire ou administrateur. Ces rôles sont définis par l'application : ils ne correspondent pas à des rôles généraux attribués par ProConnect.
      </p>
      <h3 className="fr-h6">
        3.2. Demander des droits supplémentaires
      </h3>
      <p>
        Pour obtenir une habilitation, l'utilisateur doit suivre la procédure du service partenaire. Selon l'application, il peut s'adresser à un administrateur, à un responsable métier ou au support du service.
      </p>
      <p>
        Le support ProConnect ne peut pas attribuer directement des droits dans une application tierce.
      </p>
      <h3 className="fr-h6">
        3.3. Agir pour le compte d'un tiers
      </h3>
      <p>
        Un prestataire ou un salarié peut être autorisé à accomplir une démarche pour une organisation sans en être le dirigeant. Cette autorisation doit être prévue par le service concerné.
      </p>
      <p>
        Elle ne doit pas être confondue avec le rattachement professionnel géré dans ProConnect Identité.
      </p>
      <h2 className="fr-h4">
        Chapitre 4 — Utiliser le bon contexte professionnel
      </h2>
      <h3 className="fr-h6">
        4.1. Plusieurs organisations, plusieurs contextes
      </h3>
      <p>
        Une personne peut exercer pour plusieurs structures. Si son compte permet plusieurs rattachements, il faut veiller à utiliser l'organisation correspondant à la démarche.
      </p>
      <p>
        Les modalités de sélection dépendent du parcours et du service partenaire. Il ne faut pas supposer que les droits sont identiques d'une organisation à l'autre.
      </p>
      <h3 className="fr-h6">
        4.2. Quand l'organisation attendue n'apparaît pas
      </h3>
      <p>
        Si le rattachement PCI est absent ou incorrect, les explications figurent dans la
        <strong>
          Partie IV
        </strong>
        . Si l'organisation est correcte mais que l'application la refuse, il faut consulter les critères d'accès du service partenaire.
      </p>
      <h2 className="fr-h4">
        Chapitre 5 — Comprendre une difficulté dans le service
      </h2>
      <h3 className="fr-h6">
        5.1. Le blocage survient avant le retour à l'application
      </h3>
      <p>
        Une difficulté sur la page du fournisseur d'identité concerne généralement le compte ou sa méthode d'authentification. Une erreur pendant la redirection ProConnect peut relever du parcours fédéré.
      </p>
      <p>
        Les étapes de connexion sont expliquées dans la
        <strong>
          Partie II
        </strong>
        , et la récupération des méthodes de sécurité dans la
        <strong>
          Partie V
        </strong>
        .
      </p>
      <h3 className="fr-h6">
        5.2. Le blocage survient après le retour à l'application
      </h3>
      <p>
        Si la connexion réussit mais que le service affiche « accès refusé », ne reconnaît pas l'organisation ou ne propose pas les fonctionnalités attendues, il peut s'agir d'une restriction d'accès ou d'une habilitation manquante.
      </p>
      <p>
        Il faut alors consulter les conditions du service et contacter son assistance. Si le problème est lié à un rattachement PCI erroné, l'assistance ProConnect peut être concernée.
      </p>
      <h3 className="fr-h6">
        5.3. Reconnexion et expiration de session
      </h3>
      <p>
        Un service peut demander une nouvelle authentification lorsque sa session expire ou lorsqu'une opération exige une vérification récente. Les sessions du service et du fournisseur d'identité sont distinctes ; voir la
        <strong>
          Partie II
        </strong>
        .
      </p>
      <p>
        Sur un ordinateur partagé, utilisez la déconnexion proposée par le service. Fermer un onglet ne garantit pas la fermeture de toutes les sessions.
      </p>
      <h2 className="fr-h4">
        Chapitre 6 — Ce qu'il faut retenir
      </h2>
      <p>
        ProConnect permet de s'authentifier ; le service partenaire décide de l'éligibilité, des rôles et des habilitations. Une connexion réussie ne donne pas automatiquement accès à toutes les fonctionnalités.
      </p>
      <p>
        En cas de difficulté, le moment où survient le blocage aide à déterminer le bon interlocuteur. La
        <strong>
          Partie VIII
        </strong>
        présente un guide pratique pour trouver de l'aide.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/">
          Centre d'aide ProConnect
        </a>
      </p>
      <hr />
      </article>
    </DocumentationLayout>
  );
}
