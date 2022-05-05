import React from "react";
import { useNavigate } from "react-router-dom";
import CardConfig from "./CardConfig";

function Configuration({ pseudo, handlePseudoChange }) {
  const explicationClassique = `
          Dans ce mode de jeu, vous jouez avec les paramètres standard.
           Vous pourrez ainsi comparer votre score avec les autres participants !`;
  const explicationPersonnalise = `
          Dans ce mode de jeu, personnalisez les types de questions, 
          les thèmes et les années des films 
          pour vous perfectionner ou pour encore plus de challenge !`;

  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (pseudo !== "") {
      navigate("/game/two-movies");
    } else {
      toggleModal();
    }
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
              required
              onChange={handlePseudoChange}
            />
          </h2>
        </label>
        <div style={{ textAlign: "center", margin: "1rem 0 " }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1rem 0 ",
            }}
          >
            <CardConfig
              type="texte"
              title={`Mode de jeu
              Classique`}
              explication={explicationClassique}
              ready
              handleClickSubmit={handleClickSubmit}
            />
            <CardConfig
              type="texte"
              title={`Mode de jeu
              Personnalisé`}
              explication={explicationPersonnalise}
              ready={false}
              handleClickSubmit={handleClickSubmit}
            />
          </div>
        </div>
      </form>
      {modal && (
        <div className="modal_pseudo">
          <div aria-hidden="true" onClick={toggleModal} className="overlay" />
          <div className="modal-content_pseudo">
            <div className="rules">
              <h2>Pseudo requis pour jouer !</h2>
            </div>
            <div className="exit-modal">
              <button type="button" className="exit-btn" onClick={toggleModal}>
                RETOUR
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Configuration;
