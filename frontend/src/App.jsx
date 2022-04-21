import React from "react";
import Home from "./pages/Home";
// import Configuration from "./pages/configuration";
// import GetMovie from "@components/GetMovie"
// import axios from "axios";

import "./App.css";

function App() {
  const [pseudo, setPseudo] = React.useState("");

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };
  console.warn(pseudo);

  return (
    <div className="App">
      <Home pseudo={pseudo} handlePseudoChange={handlePseudoChange} />
    </div>
  );
}

export default App;
