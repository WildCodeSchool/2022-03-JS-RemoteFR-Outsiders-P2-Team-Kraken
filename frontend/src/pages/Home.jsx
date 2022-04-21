import React from "react";
import "../App.css";
import Configuration from "./Configuration";

function Home({ pseudo, handlePseudoChange }) {
  return (
    <div className="screen">
      <div className="title_bar">
        <h1>MOVIZZ</h1>
      </div>
      <div className="game_content" style={{ width: "100%" }}>
        <Configuration
          pseudo={pseudo}
          handlePseudoChange={handlePseudoChange}
        />
      </div>
    </div>
  );
}

export default Home;
