import React, { useContext } from "react";
import { ScoreContext } from "../contexts/scoreContext";
import "../App.css";
import { TimerContext } from "../contexts/TimerContext";
import { Timer5Context } from "../contexts/Timer5Context";

function TitleBar({ title }) {
  const { score } = useContext(ScoreContext);
  const { timer } = useContext(TimerContext);
  const { timer5 } = useContext(Timer5Context);

  if (title[1] === "main") {
    return (
      <div className="title_bar">
        <h1>{title[0]}</h1>
      </div>
    );
  }
  if (title[1] === "question2" || title[1] === "question5") {
    return (
      <div className="title_bar">
        <p>{title[1] === "question2" ? timer : timer5}</p>
        <h2>{title[0]}</h2>
        <p>{score} pt(s)</p>
      </div>
    );
  }
  return (
    <div className="title_bar">
      <h1>{title[0]}</h1>
    </div>
  );
}

export default TitleBar;
