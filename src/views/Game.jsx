import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getGame } from "selectors";
import { initGame, PLAYER_MOVE } from "actions/gameActions";
import PlayAgainPopup from "popups/PlayAgainPopup";
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

const Players = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Move = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  line-height: 24px;
  padding: 0 4px;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  height: 24px;

  @media (min-width: ) {
    height: 28px;
  }

  @media (min-width: ) {
    height: 32px;
  }
`;

const PlayerSymbol = styled(Icon)`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 12px;
  width: 32px;
  height: 32px;

  @media (min-width: 1200px) {
    width: 42px;
    height: 42px;
  }
`;

const Score = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  line-height: 32px;
  height: 32px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    line-height: 42px;
    height: 42px;
  }
`;

const Version = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  position: fixed;
  bottom: 12px;
  right: 12px;
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
      <Players>
        {game.winnerId === null && (
          <Move visible={game.currentPlayerId === 1}>{t("move")}</Move>
        )}
        <PlayerSymbol icon={game.players[1].symbol}></PlayerSymbol>
        <Score>
          {game.players[1].score} : {game.players[2].score}
        </Score>
        <PlayerSymbol icon={game.players[2].symbol}></PlayerSymbol>
        {game.winnerId === null && (
          <Move visible={game.currentPlayerId === 2}>{t("move")}</Move>
        )}
      </Players>
      <Board board={game.board} onCellClick={onBoardCellClick} />
      {game.winnerId !== null && <PlayAgainPopup />}
      <Version>v. 1.0.0</Version>
    </Wrapper>
  );
};

export default Game;
