import update from "immutability-helper";
import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRandomMovie from "../services/getRandomMovie";
import Card from "./Card-5-films";

const style = {
  display: "flex",
  justifyContent: "space-around",
};

function Container() {
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

  const film1 = getRandomMovie();
  const film2 = getRandomMovie();
  const film3 = getRandomMovie();
  const film4 = getRandomMovie();
  const film5 = getRandomMovie();

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
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);

  return (
    <div>
      <div style={style}> {cards.map((card, i) => renderCard(card, i))} </div>
      <div className="validate_button">
        <Link to="/game/two-movies">
          <button type="button" className="play_button">
            VALIDER
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Container;
