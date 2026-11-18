import { DocumentationLayout } from "./DocumentationLayout";

export default function VerifierIdentiteEtDroits() {
  return (
    <DocumentationLayout>
      <article>
      <p className="fr-badge fr-badge--blue-france">
        Partie 6 sur 8
      </p>
      <h1 className="fr-h2">
        Partie VI — Vérifier son identité et ses droits
      </h1>
      <p>
        <em>
          Comprendre les niveaux de confiance, les conditions permettant d'agir au nom d'une organisation.
        </em>
      </p>
      <h2 className="fr-h4">
        Chapitre 1 — Pourquoi vérifier une identité professionnelle ?
      </h2>
      <h3 className="fr-h6">
        1.1. Se connecter ne suffit pas toujours
      </h3>
      <p>
        Lorsqu'un professionnel se connecte à une application avec ProConnect, plusieurs questions peuvent se poser.
      </p>
      <p>
        Qui est cette personne ? Comment son identité a-t-elle été établie ? À quelle organisation appartient-elle ? Est-elle autorisée à réaliser la démarche demandée ?
      </p>
      <p>
        Ces questions sont différentes.
      </p>
      <p>
        Une connexion réussie permet d'identifier un utilisateur dans un contexte donné. Elle ne garantit pas automatiquement que toutes les informations déclarées ont été vérifiées ou que l'utilisateur possède les droits nécessaires.
      </p>
      <p>
        Par exemple, un salarié peut accéder à un service administratif sans être autorisé à signer une déclaration engageant juridiquement son entreprise.
      </p>
      <p>
        De même, une personne peut appartenir à une organisation sans en être le dirigeant.
      </p>
      <h3 className="fr-h6">
        1.2. Des démarches aux conséquences différentes
      </h3>
      <p>
        Tous les services partenaires ne présentent pas les mêmes risques.
      </p>
      <p>
        Consulter une information générale, déposer un document administratif ou engager une organisation dans une opération sensible ne nécessitent pas forcément les mêmes garanties.
      </p>
      <p>
        Certains services doivent donc s'assurer non seulement de l'identité du professionnel, mais aussi de sa qualité ou de son pouvoir d'action.
      </p>
      <p>
        ProConnect met à disposition des mécanismes permettant aux services partenaires de demander et de recevoir certaines garanties.
      </p>
      <h3 className="fr-h6">
        1.3. Une distinction essentielle : identité, qualité et autorisation
      </h3>
      <p>
        Il faut distinguer trois notions.
      </p>
      <p>
        <strong>
          L'identité
        </strong>
        répond à la question : « Qui êtes-vous ? »
      </p>
      <p>
        <strong>
          La qualité professionnelle
        </strong>
        répond à la question : « Quel est votre lien ou votre rôle dans cette organisation ? »
      </p>
      <p>
        <strong>
          L'autorisation
        </strong>
        répond à la question : « Que pouvez-vous faire dans ce service ? »
      </p>
      <p>
        Ces trois notions peuvent être liées, mais elles ne sont pas interchangeables.
      </p>
      <h2 className="fr-h4">
        Chapitre 2 — Les trois piliers de la confiance
      </h2>
      <h3 className="fr-h6">
        2.1. Le pilier identité
      </h3>
      <p>
        Le premier pilier concerne la fiabilité de l'identité de la personne physique.
      </p>
      <p>
        Une identité peut être simplement déclarée par l'utilisateur.
      </p>
      <p>
        Elle peut également être rapprochée d'informations provenant d'une source de confiance.
      </p>
      <p>
        Des mécanismes de vérification plus exigeants peuvent apporter des garanties supplémentaires.
      </p>
      <h3 className="fr-h6">
        2.2. Le pilier authentification
      </h3>
      <p>
        Le deuxième pilier concerne la manière dont la personne prouve qu'elle contrôle le compte utilisé.
      </p>
      <p>
        Une connexion avec un mot de passe seul n'apporte pas les mêmes garanties qu'une authentification multifacteur.
      </p>
      <p>
        De même, les différentes méthodes de MFA n'offrent pas toutes une résistance identique aux attaques.
      </p>
      <p>
        La Partie V présente les principaux mécanismes utilisés dans ProConnect.
      </p>
      <h3 className="fr-h6">
        2.3. Le pilier organisation
      </h3>
      <p>
        Le troisième pilier concerne la fiabilité du lien entre la personne et l'organisation représentée.
      </p>
      <p>
        Ce lien peut être déclaré par l'utilisateur, validé à la suite d'une modération ou certifié à partir d'une source officielle.
      </p>
      <p>
        Ces situations n'offrent pas le même degré de garantie.
      </p>
      <h3 className="fr-h6">
        2.4. Pourquoi les trois piliers sont-ils complémentaires ?
      </h3>
      <p>
        Imaginons un utilisateur dont l'identité civile a été vérifiée et qui se connecte avec une méthode d'authentification robuste.
      </p>
      <p>
        Ces garanties ne prouvent pas, à elles seules, qu'il appartient à l'entreprise qu'il a sélectionnée.
      </p>
      <p>
        Inversement, un lien professionnel correctement certifié ne compense pas nécessairement une authentification insuffisamment sécurisée.
      </p>
      <p>
        Le niveau de confiance global est donc contraint par le pilier le plus faible.
      </p>
      <p>
        Cette logique permet d'éviter qu'une garantie forte sur un seul aspect masque une faiblesse sur un autre.
      </p>
      <h2 className="fr-h4">
        Chapitre 3 — Comprendre les informations déclaratives, modérées et certifiées
      </h2>
      <h3 className="fr-h6">
        3.1. Une information déclarative
      </h3>
      <p>
        Une information est déclarative lorsqu'elle est renseignée par l'utilisateur sans vérification externe suffisante.
      </p>
      <p>
        Par exemple, une personne peut saisir son nom, son prénom ou sélectionner une organisation.
      </p>
      <p>
        La présence de cette information dans son profil ne signifie pas automatiquement qu'elle a été confirmée par une source officielle.
      </p>
      <h3 className="fr-h6">
        3.2. Une information vérifiée
      </h3>
      <p>
        Une information vérifiée a fait l'objet d'un contrôle supplémentaire.
      </p>
      <p>
        Par exemple, un parcours FranceConnect peut permettre de rapprocher l'identité civile déclarée dans PCI des informations provenant d'un fournisseur d'identité reconnu.
      </p>
      <p>
        La vérification concerne alors l'identité de la personne.
      </p>
      <p>
        Elle ne certifie pas automatiquement son statut professionnel.
      </p>
      <h3 className="fr-h6">
        3.3. Un rattachement modéré
      </h3>
      <p>
        Un rattachement modéré signifie qu'un tiers a examiné et validé le lien entre une personne et une organisation.
      </p>
      <p>
        Cette validation peut s'appuyer sur des informations publiques ou sur des éléments complémentaires adaptés à la situation.
      </p>
      <p>
        Elle constitue une garantie différente d'un rattachement simplement déclaré.
      </p>
      <p>
        Elle ne doit toutefois pas être confondue avec une vérification fondée sur une source officielle faisant autorité.
      </p>
      <h3 className="fr-h6">
        3.4. Un lien certifié
      </h3>
      <p>
        Un lien professionnel bénéficiant de garanties renforcées repose sur une source officielle ou sur un processus reconnu permettant d'établir l'appartenance à l'organisation.
      </p>
      <p>
        Par exemple, un fournisseur d'identité institutionnel peut s'appuyer sur des procédures de gestion des ressources humaines pour établir le lien entre un agent et son administration.
      </p>
      <p>
        Cette garantie dépend de la fiabilité du processus utilisé.
      </p>
      <h3 className="fr-h6">
        3.5. Pourquoi cette distinction est-elle importante ?
      </h3>
      <p>
        Un service partenaire peut avoir besoin d'un niveau de garantie particulier.
      </p>
      <p>
        Pour une démarche simple, certaines informations déclaratives ou modérées peuvent être suffisantes.
      </p>
      <p>
        Pour une démarche sensible, le service peut exiger une identité mieux vérifiée ou une certification du rôle professionnel.
      </p>
      <p>
        Il appartient au service de définir les garanties adaptées à ses besoins.
      </p>
      <h2 className="fr-h4">
        Chapitre 4 — Vérifier son identité avec FranceConnect
      </h2>
      <h3 className="fr-h6">
        4.1. Le rôle de FranceConnect dans ProConnect Identité
      </h3>
      <p>
        FranceConnect est un dispositif d'identification destiné aux particuliers.
      </p>
      <p>
        Dans certains parcours ProConnect Identité, il est utilisé pour vérifier l'identité civile d'un professionnel.
      </p>
      <p>
        Cette vérification permet de renforcer la fiabilité des informations associées au compte PCI.
      </p>
      <p>
        Elle ne transforme pas le compte professionnel en compte personnel.
      </p>
      <h3 className="fr-h6">
        4.2. Pourquoi cette vérification est-elle demandée ?
      </h3>
      <p>
        Certains comptes PCI nécessitent une vérification supplémentaire de l'identité.
      </p>
      <p>
        C'est notamment le cas de certaines entreprises individuelles et associations de moins de 50 salariés utilisant un domaine de messagerie gratuit.
      </p>
      <p>
        Le contrôle permet de confirmer l'identité de la personne physique associée au compte.
      </p>
      <p>
        Il peut être demandé lors de la connexion ou de l'accès à un service partenaire.
      </p>
      <h3 className="fr-h6">
        4.3. Comment se déroule la vérification ?
      </h3>
      <p>
        Lorsque la vérification est nécessaire, ProConnect propose de s'identifier avec FranceConnect.
      </p>
      <p>
        L'utilisateur sélectionne un fournisseur d'identité disponible dans FranceConnect, puis réalise son authentification habituelle.
      </p>
      <p>
        Une fois l'opération terminée, il revient vers ProConnect.
      </p>
      <p>
        Les informations nécessaires à la vérification peuvent alors être rapprochées de celles du compte PCI.
      </p>
      <h3 className="fr-h6">
        4.4. L'adresse électronique FranceConnect doit-elle être identique ?
      </h3>
      <p>
        Non.
      </p>
      <p>
        Le compte utilisé dans FranceConnect peut être associé à une adresse électronique différente de celle du compte PCI.
      </p>
      <p>
        La vérification porte sur l'identité civile de la personne, et non sur l'égalité des adresses électroniques.
      </p>
      <h3 className="fr-h6">
        4.5. Une vérification qui peut être renouvelée
      </h3>
      <p>
        Selon les règles actuellement documentées, cette vérification peut être demandée au plus une fois tous les trois mois pour les populations concernées.
      </p>
      <p>
        Cela explique qu'un professionnel puisse utiliser son compte pendant plusieurs semaines avant de voir réapparaître une demande FranceConnect.
      </p>
      <h3 className="fr-h6">
        4.6. Que faire si les informations d'identité sont incorrectes ?
      </h3>
      <p>
        Les informations utilisées par FranceConnect proviennent du fournisseur d'identité sélectionné.
      </p>
      <p>
        Lorsqu'elles sont incorrectes, il peut être nécessaire de les faire corriger auprès de la source concernée.
      </p>
      <p>
        Une modification libre dans le profil PCI ne permet pas nécessairement de remplacer une information officiellement vérifiée.
      </p>
      <h3 className="fr-h6">
        4.7. Que faire en cas de blocage ?
      </h3>
      <p>
        Si l'utilisateur rencontre une erreur pendant son authentification FranceConnect, il doit consulter l'assistance FranceConnect ou celle du fournisseur utilisé.
      </p>
      <p>
        Si la vérification FranceConnect réussit mais que le parcours ProConnect ne se termine pas, le support ProConnect peut être sollicité.
      </p>
      <p>
        <strong>
          Pour aller plus loin — FAQ
        </strong>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/pourquoi-dois-je-midentifier-avec-franceconnect-1ti7e34/">
          Pourquoi dois-je m'identifier avec FranceConnect ?
        </a>
      </p>
      <p>
        <a href="https://proconnect.crisp.help/fr/article/comment-modifier-mon-compte-hcuo5x/">
          Comment modifier mon compte ProConnect ?
        </a>
      </p>
      <p>
        <a href="https://aide.franceconnect.gouv.fr/">
          Consulter l'aide FranceConnect
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 5 — Comprendre les niveaux de confiance eIDAS dans ProConnect
      </h2>
      <h3 className="fr-h6">
        5.1. À quoi sert un niveau de confiance ?
      </h3>
      <p>
        Le niveau de confiance permet au service partenaire de connaître les garanties associées à l'identité et à l'authentification reçues.
      </p>
      <p>
        Dans ProConnect, cette information est notamment transmise au moyen d'un attribut technique appelé
        <code>
          acr
        </code>
        .
      </p>
      <p>
        L'utilisateur n'a généralement pas besoin de connaître cet attribut pour se connecter.
      </p>
      <p>
        Il peut toutefois en constater les conséquences lorsqu'un service exige des vérifications supplémentaires.
      </p>
      <h3 className="fr-h6">
        5.2. Une échelle propre à l'usage de ProConnect
      </h3>
      <p>
        ProConnect utilise les valeurs
        <code>
          eidas0
        </code>
        ,
        <code>
          eidas0-mfa
        </code>
        ,
        <code>
          eidas1
        </code>
        ,
        <code>
          eidas1-mfa
        </code>
        ,
        <code>
          eidas2
        </code>
        et
        <code>
          eidas3
        </code>
        .
      </p>
      <p>
        Il s'agit d'une interprétation opérationnelle des garanties inspirées du cadre eIDAS.
      </p>
      <p>
        Le règlement européen ne définit pas directement cette liste de valeurs telle qu'elle est utilisée dans ProConnect.
      </p>
      <h3 className="fr-h6">
        5.3. Les principaux niveaux
      </h3>
      <div className="fr-table">
        <table>
          <thead>
            <tr>
              <th>
                Niveau
              </th>
              <th>
                Signification simplifiée
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>
                  eidas0
                </code>
              </td>
              <td>
                Garanties limitées, notamment sur l'identité ou le lien avec l'organisation.
              </td>
            </tr>
            <tr>
              <td>
                <code>
                  eidas0-mfa
                </code>
              </td>
              <td>
                Garanties limitées sur l'identité ou l'organisation, avec une MFA de niveau faible.
              </td>
            </tr>
            <tr>
              <td>
                <code>
                  eidas1
                </code>
              </td>
              <td>
                Garanties faibles sur l'identité, authentification simple et lien professionnel au moins modéré.
              </td>
            </tr>
            <tr>
              <td>
                <code>
                  eidas1-mfa
                </code>
              </td>
              <td>
                Garanties faibles sur l'identité, avec MFA de niveau faible et lien professionnel au moins modéré.
              </td>
            </tr>
            <tr>
              <td>
                <code>
                  eidas2
                </code>
              </td>
              <td>
                Identité de niveau substantiel, MFA forte et lien professionnel vérifié selon les exigences applicables.
              </td>
            </tr>
            <tr>
              <td>
                <code>
                  eidas3
                </code>
              </td>
              <td>
                Identité de niveau élevé, MFA forte matérielle et lien professionnel vérifié selon les exigences applicables.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ces descriptions résument les trois piliers. Le niveau réellement obtenu dépend de leur combinaison.
      </p>
      <h3 className="fr-h6">
        5.4. Pourquoi une MFA forte ne suffit-elle pas à atteindre eidas2 ?
      </h3>
      <p>
        Un utilisateur peut disposer d'une excellente méthode d'authentification sans avoir une identité ou un rattachement certifié au niveau correspondant.
      </p>
      <p>
        Dans ce cas, son niveau global reste limité par les garanties les plus faibles.
      </p>
      <p>
        Il ne suffit donc pas d'ajouter une passkey pour atteindre automatiquement un niveau eIDAS supérieur.
      </p>
      <h3 className="fr-h6">
        5.5. Pourquoi un fournisseur institutionnel peut-il transmettre un niveau différent ?
      </h3>
      <p>
        Les fournisseurs institutionnels disposent de leurs propres procédures de création de comptes, de vérification d'identité et de gestion des agents.
      </p>
      <p>
        Ces procédures peuvent apporter des garanties différentes de celles proposées dans PCI.
      </p>
      <p>
        Le niveau transmis dépend également de la méthode réellement utilisée lors de la connexion.
      </p>
      <p>
        Un agent dont le lien professionnel est certifié peut donc recevoir un niveau différent selon qu'il utilise un mot de passe seul ou une authentification renforcée.
      </p>
      <h3 className="fr-h6">
        5.6. Que se passe-t-il si le niveau est insuffisant ?
      </h3>
      <p>
        Lorsqu'un service partenaire exige un niveau supérieur à celui disponible, la connexion peut être refusée ou nécessiter une authentification supplémentaire.
      </p>
      <p>
        L'utilisateur peut alors recevoir une demande de vérification ou un message indiquant que son mode de connexion ne répond pas aux exigences du service.
      </p>
      <p>
        Ce comportement ne signifie pas nécessairement que son compte est incorrect.
      </p>
      <p>
        <strong>
          Pour aller plus loin
        </strong>
      </p>
      <p>
        <a href="https://partenaires.proconnect.gouv.fr/docs/ressources/norme_eidas">
          Comprendre les niveaux de confiance eIDAS dans ProConnect
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 6 — Comprendre les droits et les habilitations
      </h2>
      <h3 className="fr-h6">
        6.1. Une identité vérifiée ne donne pas tous les droits
      </h3>
      <p>
        Un utilisateur peut disposer d'une identité vérifiée et d'un rattachement professionnel légitime sans pouvoir accéder à toutes les fonctionnalités d'un service.
      </p>
      <p>
        Le service partenaire peut réserver certaines opérations à des catégories précises d'utilisateurs.
      </p>
      <p>
        Par exemple, une application peut autoriser tous les agents d'une administration à consulter des informations, mais réserver leur modification à certains responsables.
      </p>
      <h3 className="fr-h6">
        6.2. Le rôle du fournisseur de services
      </h3>
      <p>
        Le fournisseur de services détermine les règles d'accès à son application.
      </p>
      <p>
        Il peut utiliser les informations transmises par ProConnect pour identifier les utilisateurs ou appliquer certains contrôles.
      </p>
      <p>
        Il peut également disposer de son propre système d'habilitations.
      </p>
      <h3 className="fr-h6">
        6.3. Le SIRET ne constitue pas une habilitation
      </h3>
      <p>
        Le SIRET permet d'identifier une organisation ou un établissement.
      </p>
      <p>
        Il ne prouve pas que l'utilisateur dispose de toutes les autorisations nécessaires pour agir au nom de cette structure.
      </p>
      <p>
        Un service ne doit donc pas assimiler automatiquement la présence d'un SIRET à une délégation de pouvoir.
      </p>
      <h3 className="fr-h6">
        6.4. Les personnes agissant pour le compte d'un tiers
      </h3>
      <p>
        Un salarié, un comptable ou un prestataire peut être autorisé à réaliser certaines démarches pour une organisation sans en être le dirigeant.
      </p>
      <p>
        Cette autorisation peut reposer sur une délégation, un mandat ou un mécanisme d'habilitation prévu par le service.
      </p>
      <p>
        Le service doit prévoir des modalités adaptées aux représentants autorisés.
      </p>
      <h2 className="fr-h4">
        Chapitre 7 — Comprendre les restrictions d'accès aux services
      </h2>
      <h3 className="fr-h6">
        7.1. Un service peut être réservé à une population particulière
      </h3>
      <p>
        Un fournisseur de services peut décider de réserver son application à certaines catégories de professionnels.
      </p>
      <p>
        Il peut notamment tenir compte de l'organisation, du fournisseur d'identité ou d'autres informations professionnelles disponibles.
      </p>
      <h3 className="fr-h6">
        7.2. Les restrictions selon l'organisation
      </h3>
      <p>
        Un service peut être destiné aux professionnels d'une organisation déterminée ou d'un ensemble d'établissements.
      </p>
      <p>
        Le SIRET peut contribuer à identifier ces structures.
      </p>
      <p>
        Toutefois, la fiabilité des informations d'organisation peut varier selon les fournisseurs d'identité.
      </p>
      <p>
        Le service doit donc choisir ses critères avec attention.
      </p>
      <h3 className="fr-h6">
        7.3. Les restrictions selon le fournisseur d'identité
      </h3>
      <p>
        Dans certains cas, un service peut réserver l'accès aux personnes authentifiées par un fournisseur d'identité particulier.
      </p>
      <p>
        Cette restriction peut être pertinente lorsqu'un fournisseur institutionnel correspond à une population précisément définie.
      </p>
      <p>
        Elle ne doit toutefois pas être confondue avec une habilitation individuelle.
      </p>
      <h3 className="fr-h6">
        7.4. Les informations complémentaires
      </h3>
      <p>
        Certains fournisseurs institutionnels peuvent transmettre des informations supplémentaires, par exemple une population d'appartenance ou une unité organisationnelle.
      </p>
      <p>
        Ces informations dépendent du fournisseur d'identité et ne sont pas systématiquement disponibles.
      </p>
      <p>
        Leur utilisation nécessite de connaître leur signification et leur niveau de fiabilité.
      </p>
      <h3 className="fr-h6">
        7.5. Pourquoi l'accès peut-il être refusé après une connexion réussie ?
      </h3>
      <p>
        L'utilisateur peut réussir son authentification auprès de ProConnect, puis être refusé par l'application.
      </p>
      <p>
        Cela peut notamment se produire lorsque son organisation n'est pas éligible, que son rôle ne correspond pas aux conditions d'accès ou qu'il ne dispose pas de l'habilitation nécessaire.
      </p>
      <p>
        Il ne s'agit pas nécessairement d'une erreur ProConnect.
      </p>
      <h3 className="fr-h6">
        7.6. Comprendre le message d'erreur
      </h3>
      <p>
        Un service partenaire doit, autant que possible, expliquer pourquoi l'accès est refusé.
      </p>
      <p>
        Le message doit permettre de distinguer une difficulté d'authentification d'une restriction liée au public éligible.
      </p>
      <p>
        Il doit également orienter l'utilisateur vers une solution ou un interlocuteur compétent.
      </p>
      <p>
        <strong>
          Pour aller plus loin
        </strong>
      </p>
      <p>
        <a href="https://partenaires.proconnect.gouv.fr/docs/fournisseur-service/restriction_acces">
          Comprendre les restrictions d'accès aux services partenaires
        </a>
      </p>
      <h2 className="fr-h4">
        Chapitre 8 — Comprendre les situations les plus fréquentes
      </h2>
      <h3 className="fr-h6">
        8.1. Mon identité a été vérifiée, mais mon organisation ne l'est pas
      </h3>
      <p>
        La vérification de l'identité civile et celle du rattachement professionnel sont deux opérations différentes.
      </p>
      <p>
        Il est donc possible que l'une soit terminée alors que l'autre nécessite encore des contrôles.
      </p>
      <h3 className="fr-h6">
        8.2. Mon rattachement est accepté, mais le service refuse l'accès
      </h3>
      <p>
        Un rattachement validé ne donne pas automatiquement accès à toutes les applications.
      </p>
      <p>
        Le service partenaire peut imposer des conditions supplémentaires.
      </p>
      <p>
        L'utilisateur doit alors vérifier les critères d'éligibilité et les habilitations propres au service.
      </p>
      <h3 className="fr-h6">
        8.3. Je suis salarié et je dois effectuer une démarche réservée au dirigeant
      </h3>
      <p>
        Le statut de salarié ne confère pas automatiquement les pouvoirs du dirigeant.
      </p>
      <p>
        Selon la démarche, le service peut prévoir une habilitation, un mandat ou un autre mécanisme de représentation.
      </p>
      <p>
        Il faut consulter les conditions propres à l'application.
      </p>
      <h3 className="fr-h6">
        8.4. Mon administration possède son propre fournisseur d'identité
      </h3>
      <p>
        Dans cette situation, les informations d'identité et de rattachement peuvent provenir directement du fournisseur institutionnel.
      </p>
      <p>
        Les procédures de vérification peuvent être différentes de celles de PCI.
      </p>
      <p>
        En cas d'incohérence, il peut être nécessaire de contacter le support informatique de l'administration.
      </p>
      <h3 className="fr-h6">
        8.5. Le service exige un niveau de confiance que je n'atteins pas
      </h3>
      <p>
        Une authentification supplémentaire peut parfois permettre de satisfaire l'exigence.
      </p>
      <p>
        Dans d'autres situations, le niveau dépend de vérifications d'identité ou d'organisation qui ne peuvent pas être obtenues simplement en changeant de méthode de connexion.
      </p>
      <p>
        Le service partenaire doit alors préciser les possibilités d'accès ou les parcours alternatifs disponibles.
      </p>
      <h2 className="fr-h4">
        Chapitre 9 — Ce qu'il faut retenir
      </h2>
      <p>
        ProConnect permet aux services partenaires de s'appuyer sur différentes garanties relatives à l'identité professionnelle.
      </p>
      <p>
        Ces garanties reposent sur trois piliers : l'identité de la personne, la sécurité de son authentification et la fiabilité de son lien avec l'organisation.
      </p>
      <p>
        Une information déclarée, une information vérifiée et une information certifiée ne présentent pas le même niveau de confiance.
      </p>
      <p>
        La vérification avec FranceConnect permet de renforcer l'identification civile dans certains parcours PCI.
      </p>
      <p>
        Les services partenaires restent responsables de leurs règles d'accès et de leurs habilitations.
      </p>
      <p>
        <strong>
          Dans la Partie VII
        </strong>
        , nous expliquerons comment accéder aux services partenaires, comprendre leurs conditions d'éligibilité et résoudre les difficultés rencontrées après une connexion ProConnect.
      </p>
      <hr />
      </article>
    </DocumentationLayout>
  );
}
