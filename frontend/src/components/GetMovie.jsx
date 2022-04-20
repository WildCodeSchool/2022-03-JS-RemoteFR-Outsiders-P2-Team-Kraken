import react from "react";
import axios from "axios";

function GetMovie() {
  const apiKey = "8b3e8af5c0e9e0a359483a16acf719e2"
  const idFilm = "550"
  const UrlApi = `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${apiKey}`


  /*
    const handleChange = () => {
      console.log("btn was clicked")
      axios
        .get("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then((response) => response.data)
        // Use this data to update the state
        .then((data) => {
          console.log(data[0])
          setQuoteCard(data[0]);
        });
    }*/


  // Make a request for a user with a given ID
  axios
    .get(UrlApi)
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      // handle success
      const ficheFilm = { "titre": data.title, "affiche": `https://image.tmdb.org/t/p/w500/${data.poster_path}` };
      console.log(ficheFilm)
    })
    // .then((data) => {
    //   const title = data.title
    //   console.log(title)
    // })
    .catch(function (error) {
      // handle error
      console.log(error);

    });

  return (
    //<ficheFilm />
    ficheFilm

  );

}



export default GetMovie