import React from "react";
import axios from "axios";

// getRandomMovie est une fonction qui s'appelle dans une page uniquement.
// L'appel à la fonction se fait via la commande getRandomMovie()
// Elle renvoi un tableau ayant la structure suivante :
//
// [
// id du film dans TMDB,
// titre en français,
// adresse de l'affiche du film en 780 de large
// ]
//
// le film renvoyé répond aux vérifications suivantes :
// Son budget est différent de 0
// Ses recettes sont différentes de 0
// le chemin vers l'affiche existe
// Sa durée est supérieure à 75 min

const getRandomMovie = () => {
  const [isMovieValid, setisMovieValid] = React.useState(0);
  const [idMovie, setidMovie] = React.useState(0);
  const [movieConfirmed, setMovieConfirmed] = React.useState([]);

  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";
  React.useEffect(() => {
    const randomPage = Math.round(Math.random() * 499) + 1;
    const randomMovie = Math.round(Math.random() * 19) + 1;
    const urlRandomPage = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=${randomPage}`;

    axios
      .get(urlRandomPage)
      .then((response) => {
        if (response.status === 404) {
          console.warn("erreur 404 détectée");
        } else if (response.status === 504) {
          console.warn("erreur 504 détectée");
        }
        return response.data;
      })
      .then((data) => {
        setidMovie(data.results[randomMovie].id);
      })
      .catch((error) => {
        // handle error
        console.warn(error);
        setidMovie(3);
      });
  }, [isMovieValid]);

  React.useEffect(() => {
    const urlMovieToConfirm = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}&language=fr-FR`;

    axios
      .get(urlMovieToConfirm)
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
  }, [idMovie]);

  return movieConfirmed;
};

export default getRandomMovie;
