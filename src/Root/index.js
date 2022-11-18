import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Gameboard from "../components/Gameboard";
import { CARDS } from "../constants";
import { useGame } from "../hooks/useGame";
import { useRecord } from "../hooks/useRecord";
import { duplicateAndShuffle } from "../utils";
import "./index.css";

function Root() {
  const [cardOptions, setCardOptions] = useState([]);
  const { getRecord } = useRecord();

  const { playGame, resetGame, matches, attempts } = useGame({
    totalCards: cardOptions.length,
  });

  useEffect(() => {
    setCardOptions(duplicateAndShuffle(CARDS));
  }, []);

  const onHandleSelectedCard = (cardId) => {
    playGame(cardId);
  };

  return (
    <>
      <div className="wrapper">
        <p className="title text-center mt-xlarge mb-small">Memory Game 🧠</p>
        <p className="text text-center">
          Attempts: <b>{attempts}</b>
        </p>
        <p className="text text-center">
          Best record: <b>{getRecord()}</b>
        </p>
        <div className="mt-large">
          <Gameboard>
            {cardOptions.map((option, index) => {
              return (
                <Card
                  key={index}
                  option={option}
                  onHandleSelected={onHandleSelectedCard}
                />
              );
            })}
          </Gameboard>
        </div>
        <div className="text-center mt-large mb-xlarge">
          <button onClick={resetGame} className="button">
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default Root;
