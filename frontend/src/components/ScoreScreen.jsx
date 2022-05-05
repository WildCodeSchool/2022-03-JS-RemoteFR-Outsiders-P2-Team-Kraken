import React from "react";
import chrono from "../services/chrono";
import chrono5 from "../services/chrono5";

function ScoreScreen({ updateTitleMain }) {
  chrono5(false);
  chrono(false);

  React.useEffect(() => {
    updateTitleMain(["Score", "scoreScreen"]);
  }, []);

  return <p> Hello World from score Screen</p>;
}

export default ScoreScreen;
