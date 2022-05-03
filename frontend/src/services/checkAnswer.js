import React from "react";
import getMovieInfo from "./getMovieInfo";

const checkAnswer = (
  idFilm1,
  idFilm2,
  idClicked,
  type,
  topic,
  score,
  updateScore
) => {
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";

  const [film1, setFilm1] = React.useState({});
  const [film2, setFilm2] = React.useState({});
  const [twoFilmReady, setTwoFilmReady] = React.useState(false);
  const urlFilm1 = `https://api.themoviedb.org/3/movie/${idFilm1}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm2 = `https://api.themoviedb.org/3/movie/${idFilm2}?api_key=${apiKey}&language=fr-FR`;

  const isInitialMount = React.useRef(true);
  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setFilm1(getMovieInfo(urlFilm1, topic));
      setFilm2(getMovieInfo(urlFilm2, topic));
    }
  }, [idClicked]);

  React.useEffect(() => {
    if (typeof film1 === "number" && typeof film2 === "number") {
      setTwoFilmReady(true);
    } else {
      setTwoFilmReady(false);
    }
  }, [film1, film2]);

  React.useEffect(() => {
    switch (true) {
      case type === "MAX" &&
        film1 >= film2 &&
        parseInt(idClicked, 10) === idFilm1:
        updateScore(1000);
        break;
      case type === "MAX" &&
        film1 <= film2 &&
        parseInt(idClicked, 10) === idFilm2:
        updateScore(1000);
        break;
      case type === "MIN" &&
        film1 <= film2 &&
        parseInt(idClicked, 10) === idFilm1:
        updateScore(1000);
        break;
      case type === "MIN" &&
        film1 >= film2 &&
        parseInt(idClicked, 10) === idFilm2:
        updateScore(1000);

        break;
      default:
    }
  }, [twoFilmReady]);
};

export default checkAnswer;
