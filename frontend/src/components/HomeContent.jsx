import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faQuestionCircle,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel";
import "../App.css";
import Abdallah from "../assets/Abdallah_MESBAHI.jpg";
import Audren from "../assets/Audren_FLOCH.jpg";
import Kevin from "../assets/Kevin_PESET.jpg";
import Sebastien from "../assets/Sébastien_PUIGRENIER.jpg";

function HomeContent() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Carousel />
      <div className="container_button">
        <div className="try">
          <button type="button" className="btn-sound">
            <FontAwesomeIcon className="sound_icon" icon={faVolumeMute} />
          </button>
          <Link to="/configuration">
            <button type="button" className="play_button">
              JOUER
            </button>
          </Link>
          <button type="button" onClick={toggleModal} className="btn-modal">
            <FontAwesomeIcon className="sound_icon" icon={faQuestionCircle} />
          </button>
          {modal && (
            <div className="modal">
              <div
                aria-hidden="true"
                onClick={toggleModal}
                className="overlay"
              />
              <div className="modal-content">
                <div className="rules">
                  <h2>Règles du jeu</h2>
                  <p>
                    Movizz est un jeu sur navigateur qui te permet de répondre à
                    une série de questions concernant le cinéma.
                  </p>
                  <p>Nous te soumettons deux formats de question :</p>
                  <ul>
                    <li>
                      Le duel : Tu vas devoir choisir la bonne réponse parmi un
                      choix de deux films
                    </li>
                    <li>
                      La frise : Tu vas devoir classer les films dans
                      l&apos;ordre selon la question
                    </li>
                  </ul>
                  <p>Plus tu vas vite, et plus tu marques de points !</p>
                </div>

                <h2>L&apos;équipe</h2>
                <div className="dev-team">
                  <figure>
                    <img src={Abdallah} alt="Abdallah" />
                    <figcaption>Abdallah</figcaption>
                  </figure>
                  <figure>
                    <img src={Audren} alt="Audren" />
                    <figcaption>Audren</figcaption>
                  </figure>
                  <figure>
                    <img src={Kevin} alt="Kevin" />
                    <figcaption>Kevin</figcaption>
                  </figure>
                  <figure>
                    <img src={Sebastien} alt="Sebastien" />
                    <figcaption>Sebastien</figcaption>
                  </figure>
                </div>

                <div className="exit-modal">
                  <button
                    type="button"
                    className="exit-btn"
                    onClick={toggleModal}
                  >
                    ACCUEIL
                  </button>{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
