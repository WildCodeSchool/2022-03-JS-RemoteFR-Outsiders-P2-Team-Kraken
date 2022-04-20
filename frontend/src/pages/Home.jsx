import React from "react";
import "../App.css";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <div className="screen">
      <div className="title_bar">
        <h1>MOVIZZ</h1>
      </div>

      <div className="game_content">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
