import React from "react";


function Affiche({id, titre, affiche}) {
  return(

    <div className="CardConfig">
    <div className="CardConfig__side CardConfig__side--front"> 
      <img className="affiche_2_film" src={affiche} alt={`affiche du film ${titre}`} height="100%" />
    </div>
    <div className="CardConfig__side CardConfig__side--back">
      <div className="CardConfig__cta">
        <div>
          <p>{titre}</p>
          <button type="button" className="select_button">
            Selectionner
          </button>
        </div>
      </div>
    </div>
  </div>

  );


}

export default Affiche;
