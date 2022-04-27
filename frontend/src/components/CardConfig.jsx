import React from "react";
import { Link } from "react-router-dom";

function CardConfig({ title, explication, ready }) {
  return (
    <div className="CardConfig">
      <div className="CardConfig__side CardConfig__side--front">
        <h4>{title}</h4>
      </div>
      <div className="CardConfig__side CardConfig__side--back">
        <div className="CardConfig__cta">
          <div>
            <p>{explication}</p>
            {ready ?
              <Link to="/game/two-movies">
                <button type="button" className="select_button">
                  Sélectionner
                </button>
              </Link>
              : <button type="button" className="select_button">
                Non disponible
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConfig;
