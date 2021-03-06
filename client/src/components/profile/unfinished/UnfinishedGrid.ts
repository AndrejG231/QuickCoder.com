import styled from "styled-components";

const UnfinishedGrid = styled.div`
  padding: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: grid;
  grid-template:
    "delete" 60px
    "items" calc(100vh - 200px)
    "pages" 60px
    /100%;
`;

export default UnfinishedGrid;
