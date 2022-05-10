import React, { useContext } from "react";
import hoverAff from "../services/hoverAff";
import { SoundContext } from "../contexts/SoundContext";

function Affiche({ id, titre, affiche, setIdClicked }) {
  const { mute } = useContext(SoundContext);
  const handleChooseOneFilm = (e) => {
    setIdClicked(e.target.value);
  };

  return (
    <div className="CardConfig">
      <div
        className="CardConfig__Affiche CardConfig__side CardConfig__side--front"
        onMouseEnter={() => hoverAff(mute)}
      >
        <img src={affiche} alt={`affiche du film ${titre}`} />
      </div>
      <div className="CardConfig__side CardConfig__side--back">
        <div className="CardConfig__cta">
          <div>
            <h4>{titre}</h4>
            <button
              type="button"
              value={id}
              className="select_button"
              onClick={(e) => handleChooseOneFilm(e)}
            >
              Sélectionner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiche;
