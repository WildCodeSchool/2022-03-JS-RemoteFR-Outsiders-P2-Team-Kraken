import React from "react";
import axios from "axios";

const checkAnswer5 = (friseFilm, question, score, updateScore, isValidated) => {
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";

  const { topic } = question;
  const { type } = question;
  const [film1, setFilm1] = React.useState({});
  const [film2, setFilm2] = React.useState({});
  const [film3, setFilm3] = React.useState({});
  const [film4, setFilm4] = React.useState({});
  const [film5, setFilm5] = React.useState({});
  const [fiveFilmReady, setFiveFilmReady] = React.useState(false);
  const urlFilm1 = `https://api.themoviedb.org/3/movie/${friseFilm[0]}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm2 = `https://api.themoviedb.org/3/movie/${friseFilm[1]}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm3 = `https://api.themoviedb.org/3/movie/${friseFilm[2]}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm4 = `https://api.themoviedb.org/3/movie/${friseFilm[3]}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm5 = `https://api.themoviedb.org/3/movie/${friseFilm[4]}?api_key=${apiKey}&language=fr-FR`;

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
  }, [isValidated]);

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
  }, [isValidated]);

  React.useEffect(() => {
    axios
      .get(urlFilm3)
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
          setFilm3(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
        } else if (topic === "release_date") {
          const date = parseInt(data.release_date.slice(0, 4), 10);
          setFilm3(date);
        } else {
          setFilm3(parseInt(data[topic], 10));
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
  }, [isValidated]);

  React.useEffect(() => {
    axios
      .get(urlFilm4)
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
          setFilm4(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
        } else if (topic === "release_date") {
          const date = parseInt(data.release_date.slice(0, 4), 10);
          setFilm4(date);
        } else {
          setFilm4(parseInt(data[topic], 10));
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
  }, [isValidated]);

  React.useEffect(() => {
    axios
      .get(urlFilm5)
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
          setFilm5(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
        } else if (topic === "release_date") {
          const date = parseInt(data.release_date.slice(0, 4), 10);
          setFilm5(date);
        } else {
          setFilm5(parseInt(data[topic], 10));
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
  }, [isValidated]);

  React.useEffect(() => {
    if (
      typeof film1 === "number" &&
      typeof film2 === "number" &&
      typeof film3 === "number" &&
      typeof film4 === "number" &&
      typeof film5 === "number"
    ) {
      setFiveFilmReady(true);
    } else {
      setFiveFilmReady(false);
    }
  }, [film1, film2, film3, film4, film5]);

  React.useEffect(() => {
    let questionPoints = 0;
    switch (true) {
      case type === "ASC":
        if (
          film5 >= film4 &&
          film5 >= film3 &&
          film5 >= film2 &&
          film5 >= film1
        ) {
          questionPoints += 1000;
        }
        if (
          film1 <= film2 &&
          film1 <= film2 &&
          film1 <= film4 &&
          film1 <= film5
        ) {
          questionPoints += 1000;
        }
        if (film1 <= film2) {
          questionPoints += 1000;
        }
        if (film2 <= film3) {
          questionPoints += 1000;
        }
        if (film3 <= film4) {
          questionPoints += 1000;
        }
        if (film4 <= film5) {
          questionPoints += 1000;
        }
        updateScore(questionPoints);
        break;
      case type === "DESC":
        if (
          film5 <= film4 &&
          film5 <= film3 &&
          film5 <= film2 &&
          film5 <= film1
        ) {
          questionPoints += 1000;
        }
        if (
          film1 >= film2 &&
          film1 >= film2 &&
          film1 >= film4 &&
          film1 >= film5
        ) {
          questionPoints += 1000;
        }
        if (film1 >= film2) {
          questionPoints += 1000;
        }
        if (film2 >= film3) {
          questionPoints += 1000;
        }
        if (film3 >= film4) {
          questionPoints += 1000;
        }
        if (film4 >= film5) {
          questionPoints += 1000;
        }
        updateScore(questionPoints);
        break;
      default:
    }
  }, [fiveFilmReady]);
};

export default checkAnswer5;