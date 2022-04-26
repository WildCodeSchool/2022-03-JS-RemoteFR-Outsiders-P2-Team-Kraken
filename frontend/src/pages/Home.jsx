import React from "react";
import "../App.css";
// import HomeContent from "../components/HomeContent";
import TwoMovies from "../components/TwoMovies";
import getRandomQuestion from "@services/getRandomQuestion";

function Home() {
  const question = getRandomQuestion(2);

  return (
    <div className="screen">
      <div className="title_bar">
        <p
        style={{
          fontSize:"3rem",
          marginTop: "2rem"}}>{question.question}</p>
      </div>

      <div className="game_content"
      style={{ width: "100%" }}>
        <TwoMovies />
      </div>
    </div>
  );
}

export default Home;