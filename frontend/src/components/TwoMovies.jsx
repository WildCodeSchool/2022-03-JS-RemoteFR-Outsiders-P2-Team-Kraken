import React from "react";
import getOneMovie from "../services/getOneMovie";
import getRandomMovie from "../services/getRandomMovie";
import getRandomQuestion from "../services/getRandomQuestion";
import Affiche from "./Affiche";
import checkAnwser from "../services/checkAnswer";

function TwoMovies({ updateTitleMain, score, updateScore }) {
  const [idClicked, setIdClicked] = React.useState(0);
  const [question, setQuestion] = React.useState({});

  const maDate = new Date();
  let film1 = [];
  if (maDate.toLocaleDateString("fr").slice(0, 5) === "04/05") {
    film1 = getOneMovie([
      1892, 1891, 11, 140607, 181808, 181812, 1893, 1895, 1894,
    ]);
  } else {
    film1 = getRandomMovie();
  }

  const film2 = getRandomMovie();

  React.useEffect(() => {
    setQuestion(getRandomQuestion(2));
  }, []);

  React.useEffect(() => {
    updateTitleMain([question.question, "question"]);
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
