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
  width: 500px;
  height: 500px;
`;

const Board = ({ squares, onClick }) => {
  return (
    <Wrapper>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </Wrapper>
  );
};

export default Board;
