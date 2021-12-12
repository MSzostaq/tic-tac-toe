import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Cell = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.text};
  width: 96px;
  height: 96px;
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
