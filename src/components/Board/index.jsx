import { useState } from "react";
import Square from "../Square";
import { BoardWrapper, Row, Status } from "./Board.styles";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const squaresSlice = squares.slice();
    squaresSlice[i] = "X";
    setSquares(squaresSlice);
  };

  const renderSquare = (i) => (
    <Square
      key={`col-${i}`}
      value={squares[i]}
      handleClick={() => handleClick(i)}
    />
  );

  return (
    <BoardWrapper>
      <Status>Next player: X</Status>
    </BoardWrapper>
  );
};

export default Board;
