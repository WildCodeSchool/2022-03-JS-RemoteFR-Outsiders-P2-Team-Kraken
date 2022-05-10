import React from "react";

function Affiche({ id, titre, affiche, setIdClicked }) {
  const handleChooseOneFilm = (e) => {
    setIdClicked(e.target.value);
  };

  const [isDisplay, setisDisplay] = React.useState("display-none");
  const [isBtnLoading, setisBtnLoading] = React.useState("display-block");
  React.useEffect(() => {
    if (typeof titre === "string") {
      setisDisplay("display-block");
      setisBtnLoading("display-none");
    }
  }, [titre]);

  return (
    <div className="CardConfig">
      <div className="CardConfig__Affiche CardConfig__side CardConfig__side--front">
        <img src={affiche} alt={`affiche du film ${titre}`} />
      </div>
      <div className="CardConfig__side CardConfig__side--back">
        <div className="CardConfig__cta">
          <div>
            <h4>{titre}</h4>
            <div>
              <button
                type="button"
                value={id}
                className={`select_button ${isDisplay}`}
                onClick={(e) => handleChooseOneFilm(e)}
              >
                Sélectionner
              </button>
              <button
                type="button"
                value={id}
                className={`select_button ${isBtnLoading}`}
              >
                Chargement...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiche;
