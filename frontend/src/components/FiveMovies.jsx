import React, { useContext } from "react";
import { DndProvider } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./ContainerFiveMovies";
import getRandomMovie from "../services/getRandomMovie";
import getFilm1 from "../services/getFilm1";
import { QuestionContext } from "../contexts/QuestionContext";

function Dnd({ updateTitleMain, score, updateScore }) {
  const navigate = useNavigate();
  const { nbQuestion } = useContext(QuestionContext);

  React.useEffect(() => {
    if (nbQuestion >= 5) {
      navigate("/ScoreScreen");
    }
  }, []);

  const film1 = getFilm1();
  const film2 = getRandomMovie();
  const film3 = getRandomMovie();
  const film4 = getRandomMovie();
  const film5 = getRandomMovie();

  return (
    <div className="Dnd">
      <DndProvider backend={HTML5Backend}>
        <Container
          updateTitleMain={updateTitleMain}
          film1={film1}
          film2={film2}
          film3={film3}
          film4={film4}
          film5={film5}
          score={score}
          updateScore={updateScore}
        />
      </DndProvider>
    </div>
  );
}

export default Dnd;
