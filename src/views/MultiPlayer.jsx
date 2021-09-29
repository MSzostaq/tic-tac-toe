import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const BackButton = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  cursor: pointer;
  display: flex;
  padding: 4px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const BackIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

const GameWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  width: 500px;
  height: 500px;
`;

const MultiPlayer = () => {
  return (
    <Wrapper>
      <BackButton to="/">
        <BackIcon icon="caretDown" />
      </BackButton>
      <GameWrapper></GameWrapper>
    </Wrapper>
  );
};

export default MultiPlayer;
