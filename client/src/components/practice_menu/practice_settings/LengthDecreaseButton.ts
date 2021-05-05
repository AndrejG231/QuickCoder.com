import styled from "styled-components";
import { Minus } from "@styled-icons/boxicons-regular";

const LengthDecreaseButton = styled(Minus)`
  ${({ theme }) => `
    border-radius: 0px;
    border: 3px solid ${theme.colors.b4};
    background: ${theme.colors.w3};
    color: ${theme.colors.b5};
    cursor: pointer;
    height: 33px;
    width: 33px;
    &: hover{
      border: 3px solid ${theme.colors.w5};
      background: ${theme.colors.b3};
      color: ${theme.colors.w5};
    }
  `}
`;

export default LengthDecreaseButton;