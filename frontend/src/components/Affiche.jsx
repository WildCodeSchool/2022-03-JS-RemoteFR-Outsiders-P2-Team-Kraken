import React from "react";
import { Link } from "react-router-dom";

function Affiche({ id, titre, affiche, setIdClicked }) {
  const handleChooseOneFilm = (e) => {
    setIdClicked(e.target.value);
  };

  return (
    <div className="CardConfig">
      <div className="CardConfig__Affiche CardConfig__side CardConfig__side--front">
        <img src={affiche} alt={`affiche du film ${titre}`} />
      </div>
      <div className="CardConfig__side CardConfig__side--back">
        <div className="CardConfig__cta">
          <div>
            <h4>{titre}</h4>
            <Link to="/game/five-movies">
              <button
                type="button"
                value={id}
                className="select_button"
                onClick={handleChooseOneFilm}
              >
                Selectionner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiche;
