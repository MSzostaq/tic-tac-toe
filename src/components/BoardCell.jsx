import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

const Cell = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.cell};
  width: 90px;
  height: 90px;

  @media (min-width: 1200px) {
    width: 96px;
    height: 96px;
  }

  @media (min-width: 1800px) {
    width: 104px;
    height: 104px;
  }
`;

const BoardCell = ({ x, y, value, onClick }) => {
  function onCellClick() {
    if (value) {
      return;
    }
    onClick({ x, y });
  }

  return (
    <Cell onClick={onCellClick}>{value && <StyledIcon icon={value} />}</Cell>
  );
};

export default BoardCell;
