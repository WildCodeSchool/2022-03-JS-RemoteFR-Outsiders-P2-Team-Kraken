import React from "react";
import "../App.css";

function TitleBar({ title }) {
  return (
    <div className="title_bar">
      <h1>{title}</h1>
    </div>
  );
}

export default TitleBar;
