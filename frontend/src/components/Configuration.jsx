import React from "react";
import CardConfig from "./CardConfig";

function Configuration({ pseudo, handlePseudoChange }) {
  const explicationClassique = `
          Dans ce mode de jeu, vous jouez avec les paramètres standard.
           Vous pourrez ainsi comparer votre score avec les autres participants !`;
  const explicationPersonnalise = `
          Dans ce mode de jeu, personnalisez les types de questions, 
          les thèmes et les années des films 
          pour vous perfectionner ou pour encore plus de challenge !`;

  const handleClickSubmit = () => {
    /* A écrire pour passer à la page suivante */
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        style={{ margin: "2rem 0rem" }}
        action=""
        method="get"
        className="configuration_form"
      >
        <label htmlFor="pseudo">
          <h2>
            Votre pseudo :
            <input
              style={{
                fontSize: "2.5rem",
                marginLeft: "1.5rem",
                paddingLeft: "1rem",
              }}
              value={pseudo}
              type="text"
              name="pseudo"
              placeholder="Votre pseudo ici"
              id="pseudo"
              onChange={handlePseudoChange}
            />
          </h2>
        </label>
        <div style={{ textAlign: "center", margin: "1rem 0 " }}>
          <h2 style={{ alignItems: "center" }}>
            Choisissez votre mode de jeu :
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1rem 0 ",
            }}
          >
            <CardConfig
              type="texte"
              title="Classique"
              explication={explicationClassique}
              ready
              handleClickSubmit={handleClickSubmit}
            />
            <CardConfig
              type="texte"
              title="Personnalisé"
              explication={explicationPersonnalise}
              ready={false}
              handleClickSubmit={handleClickSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Configuration;
