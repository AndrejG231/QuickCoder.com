import styled from "styled-components";

const HeaderTitle = styled.h1`
  position: absolute;
  font-family: monospace;
  font-size: 60px;
  top: 0;
  left: 20px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-20px);
  }
`;

export default HeaderTitle;
