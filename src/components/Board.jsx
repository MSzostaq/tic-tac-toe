import React from "react";
import styled from "styled-components";
import Square from "components/Square";

const BoardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.board};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.4rem;
  padding: 8px;
  width: 480px;
  height: 480px;
`;

const Board = ({ game }) => {
  return <BoardWrapper></BoardWrapper>;
};

export default Board;
