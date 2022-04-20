import React from "react";
import {
  faQuestionCircle,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel";

import "../App.css";

function HomeContent() {
  return (
    <div>
      <Carousel />
      <div className="container_button">
        <div className="try">
          <FontAwesomeIcon className="sound_icon" icon={faVolumeMute} />
          <button type="button" className="play_button">
            JOUER
          </button>
          <FontAwesomeIcon className="help_icon" icon={faQuestionCircle} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
