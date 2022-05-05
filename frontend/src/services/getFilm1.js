import getOneMovie from "./getOneMovie";
import getRandomMovie from "./getRandomMovie";

const getFilm1 = () => {
  const maDate = new Date();
  let film1 = [];
  if (maDate.toLocaleDateString("fr").slice(0, 5) === "04/05") {
    film1 = getOneMovie([
      1892, 1891, 11, 140607, 181808, 181812, 1893, 1895, 1894,
    ]);
  } else {
    film1 = getRandomMovie();
  }
  return film1;
};

export default getFilm1;
