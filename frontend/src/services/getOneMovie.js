import React from "react";
import axios from "axios";

// getOneMovie est une fonction qui s'appelle dans une page uniquement.
// elle a la même architecture que getRandomMovie mais renvoi un film
// avec un id donné

const getRandomMovie = (arrayId) => {
  const [isMovieValid, setisMovieValid] = React.useState(0);
  const [movieConfirmed, setMovieConfirmed] = React.useState([]);

  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";
  React.useEffect(() => {
    const theMovie = arrayId[Math.round(Math.random() * (arrayId.length - 1))];
    const urlTheMovie = `https://api.themoviedb.org/3/movie/${theMovie}?api_key=${apiKey}&language=fr-FR`;

    axios
      .get(urlTheMovie)
      .then((response) => {
        if (response.status === 404) {
          console.warn("erreur 404 détectée");
        } else if (response.status === 504) {
          console.warn("erreur 504 détectée");
        }
        return response.data;
      })
      .then((data) => {
        const isDocumentary = data.genres.find((movie) => movie.id === 99);
        if (
          data.budget !== 0 &&
          data.poster_path !== "" &&
          data.revenue !== 0 &&
          data.runtime > 75 &&
          !isDocumentary
        ) {
          const tempArray = [];
          tempArray.push(
            data.id,
            data.title,
            `https://image.tmdb.org/t/p/w780${data.poster_path}`
          );
          setMovieConfirmed(tempArray);
        } else {
          setisMovieValid(isMovieValid + 1);
        }
      })
      .catch((error) => {
        // handle error
        console.warn(error);
      });
  }, []);

  return movieConfirmed;
};

export default getRandomMovie;
