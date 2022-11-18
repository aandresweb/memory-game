import React from "react";

export const useCardStyles = () => {
  const addMatchedStyles = () => {
    document.querySelectorAll(".selected").forEach((card, index) => {
      card.classList.add("matched");
    });
  };

  const removeSelectedStyles = () => {
    document.querySelectorAll(".selected").forEach((card, index) => {
      card.classList.remove("selected");
    });
  };

  const removeMatchedStyles = () => {
    document.querySelectorAll(".matched").forEach((card, index) => {
      card.classList.remove("matched");
    });
  };

  return {
    removeSelectedStyles,
    removeMatchedStyles,
    addMatchedStyles,
  };
};
