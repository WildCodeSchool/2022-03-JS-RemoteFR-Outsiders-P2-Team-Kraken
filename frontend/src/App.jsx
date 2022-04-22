import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [pseudo, setPseudo] = React.useState("");
  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  return (
    <div className="App">
      <Home pseudo={pseudo} handlePseudoChange={handlePseudoChange} />
    </div>
  );
}

export default App;
