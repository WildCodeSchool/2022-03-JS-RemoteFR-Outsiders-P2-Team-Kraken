import React from "react";
import Batman from "../assets/temp/batman.jpg";
import Coups from "../assets/temp/coups.jpg";
import Guerre from "../assets/temp/guerre.jpg";
import Jay from "../assets/temp/jay.jpg";
import Labeuze from "../assets/temp/labeuze.jpg";
import Mary from "../assets/temp/mary.jpg";
import Parrain from "../assets/temp/parrain.jpg";

function Carousel() {
  return (
    <section id="marquee">
      <div className="container">
        <div className="pic-container">
          <div className="pic">
            <img src={Batman} alt="img" />
          </div>
          <div className="pic">
            <img src={Coups} alt="img" />
          </div>
          <div className="pic">
            <img src={Guerre} alt="img" />
          </div>
          <div className="pic">
            <img src={Jay} alt="img" />
          </div>
          <div className="pic">
            <img src={Labeuze} alt="img" />
          </div>
          <div className="pic">
            <img src={Mary} alt="img" />
          </div>
          <div className="pic">
            <img src={Parrain} alt="img" />
          </div>
          <div className="pic">
            <img src={Labeuze} alt="img" />
          </div>
          <div className="pic">
            <img src={Mary} alt="img" />
          </div>
          <div className="pic">
            <img src={Parrain} alt="img" />
          </div>
          <div className="pic">
            <img src={Batman} alt="img" />
          </div>
          <div className="pic">
            <img src={Coups} alt="img" />
          </div>
          <div className="pic">
            <img src={Guerre} alt="img" />
          </div>
          <div className="pic">
            <img src={Jay} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
