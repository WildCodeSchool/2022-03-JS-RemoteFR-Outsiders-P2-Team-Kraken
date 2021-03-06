import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import chrono from "../services/chrono";
import chrono5 from "../services/chrono5";
import { ScoreContext } from "../contexts/scoreContext";
import { SoundContext } from "../contexts/SoundContext";
import hoverBtn from "../services/hoverBtn";
import { QuestionContext } from "../contexts/QuestionContext";

function ScoreScreen({ updateTitleMain, pseudo }) {
  const API = "https://movizz-backend.remote-fr-3.wilders.dev";
  const { mute } = React.useContext(SoundContext);
  const { score, setScore } = React.useContext(ScoreContext);
  const { setNbQuestion } = React.useContext(QuestionContext);
  let isScoreReady = false;
  let isScoreloaded = false;
  const navigate = useNavigate();
  chrono5(false);
  chrono(false);

  const handleClickReplay = () => {
    setScore(0);
    setNbQuestion(0);
    navigate("/configuration");
  };

  React.useEffect(() => {
    updateTitleMain(["Score", "scoreScreen"]);
    isScoreReady = true;
  }, []);

  const [tableScore, setTableScore] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(`${API}/players`, {
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
    axios.get(`${API}/players/top10`).then((resp) => {
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
        <p>Score: {score}</p>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <div className="scoreboard">
          <div className="scoreboard-title">Table des scores</div>
          {tableScore.map((e, i) => {
            return (
              <div className="scoreboard-top10">
                <div className="scoreboard-position">{i + 1}</div>
                <div>{e.pseudo}</div>
                <div>{e.score}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button
          type="button"
          className="play_button"
          onClick={() => {
            handleClickReplay();
          }}
          onMouseEnter={() => hoverBtn(mute)}
        >
          REJOUER
        </button>
      </div>
    </>
  );
}

export default ScoreScreen;
