import React from "react";
import genFilm from "./utils/fonctions";

import "./App.css";

function App() {
  // On génère un film aléatoire grâce à genFilm
  const ficheFilm = genFilm(14);
  // On génère un second film aléatoire grâce à genFilm
  const ficheFilm2 = genFilm(14);
  // On affiche ce qu'on veut
  return (
    <div className="App">
      film 1 : {ficheFilm.titre} - film 2 : {ficheFilm2.titre}
    </div>
  );
}

export default App;
