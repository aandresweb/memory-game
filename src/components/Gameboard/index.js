import React from "react";
import Card from "../Card";
import "./index.css";

function Gameboard({ children }) {
  return <div className="game-board">{children}</div>;
}

export default Gameboard;
