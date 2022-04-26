import React from "react";
import getRandomMovie from "../services/getRandomMovie";
import getRandomQuestion from "../services/getRandomQuestion";
import Affiche from "./Affiche";

function TwoMovies(props) {
    
    const film1=getRandomMovie();
    const film2=getRandomMovie();
    const question = getRandomQuestion(2);

    return (
        <div
        style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "1rem 0 ",
            }}>
                <Affiche id={film1[0]} titre={film1[1]} affiche ={film1[2]} />
                <Affiche id={film2[0]} titre={film2[1]} affiche ={film2[2]} />
        </div>
);
}
export default TwoMovies