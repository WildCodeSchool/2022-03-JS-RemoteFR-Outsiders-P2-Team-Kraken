import React, { useContext } from "react";
import "../App.css";
import { TimerContext } from "../contexts/TimerContext";
import { Timer5Context } from "../contexts/Timer5Context";

function TitleBar({ title, score }) {
  const { timer } = useContext(TimerContext);
  const { timer5 } = useContext(Timer5Context);
  let timerScreen = 0;

  React.useEffect(() => {
    if (title[1] === "question2") {
      timerScreen = timer;
    } else {
      timerScreen = timer5;
    }
  }, [title[1]]);

  if (title[1] === "main") {
    return (
      <div className="title_bar">
        <h1>{title[0]}</h1>
      </div>
    );
  }
  return (
    <div className="title_bar">
      <p>{timerScreen}</p>
      <h2>{title[0]}</h2>
      <p>{score} pt(s)</p>
    </div>
  );
}

export default TitleBar;
