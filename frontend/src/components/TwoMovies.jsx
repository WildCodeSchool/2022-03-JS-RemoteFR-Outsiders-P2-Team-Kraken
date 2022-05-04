import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import getRandomMovie from "../services/getRandomMovie";
import getRandomQuestion from "../services/getRandomQuestion";
import getFilm1 from "../services/getFilm1";
import Affiche from "./Affiche";
import checkAnwser from "../services/checkAnswer";
import { QuestionContext } from "../contexts/QuestionContext";

function TwoMovies({ updateTitleMain, score, updateScore }) {
  const [idClicked, setIdClicked] = React.useState(0);
  const [question, setQuestion] = React.useState({});

  const film1 = getFilm1();
  const film2 = getRandomMovie();

  const navigate = useNavigate();
  const { nbQuestion, setNbQuestion } = useContext(QuestionContext);
  React.useEffect(() => {
    if (nbQuestion >= 5) {
      navigate("/ScoreScreen");
    }
    setNbQuestion(nbQuestion + 1);
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
