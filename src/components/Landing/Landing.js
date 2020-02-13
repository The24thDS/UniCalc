import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
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
        <form>
          <input
            type="text"
            name="searchTerm"
            placeholder="nume sau id semestru"
          />
          <input type="submit" value="🔎" />
        </form>
        <div className={styles.results}>Rezultatele vor apărea aici</div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
