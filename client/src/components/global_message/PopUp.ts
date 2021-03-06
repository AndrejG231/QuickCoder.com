import styled from "styled-components";

interface props {
  isOnScreen: boolean;
}

const PopUp = styled.div`
  position: absolute;
  bottom: 20px;
  width: 600px;
  background: ${({ theme }) => theme.colors.b3};
  z-index: 999;
  border: 4px solid ${({ theme }) => theme.colors.b5};
  border-radius: 40px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s all linear;
  @media screen and (max-width: 700px) {
    width: 90%;
    height: 120px;
    padding: 10px;
  }
  ${({ isOnScreen }: props) =>
    `transform: translateY(${isOnScreen ? 0 : "180px"})`};
`;

export default PopUp;
