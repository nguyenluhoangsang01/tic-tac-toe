import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ButtonStyled = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 0 !important;
  min-width: unset !important;

  .MuiButton-label {
    font-weight: 700;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;

    .MuiButton-label {
      font-size: 16px;
    }
  }
`;
