import React from "react";
import getRandomMovie from "../services/getRandomMovie";
import getRandomQuestion from "../services/getRandomQuestion";
import Affiche from "./Affiche";
import checkAnwser from "../services/checkAnswer";
import chrono from "../services/chrono";

function TwoMovies({ updateTitleMain, score, updateScore }) {
  const [idClicked, setIdClicked] = React.useState(0);
  const [question, setQuestion] = React.useState({});

  const film1 = getRandomMovie();
  const film2 = getRandomMovie();

  chrono(true);

  React.useEffect(() => {
    setQuestion(getRandomQuestion(2));
  }, []);

  React.useEffect(() => {
    updateTitleMain([question.question, "question2"]);
  }, [question]);

  checkAnwser(
    film1[0],
    film2[0],
    idClicked,
    question.type,
    question.topic,
    score,
    updateScore
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "1rem 0 ",
      }}
    >
      <Affiche
        id={film1[0]}
        titre={film1[1]}
        affiche={film1[2]}
        idClicked={idClicked}
        setIdClicked={setIdClicked}
      />
      <Affiche
        id={film2[0]}
        titre={film2[1]}
        affiche={film2[2]}
        idClicked={idClicked}
        setIdClicked={setIdClicked}
      />
    </div>
  );
}
export default TwoMovies;
