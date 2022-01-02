import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BoardCell from "components/BoardCell";

const BoardWrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.board};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.4rem;
  padding: 8px;
  min-width: 480px;
  min-height: 480px;
`;

const Board = ({ board, onCellClick }) => {
  return (
    <BoardWrapper
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {board.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell
            key={`${x},${y}`}
            value={cell}
            onClick={onCellClick}
            x={x}
            y={y}
          />
        ))
      )}
    </BoardWrapper>
  );
};

export default Board;
