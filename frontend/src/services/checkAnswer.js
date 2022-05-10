import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TimerContext } from "../contexts/TimerContext";
import { ScoreContext } from "../contexts/scoreContext";
import goodFx from "./goodFx";
import wrongFx from "./wrongFx";
import { SoundContext } from "../contexts/SoundContext";
import modificationPoints from "./modificationPoints";

const checkAnswer = (idFilm1, idFilm2, idClicked, type, topic) => {
  const { mute } = useContext(SoundContext);
  const navigate = useNavigate();
  const { score, setScore } = useContext(ScoreContext);
  const { timer } = useContext(TimerContext);
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";

  const [film1, setFilm1] = React.useState({});
  const [film2, setFilm2] = React.useState({});
  const [twoFilmReady, setTwoFilmReady] = React.useState(false);
  const urlFilm1 = `https://api.themoviedb.org/3/movie/${idFilm1}?api_key=${apiKey}&language=fr-FR`;
  const urlFilm2 = `https://api.themoviedb.org/3/movie/${idFilm2}?api_key=${apiKey}&language=fr-FR`;

  const [firstLoadingFilm1, setFirstLoadingScoreFilm1] = React.useState(true);

  React.useEffect(() => {
    if (!firstLoadingFilm1) {
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
    } else {
      setFirstLoadingScoreFilm1(false);
    }
  }, [idClicked]);

  const [firstLoadingFilm2, setFirstLoadingScoreFilm2] = React.useState(true);
  React.useEffect(() => {
    if (!firstLoadingFilm2) {
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
    } else {
      setFirstLoadingScoreFilm2(false);
    }
  }, [idClicked]);

  React.useEffect(() => {
    if (typeof film1 === "number" && typeof film2 === "number") {
      setTwoFilmReady(true);
    } else {
      setTwoFilmReady(false);
    }
  }, [film1, film2]);

  const [firstLoadingScore, setFirstLoadingScore] = React.useState(true);
  React.useEffect(() => {
    if (firstLoadingScore) {
      setFirstLoadingScore(false);
    } else {
      switch (true) {
        case type === "MAX" &&
          film1 >= film2 &&
          parseInt(idClicked, 10) === idFilm1:
          console.warn(`1 - ${film1} - ${film2}`);
          setScore(score + modificationPoints(1000, 2, timer));
          goodFx(mute);
          navigate("/game/five-movies");
          break;
        case type === "MAX" &&
          film1 <= film2 &&
          parseInt(idClicked, 10) === idFilm2:
          console.warn(`2 - ${film1} - ${film2}`);
          setScore(score + modificationPoints(1000, 2, timer));
          goodFx(mute);
          navigate("/game/five-movies");
          break;
        case type === "MIN" &&
          film1 <= film2 &&
          parseInt(idClicked, 10) === idFilm1:
          console.warn(`3 - ${film1} - ${film2}`);
          setScore(score + modificationPoints(1000, 2, timer));
          goodFx(mute);

          navigate("/game/five-movies");
          break;
        case type === "MIN" &&
          film1 >= film2 &&
          parseInt(idClicked, 10) === idFilm2:
          console.warn(`4 - ${film1} - ${film2}`);
          setScore(score + modificationPoints(1000, 2, timer));
          goodFx(mute);
          navigate("/game/five-movies");

          break;
        default:
          wrongFx(mute);
          console.warn(5);
          navigate("/game/five-movies");
      }
    }
  }, [twoFilmReady]);
};

export default checkAnswer;
