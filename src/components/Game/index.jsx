import React from "react";
import Board from "../Board";
import { GameBoard, GameInfo, GameWrapper } from "./Game.styles";

const Game = () => {
  return (
    <GameWrapper>
      <h1>Tic Tac Toe</h1>
      <GameBoard>
        <Board />
      </GameBoard>
      <GameInfo>
        <div>{/* status */}</div>
        <div>{/* todo */}</div>
      </GameInfo>
    </GameWrapper>
  );
};

export default Game;
