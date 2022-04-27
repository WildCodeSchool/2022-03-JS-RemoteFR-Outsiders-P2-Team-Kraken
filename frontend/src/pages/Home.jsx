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

  // INFO : Don't remove this comment please
  const [pseudo, setPseudo] = React.useState("");
  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  return (
    <div className="screen">
      <TitleBar title={titleMain} />
      <div className="game_content" style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/configuration"
            element={<Configuration
              pseudo={pseudo}
              handlePseudoChange={handlePseudoChange}
            />} />
          <Route path="/game/two-movies"
            element={<TwoMovies updateTitleMain={updateTitleMain}
              titleMain={titleMain} />} />
          <Route path="/game/five-movies" element={<Dnd />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
