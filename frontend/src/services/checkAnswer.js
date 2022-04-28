import React from "react";
import axios from "axios";

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

  React.useEffect(() => {
    axios
      .get(urlFilm1)
      .then((response) => {
        if (response.status === 404) {
          console.warn("erreur 404 détectée");
        } else if (response.status === 504) {
          console.warn("erreur 504 détectée");
        }
        return response.data;
      })
      .then((data) => {
        if (topic === "profitability") {
          setFilm1(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
        } else if (topic === "release_date") {
          const date = parseInt(data.release_date.slice(0, 4), 10);
          setFilm1(date);
        } else {
          setFilm1(parseInt(data[topic], 10));
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
  }, [idClicked]);

  React.useEffect(() => {
    axios
      .get(urlFilm2)
      .then((response) => {
        if (response.status === 404) {
          console.warn("erreur 404 détectée");
        } else if (response.status === 504) {
          console.warn("erreur 504 détectée");
        }
        return response.data;
      })
      .then((data) => {
        if (topic === "profitability") {
          setFilm2(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
        } else if (topic === "release_date") {
          const date = parseInt(data.release_date.slice(0, 4), 10);
          setFilm2(date);
        } else {
          setFilm2(parseInt(data[topic], 10));
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
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
