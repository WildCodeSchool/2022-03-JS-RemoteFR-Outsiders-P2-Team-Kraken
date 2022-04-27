import React from "react";
import HomeContent from "../components/HomeContent";
import Configuration from "../components/Configuration";
import TitleBar from "../components/TitleBar";
import TwoMovies from "../components/TwoMovies";
import Dnd from "./5-films";

import "../App.css";

function Home() {
  const [titleMain, setTitleMain] = React.useState(["MOVIZZ", "main"]);
  const updateTitleMain = (newTitle) => {
    setTitleMain(newTitle);
  };

  // INFO : Don't remove this comment please
  const [pseudo, setPseudo] = React.useState("");
  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  return (
    <div className="screen">
      <TitleBar title={titleMain} />
      <div className="game_content" style={{ width: "100%" }}>
        <HomeContent />
        <Configuration
          pseudo={pseudo}
          handlePseudoChange={handlePseudoChange}
        />
        <Dnd />
        <TwoMovies updateTitleMain={updateTitleMain} titleMain={titleMain} />
      </div>
    </div>
  );
}

export default Home;
