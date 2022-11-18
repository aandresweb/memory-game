import React, { useEffect, useState } from "react";
import { useAttempts } from "./useAttempts";
import { useCardStyles } from "./useCardStyles";
import { useOptions } from "./useOptions";
import { useRecord } from "./useRecord";

export const useGame = ({ totalCards }) => {
  const [matches, setMatches] = useState(0);
  const { optionOne, optionTwo, setOptions, resetOptions } = useOptions();
  const { attempts, incrementAttempt, resetAttempts } = useAttempts();
  const { saveRecord } = useRecord();
  const { removeSelectedStyles, removeMatchedStyles, addMatchedStyles } =
    useCardStyles();

  useEffect(() => {
    if (optionOne && optionTwo) {
      compare();
    }
  }, [optionOne, optionTwo]);

  useEffect(() => {
    if (checkWin()) {
      alert("Grats, you won the game!");
      saveRecord(attempts);
      resetGame();
    }
  }, [matches]);

  const playGame = (cardId) => {
    setOptions(cardId);
  };

  const resetGame = () => {
    removeMatchedStyles();
    resetAttempts();
  };

  const compare = () => {
    incrementAttempt();
    setTimeout(() => {
      removeSelectedStyles();
    }, 500);

    if (optionOne === optionTwo) {
      addMatchedStyles();
      incrementMatches();
      resetOptions();
    }
  };

  const checkWin = () => {
    console.log(matches, totalCards / 2);
    return matches > 0 && matches === totalCards / 2;
  };

  const incrementMatches = () => {
    setMatches((prevState) => prevState + 1);
  };

  return {
    playGame,
    resetGame,
    matches,
    attempts,
  };
};
