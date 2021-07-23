import { Icon, IconButton } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { lines } from "../../lines";
import Square from "../Square";
import { BoardRow, BoardWrapper, Status } from "./Board.styles";

const Board = ({ setPause, winner, squares, setSquares, pause, time }) => {
  const [xIsNext, setXIsNext] = useState(true);
  const squaresRef = useRef(squares);

  const handleClick = (i) => {
    const squaresClone = squares.slice();

    if (winner || squaresClone[i]) return;

    squaresClone[i] = xIsNext ? "X" : "O";
    setSquares(squaresClone);
    setXIsNext(!xIsNext);

    setPause(!pause);
  };

  useEffect(() => {
    if (time === 0) setXIsNext(!xIsNext);
    return () => clearInterval(setXIsNext);
  }, [time, xIsNext]);

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
