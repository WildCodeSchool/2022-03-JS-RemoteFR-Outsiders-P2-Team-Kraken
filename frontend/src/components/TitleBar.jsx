import React from "react";
import "../App.css";

function TitleBar({ title, score }) {
  if (title[1] === "main") {
    return (
      <div className="title_bar">
        <h1>{title[0]}</h1>
      </div>
    );
  }
  return (
    <div className="title_bar">
      <p>timer</p>
      <h2>{title[0]}</h2>
      <p>{score} pt(s)</p>
    </div>
  );
}

export default TitleBar;
