import React, { useEffect, useState } from "react";
import { useCardStyles } from "./useCardStyles";
import { useGame } from "./useGame";

export const useOptions = () => {
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);
  const { removeMatched, removeSelected, addMatched } = useCardStyles();

  const setOptions = (cardId) => {
    !optionOne ? setOptionOne(cardId) : setOptionTwo(cardId);
  };

  const resetOptions = () => {
    setOptionOne(null);
    setOptionTwo(null);
  };

  useEffect(() => {
    if (optionOne && optionTwo) {
      resetOptions();
    }
  }, [optionOne, optionTwo]);

  return {
    optionOne,
    optionTwo,
    setOptions,
    resetOptions,
  };
};
