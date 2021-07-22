import { ButtonStyled } from "./Square.styles";

const Square = ({ value, handleClick }) => {
  return (
    <ButtonStyled variant="contained" onClick={() => handleClick()}>
      {value}
    </ButtonStyled>
  );
};

export default Square;
