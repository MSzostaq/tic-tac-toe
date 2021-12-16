import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getGame } from "selectors";
import { initGame, PLAYER_MOVE } from "actions/gameActions";
import Board from "components/Board";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const BackButton = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  display: flex;
  padding: 4px;
  position: absolute;
  z-index: 3;
  top: 16px;
  left: 16px;
`;

const BackIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

const Move = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  margin-bottom: 12px;
`;

const Game = ({ modeId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const game = useSelector(getGame);

  useEffect(() => {
    dispatch(initGame({ modeId }));
  }, [dispatch, modeId]);

  function onBoardCellClick({ x, y }) {
    const player = game.players[game.currentPlayerId];
    dispatch({
      type: PLAYER_MOVE,
      payload: {
        x,
        y,
        playerId: player.id,
        symbol: player.symbol,
      },
    });
  }

  if (!game.modeId) {
    return null;
  }

  return (
    <Wrapper>
      <BackButton to="/">
        <BackIcon icon="caretDown" />
      </BackButton>
      <Move>
        {t("player")} {game.currentPlayerId} {t("move")}
      </Move>
      <Board board={game.board} onCellClick={onBoardCellClick} />
    </Wrapper>
  );
};

export default Game;
