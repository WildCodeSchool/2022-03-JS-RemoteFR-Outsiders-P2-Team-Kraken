import React from "react";
// import HomeContent from "../components/HomeContent";
// import Configuration from "../components/Configuration";
import TitleBar from "../components/TitleBar";
// import TwoMovies from "../components/TwoMovies";
import Dnd from "./5-films";

import "../App.css";

function Home() {
  const [titleMain, setTitleMain] = React.useState(["MOVIZZ", "main"]);
  const updateTitleMain = (newTitle) => {
    setTitleMain(newTitle);
  };

  /* const [pseudo, setPseudo] = React.useState("");
  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  }; */

  const [score, setScore] = React.useState(0);
  const updateScore = (points) => {
    const newScore = score + points;
    setScore(newScore);
  };

  return (
    <div className="screen">
      <TitleBar title={titleMain} score={score} />
      <div className="game_content" style={{ width: "100%" }}>
        {/* <HomeContent />
         <Configuration
          pseudo={pseudo}
          handlePseudoChange={handlePseudoChange}
        /> */}
        <Dnd
          updateTitleMain={updateTitleMain}
          titleMain={titleMain}
          score={score}
          updateScore={updateScore}
        />
        {/* <TwoMovies
          updateTitleMain={updateTitleMain}
          titleMain={titleMain}
          score={score}
          updateScore={updateScore}
      /> */}
      </div>
    </div>
  );
}

export default Home;
