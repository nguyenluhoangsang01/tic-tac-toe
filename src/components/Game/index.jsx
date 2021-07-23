import React, { useState } from "react";
import calculateWinner from "../../calculateWinner";
import Board from "../Board";
import CountDown from "../CountDown";
import { GameBoard, GameInfo, GameWrapper } from "./Game.styles";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  const [seconds] = useState(30);
  const [time, setTime] = useState(seconds);
  const [pause, setPause] = useState(true);

  return (
    <GameWrapper>
      <h1>Tic Tac Toe</h1>
      <GameBoard>
        <Board
          setPause={setPause}
          winner={winner}
          squares={squares}
          setSquares={setSquares}
          pause={pause}
          time={time}
        />
      </GameBoard>
      <GameInfo>
        <div>{/* status */}</div>
        <div>{/* todo */}</div>
      </GameInfo>
      <CountDown
        time={time}
        setTime={setTime}
        seconds={seconds}
        pause={pause}
        setPause={setPause}
        winner={winner}
      />
    </GameWrapper>
  );
};

export default Game;
