import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import Configuration from "../components/Configuration";
import TitleBar from "../components/TitleBar";
import TwoMovies from "../components/TwoMovies";
import Dnd from "../components/FiveMovies";
import ScoreScreen from "../components/ScoreScreen";
import { QuestionContextProvider } from "../contexts/QuestionContext";
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

  return (
    <QuestionContextProvider>
      <div className="screen">
        <TitleBar title={titleMain} />
        <div className="game_content" style={{ width: "100%" }}>
          <Routes>
            <Route path="/ScoreScreen" element={<ScoreScreen />} />
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
                />
              }
            />
            <Route
              path="/game/five-movies"
              element={
                <Dnd updateTitleMain={updateTitleMain} titleMain={titleMain} />
              }
            />
          </Routes>
        </div>
      </div>
    </QuestionContextProvider>
  );
}

export default Home;
