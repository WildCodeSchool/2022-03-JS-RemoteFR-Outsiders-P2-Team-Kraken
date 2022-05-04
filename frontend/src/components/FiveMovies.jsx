import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./ContainerFiveMovies";
import getRandomMovie from "../services/getRandomMovie";
import getFilm1 from "../services/getFilm1";

function Dnd({ updateTitleMain, score, updateScore }) {
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
