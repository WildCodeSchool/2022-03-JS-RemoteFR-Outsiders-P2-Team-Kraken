import React from "react";
import getRandomMovie from "../services/getRandomMovie";

function Carousel() {
  return (
    <section id="marquee">
      <div className="container">
        <div className="pic-container">
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
          <div className="pic">
            <img src={getRandomMovie()[2]} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
