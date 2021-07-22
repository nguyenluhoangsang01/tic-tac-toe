import { slotWin } from "./lines";

const calculateWinner = (squares) => {
  for (let index = 0; index < slotWin.length; index++) {
    const [col1, col2, col3, col4, col5] = slotWin[index];

    if (
      squares[col1] &&
      squares[col1] === squares[col2] &&
      squares[col1] === squares[col3] &&
      squares[col1] === squares[col4] &&
      squares[col1] === squares[col5]
    ) {
      return squares[col1];
    }
  }

  return null;
};

export default calculateWinner;
