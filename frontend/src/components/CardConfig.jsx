import React, { useContext } from "react";
import { SoundContext } from "../contexts/SoundContext";
import hoverAff from "../services/hoverAff";

function CardConfig({ title, explication, ready, handleClickSubmit }) {
  const { mute } = useContext(SoundContext);
  return (
    <div className="CardConfig" onMouseEnter={() => hoverAff(mute)}>
      <div className="CardConfig__side CardConfig__side--front">
        <h4>{title}</h4>
      </div>
      <div className="CardConfig__side CardConfig__side--back">
        <div className="CardConfig__cta">
          <div>
            <p>{explication}</p>
            {ready ? (
              <button
                type="submit"
                className="select_button"
                onClick={(e) => handleClickSubmit(e)}
              >
                Sélectionner
              </button>
            ) : (
              <button type="button" className="select_button">
                Non disponible
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConfig;
