import React from "react";

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
            <button type="button" className="select_button">
              {ready ? "Selectionner" : "Non disponible"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardConfig;
