import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getGame } from "selectors";
import { initGame } from "actions/gameActions";
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
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  width: 500px;
  height: 500px;
`;

const Game = ({ dispatch, game, modeId }) => {
  useEffect(() => {
    dispatch(initGame({ modeId }));
  }, []);

  if (!game) {
    return null;
  }

  return (
    <Wrapper>
      <BackButton to="/">
        <BackIcon icon="caretDown" />
      </BackButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({ game: getGame(state) });

export default connect(mapStateToProps)(Game);
