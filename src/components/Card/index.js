import React, { useRef } from "react";
import "./index.css";

function Card({ onHandleSelected, option }) {
  let currentCardRef = useRef(null);

  const onHandleClick = () => {
    currentCardRef.current.classList.add("selected");
    onHandleSelected(option.cardId);
  };

  return (
    <div onClick={onHandleClick} ref={currentCardRef} className="card">
      <img
        className="card-img-front"
        src={require("../../assets/images/question.jpg")}
      />
      <img
        className="card-img"
        alt={"card-image-" + option.cardId}
        src={option.img}
      />
    </div>
  );
}

export default Card;
