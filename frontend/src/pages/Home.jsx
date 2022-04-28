import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import Configuration from "../components/Configuration";
import TitleBar from "../components/TitleBar";
import TwoMovies from "../components/TwoMovies";
import Dnd from "../components/5-films";
import "../App.css";

function Home() {
  const [titleMain, setTitleMain] = React.useState(["MOVIZZ", "main"]);
  const updateTitleMain = (newTitle) => {
    setTitleMain(newTitle);
  };

  const [pseudo, setPseudo] = React.useState("");
  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const [score, setScore] = React.useState(0);
  const updateScore = (points) => {
    const newScore = score + points;
    setScore(newScore);
  };

  return (
    <div className="screen">
      <TitleBar title={titleMain} score={score} />
      <div className="game_content" style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route
            path="/configuration"
            element={
              <Configuration
                pseudo={pseudo}
                handlePseudoChange={handlePseudoChange}
              />
            }
          />
          <Route
            path="/game/two-movies"
            element={
              <TwoMovies
                updateTitleMain={updateTitleMain}
                titleMain={titleMain}
                updateScore={updateScore}
                score={score}
              />
            }
          />
          <Route
            path="/game/five-movies"
            element={
              <Dnd
                updateTitleMain={updateTitleMain}
                titleMain={titleMain}
                updateScore={updateScore}
                score={score}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
