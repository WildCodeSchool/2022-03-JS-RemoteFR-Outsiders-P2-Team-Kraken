import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./ContainerFiveMovies";
import getRandomMovie from "../services/getRandomMovie";
import getOneMovie from "../services/getOneMovie";

function Dnd({ updateTitleMain, score, updateScore }) {
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