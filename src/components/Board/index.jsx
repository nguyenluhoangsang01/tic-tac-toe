import { useEffect, useRef, useState } from "react";
import Square from "../Square";
import { BoardRow, BoardWrapper, Status } from "./Board.styles";
import { lines } from "../../lines";
import calculateWinner from "../../calculateWinner";
import { Icon, IconButton } from "@material-ui/core";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const squaresRef = useRef(squares);

  const handleClick = (i) => {
    const squaresClone = squares.slice();

    if (winner || squaresClone[i]) return;

    squaresClone[i] = xIsNext ? "X" : "O";
    setSquares(squaresClone);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <Square
      key={`col-${i}`}
      value={squares[i]}
      handleClick={() => handleClick(i)}
      xIsNext={xIsNext}
    />
  );

  useEffect(() => {
    squaresRef.current = squares;
  }, [squares]);

  console.log({ squaresRef: squaresRef.current });

  return (
    <BoardWrapper>
      <Status>
        {winner ? (
          <span className={winner ? "X" : "O"}> Winner: {winner}</span>
        ) : (
          <span className={xIsNext ? "X" : "O"}>
            Next Player: {xIsNext ? "X" : "O"}
          </span>
        )}
      </Status>
      <IconButton style={{ color: "white" }}>
        <Icon style={{ color: "white" }}>reload</Icon>
      </IconButton>

      {lines.map((line, index) => (
        <BoardRow key={`board-row-${index}`}>
          {lines[index].map((line) => renderSquare(line))}
        </BoardRow>
      ))}
    </BoardWrapper>
  );
};

export default Board;
