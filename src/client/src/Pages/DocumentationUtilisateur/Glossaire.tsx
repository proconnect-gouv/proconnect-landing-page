import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentationLayout } from "./DocumentationLayout";
import { documentationParties } from "./documentationData";
import { glossaireEntrees } from "./glossaireData";

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function Glossaire() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showExamples, setShowExamples] = useState(true);

  const categories = useMemo(
    () => [...new Set(glossaireEntrees.map((entry) => entry.category))].sort((a, b) =>
      a.localeCompare(b, "fr"),
    ),
    [],
  );

  const filtered = useMemo(() => {
    const words = normalize(search.trim()).split(/\s+/).filter(Boolean);
    return glossaireEntrees.filter(
      (entry) =>
        (!category || entry.category === category) &&
        words.every((word) =>
          normalize(
            [entry.term, entry.definition, entry.example, entry.category, entry.keywords].join(" "),
          ).includes(word),
        ),
    );
  }, [search, category]);

  return (
    <DocumentationLayout>
      <h1>Glossaire ProConnect</h1>
      <p className="fr-text--lead">
        Vous découvrez ProConnect ? Retrouvez les mots et expressions de la documentation,
        expliqués simplement avec des exemples concrets.
      </p>
      <div className="fr-grid-row fr-grid-row--gutters fr-mb-3w">
        <div className="fr-col-12 fr-col-md-8">
          <div className="fr-input-group">
            <label className="fr-label" htmlFor="glossaire-recherche">Rechercher un mot ou une question</label>
            <input className="fr-input" id="glossaire-recherche" type="search"
              value={search} onChange={(event) => setSearch(event.target.value)}
              placeholder="Ex. : code perdu, SIRET, accès refusé…" />
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <div className="fr-select-group">
            <label className="fr-label" htmlFor="glossaire-categorie">Filtrer par thème</label>
            <select className="fr-select" id="glossaire-categorie" value={category}
              onChange={(event) => setCategory(event.target.value)}>
              <option value="">Tous les thèmes</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </div>
      <p aria-live="polite">
        {filtered.length} définition{filtered.length > 1 ? "s" : ""} sur {glossaireEntrees.length}
      </p>
      <div className="fr-btns-group fr-btns-group--inline-md fr-mb-4w">
        <button type="button" className="fr-btn fr-btn--secondary"
          onClick={() => setShowExamples((value) => !value)}>
          {showExamples ? "Masquer les exemples" : "Afficher les exemples"}
        </button>
        <button type="button" className="fr-btn fr-btn--tertiary-no-outline"
          onClick={() => { setSearch(""); setCategory(""); }}>
          Effacer les filtres
        </button>
      </div>
      {filtered.map((entry) => {
        const partie = documentationParties.find((item) => item.numero === entry.part);
        return (
          <section key={entry.term} className="fr-card fr-card--no-arrow fr-mb-3w">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <h2 className="fr-card__title">{entry.term}</h2>
                <p className="fr-card__desc">{entry.definition}</p>
                {showExamples && <p><strong>Exemple : </strong>{entry.example}</p>}
                <p className="fr-text--sm">Thème : {entry.category}</p>
                {partie && (
                  <p><Link className="fr-link" to={partie.path}>
                    Voir la partie {partie.numero} — {partie.titre}
                  </Link></p>
                )}
              </div>
            </div>
          </section>
        );
      })}
      {filtered.length === 0 && <p role="status">Aucun terme trouvé. Essayez un autre mot.</p>}
    </DocumentationLayout>
  );
}
