import React from "react";
import "../App.css";

function TitleBar({ title }) {
  if (title[1] === "main") {
    return (
      <div className="title_bar">
        <h1>{title[0]}</h1>
      </div>
    );
  }
  return (
    <div className="title_bar">
      <h2>{title[0]}</h2>
    </div>
  );
}

export default TitleBar;
