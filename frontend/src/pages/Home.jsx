import React from "react";
import HomeContent from "../components/HomeContent";
import Configuration from "./Configuration";
import "../App.css";

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
        <HomeContent />
    </div>
  );
}

export default Home;
