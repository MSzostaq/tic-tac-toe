import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Squares = styled.div`
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
  width: 48px;
  height: 48px;
`;

const Square = () => {
  return (
    <Squares>
      <StyledIcon icon="x" />
    </Squares>
  );
};

export default Square;
