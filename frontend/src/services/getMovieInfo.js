import axios from "axios";

const getMovieInfo = (urlFilm, topic) => {
  const Film1 = 0;
  axios
    .get(urlFilm)
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
        Film1(parseInt(data.revenue, 10) - parseInt(data.budget, 10));
      } else if (topic === "release_date") {
        const date = parseInt(data.release_date.slice(0, 4), 10);
        Film1(date);
      } else {
        Film1(parseInt(data[topic], 10));
      }
    })
    .catch((error) => {
      // handle error
      console.warn(error);
      console.warn("erreur dans le getMovieInfo");
    });
  return Film1;
};

export default getMovieInfo;
