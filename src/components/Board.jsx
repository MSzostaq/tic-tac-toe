import React from "react";
import styled from "styled-components";
import Square from "components/Square";

const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3 / 1fr);
  gap: 1rem;
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
