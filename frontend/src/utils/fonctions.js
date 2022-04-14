/*
 ** Fonction de génération de film
 */
import { useState, useEffect } from "react";
import axios from "axios";
// import verifUrl from "./verifUrl";

function genFilm(index) {
  // mise en place des constantes
  // apiKey : clef de l'api
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2";
  // idFilm : id aléatoire grâce à Math.random()
  // const idFilm = Math.round(Math.random() * 962182);
  const idFilm = index;
  // TODO : Vérifier que l'id existe, vérifier que la popularité convient

  // urlApi : endpoint pour trouver notre film
  const urlApi = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}`;
  // useState qui va nous permettre de stocker la fiche du film
  const [ficheFilm, setFicheFilm] = useState({});

  // On utilise useEffect pour être sûr de lancer la requête API une seule fois
  useEffect(() => {
    // let newUrlApi = "";
    // do {
    // idFilm += 1;
    // newUrlApi = verifUrl(urlApi);
    // } while (verifUrl);
    // console.warn(idFilm);
    // console.warn(newUrlApi);
    axios
      .get(urlApi, {
        validateStatus: (status) => {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then((response) => {
        console.warn({ response });
        if (response.status === 404) {
          genFilm(14);
        }
        return response.data;
      })
      .then((data) => {
        if (data.success === false) {
          console.warn("n'existe pas");
        } else {
          // Une fois les data récupérées, on utilise setFicheFilm pour envoyer la fiche du film dans notre useState
          setFicheFilm({
            titre: data.title,
            affiche: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          });
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);
  // On renvoie une fiche de film avec titre et adresse de l'affiche
  return ficheFilm;
}

export default genFilm;
