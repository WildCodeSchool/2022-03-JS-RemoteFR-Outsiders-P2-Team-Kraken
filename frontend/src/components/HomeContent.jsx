import React from "react";
import Carousel from "./Carousel";

function HomeContent() {
  return (
    <div>
      <Carousel />
      <div className="container_button">
        <button type="button" className="play_button">
          JOUER
        </button>
      </div>
    </div>
  );
}

export default HomeContent;
