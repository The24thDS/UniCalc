import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchSemesterByIdOrName } from "../../firebase/firebase.utils";
import styles from "./Landing.module.css";

const Landing = () => {
  const [state, setState] = useState({
    searchTerm: "",
    results: "Rezultatele vor apărea aici"
  });

  const search = e => {
    e.preventDefault();
    if (state.searchTerm !== "" && state.searchTerm) {
      searchSemesterByIdOrName(state.searchTerm.trim()).then(results => {
        if (results.length === 0) {
          setState({ ...state, results: "Niciun rezultat" });
        } else {
          setState({ ...state, results });
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.new}>
        <h1>Creează un semestru nou cu disciplinele tale</h1>
        <span>Pași de urmat pentru crearea unui semestru:</span>
        <ol>
          <li>Alege un nume potrivit pentru semestrul tău</li>
          <li>Adaugă numele disciplinelor și numărul de credite aferent</li>
          <li>
            Apasă butonul <i>Creează</i> și vei fi redirecționat spre pagina de
            calcul
          </li>
        </ol>
        <span>
          Oricine poate folosi link-ul din bara de adresă pentru a accesa
          oricând acest semestru. Trimite-l colegilor pentru a-și calcula media.
          It was never this easy
        </span>
        <span>Accesează pagina de creare folosind meniul sau acest buton</span>
        <Link to="/new">Spre pagina de creare</Link>
      </div>
      <div className={styles.search}>
        <h1>Caută un semestru după nume sau id</h1>
        <form onSubmit={search}>
          <input
            type="text"
            name="searchTerm"
            value={state.searchTerm}
            placeholder="nume sau id semestru"
            onChange={({ target }) =>
              setState({ ...state, searchTerm: target.value })
            }
          />
          <input type="submit" value="🔎" />
        </form>
        <div className={styles.results}>
          {typeof state.results === "string"
            ? state.results
            : state.results.map(result => (
                <Link to={"semester/" + result.id} className={styles.result}>
                  <span>{result.id}</span> | <span>{result.name}</span>
                </Link>
              ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
