import { Link } from "react-router-dom";
import update from "immutability-helper";
import React, { useCallback, useState, useEffect } from "react";
import getRandomQuestion from "../services/getRandomQuestion";
import checkAnswer5 from "../services/checkAnswer5";
import Card from "./CardFiveMovies";
import chrono5 from "../services/chrono5";

const style = {
  display: "flex",
  justifyContent: "space-around",
};

function Container({
  updateTitleMain,
  film1,
  film2,
  film3,
  film4,
  film5,
  score,
  updateScore,
}) {
  const [isValidated, setIsValidated] = useState(false);
  chrono5(true);
  const [question, setQuestion] = useState({});
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/k2RJZ6D7h9ca7ZSta6djoheCUiR.jpg",
    },
    {
      id: 2,
      text: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/k2RJZ6D7h9ca7ZSta6djoheCUiR.jpg",
    },
    {
      id: 3,
      text: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jBCUJ90BVXIDSLlXUvgQcj6LOHa.jpg",
    },
    {
      id: 4,
      text: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9eiUNsUAw2iwVyMeXNNiNQQad4E.jpg",
    },
    {
      id: 5,
      text: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t9JGg10CW1DzXEdWL54ewkUko6N.jpg",
    },
  ]);

  useEffect(() => {
    setQuestion(getRandomQuestion(5));
  }, []);

  useEffect(() => {
    updateTitleMain([question.question, "question5"]);
  }, [question]);

  useEffect(() => {
    setCards([
      {
        id: 1,
        id_api: film1[0],
        text: film1[2],
      },
      {
        id: 2,
        id_api: film2[0],
        text: film2[2],
      },
      {
        id: 3,
        id_api: film3[0],
        text: film3[2],
      },
      {
        id: 4,
        id_api: film4[0],
        text: film4[2],
      },
      {
        id: 5,
        id_api: film5[0],
        text: film5[2],
      },
    ]);
  }, [film1, film2, film3, film4, film5]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        id_api={card.id_api}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);

  const [friseFilm, setFriseFilm] = useState([]);

  useEffect(() => {
    const tempFrise = [];
    cards.map((card, i) => {
      tempFrise.push(card.id_api);
      return renderCard(card, i);
    });
    setFriseFilm(tempFrise);
  }, [cards]);

  const handleOnClickValidation = () => {
    chrono5(false);
    setIsValidated(true);
  };
  checkAnswer5(friseFilm, question, score, updateScore, isValidated);

  return (
    <div>
      <div style={style}> {cards.map((card, i) => renderCard(card, i))} </div>
      <div className="validate_button">
        <Link to="/game/two-movies">
          <button
            type="button"
            className="play_button"
            onClick={() => handleOnClickValidation()}
          >
            VALIDER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Container;
