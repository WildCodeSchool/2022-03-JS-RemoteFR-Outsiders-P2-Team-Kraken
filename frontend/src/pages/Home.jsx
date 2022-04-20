import React from "react";
import "../App.css";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="screen">
      <div className="title_bar">
        <h1>MOVIZZ</h1>
        <Carousel />
        <div className="container_button">
          <button type="button" className="play_button">
            JOUER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
