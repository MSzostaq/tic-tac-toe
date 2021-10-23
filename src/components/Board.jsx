import React from "react";
import styled from "styled-components";
import Square from "components/Square";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.3rem;
  width: 360px;
  height: 360px;

  @media (min-width: 800px) {
    width: 420px;
    height: 420px;
  }
`;

const Board = ({ squares, onClick }) => {
  return (
    <Wrapper>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Wrapper>
  );
};

export default Board;
