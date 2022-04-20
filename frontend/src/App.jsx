import Home from "@pages/Home";
import GetMovie from "@components/GetMovie"
import axios from "axios";

import "./App.css";

function App() {
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2"
  const idFilm = "550"
  const UrlApi = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}`

  let ficheFilm = {};
  axios
    .get(UrlApi)
    .then((response) => response.data)
    .then((data) => {
      ficheFilm = { "titre": data.title, "affiche": `https://image.tmdb.org/t/p/w500/${data.poster_path}` };
      console.log(ficheFilm)
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(`test ${ficheFilm}`)

  return (
    <div className="App">
      Coucou
      {ficheFilm.titre}
      Test
    </div>
  );
}

export default App;
