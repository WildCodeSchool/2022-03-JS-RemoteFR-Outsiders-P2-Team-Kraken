import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import chrono from "../services/chrono";
import chrono5 from "../services/chrono5";
import { ScoreContext } from "../contexts/scoreContext";
import hoverBtn from "../services/hoverBtn";
import { SoundContext } from "../contexts/SoundContext";

function ScoreScreen({ updateTitleMain, pseudo }) {
  const { mute } = useContext(SoundContext);
  const { score } = React.useContext(ScoreContext);
  let isScoreReady = false;
  let isScoreloaded = false;
  chrono5(false);
  chrono(false);

  React.useEffect(() => {
    updateTitleMain(["Score", "scoreScreen"]);
    isScoreReady = true;
  }, []);

  const [tableScore, setTableScore] = React.useState([]);
  React.useEffect(() => {
    axios
      .post("http://localhost:5000/players", {
        pseudo,
        score,
      })
      .then(() => {
        isScoreloaded = true;
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isScoreReady]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/players/top10").then((resp) => {
      setTableScore(resp.data);
    });
  }, [isScoreloaded]);

  return (
    <>
      <div
        className="affichage-score"
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <p>Bravo {pseudo} !</p>
        <p>ton score: {score}</p>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        table des scores :
        {tableScore.map((e) => {
          return (
            <div>
              {e.id} - {e.pseudo} - {e.score}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Link to="/configuration">
          <button
            type="button"
            className="play_button"
            onMouseEnter={() => hoverBtn(mute)}
          >
            REJOUER
          </button>
        </Link>
      </div>
    </>
  );
}

export default ScoreScreen;
