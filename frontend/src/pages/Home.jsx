import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import Configuration from "../components/Configuration";
import TitleBar from "../components/TitleBar";
import TwoMovies from "../components/TwoMovies";
import Dnd from "../components/FiveMovies";
import { ScoreContextProvider } from "../contexts/scoreContext";
import { TimerContextProvider } from "../contexts/TimerContext";
import { Timer5ContextProvider } from "../contexts/Timer5Context";
import ScoreScreen from "../components/ScoreScreen";
import { QuestionContextProvider } from "../contexts/QuestionContext";
import { SoundContextProvider } from "../contexts/SoundContext";
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
      <SoundContextProvider>
        <ScoreContextProvider>
          <Timer5ContextProvider>
            <TimerContextProvider>
              <div className="screen">
                <TitleBar title={titleMain} />
                <div className="game_content" style={{ width: "100%" }}>
                  <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route
                      path="/ScoreScreen"
                      element={
                        <ScoreScreen
                          updateTitleMain={updateTitleMain}
                          pseudo={pseudo}
                        />
                      }
                    />
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
                        <Dnd
                          updateTitleMain={updateTitleMain}
                          titleMain={titleMain}
                        />
                      }
                    />
                  </Routes>
                </div>
              </div>
            </TimerContextProvider>
          </Timer5ContextProvider>
        </ScoreContextProvider>
      </SoundContextProvider>
    </QuestionContextProvider>
  );
}

export default Home;
