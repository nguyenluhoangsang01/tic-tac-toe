import { ButtonStyled } from "./Square.styles";

const Square = ({ value, handleClick }) => {
  return (
    <ButtonStyled
      variant="contained"
      onClick={handleClick}
      className={value === "X" ? "X" : "O"}
    >
      {value}
    </ButtonStyled>
  );
};

export default Square;
