import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { playAgain } from "actions/gameActions";
import { getGame } from "selectors";
import Icon from "components/Icon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
`;

const Popup = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.popup};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  positon: absolute;
  width: 90vw;
  height: 40vh;

  @media (min-width: 680px) {
    width: 50vw;
    height: 40vh;
  }

  @media (min-width: 800px) {
    width: 40vw;
    height: 50vh;
  }
`;

const PopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  width: 100%;
  height: 100%;
`;

const StyledMainText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 24px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.2;
  text-align: center;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media (min-width: 680px) {
    margin-top: 18px;
  }

  @media (min-width: 800px) {
    margin-top: 24px;
  }

  @media (min-width: 1800px) {
    margin-top: 32px;
  }
`;

const buttonStyle = css`
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin: 8px;
  padding: 4px;
  text-align: center;
  width: 140px;
  height: 36px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 170px;
    height: 48px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 180px;
    height: 48px;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${buttonStyle}
`;

const Button = styled.button`
  ${buttonStyle}
`;

const ButtonIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  cursor: pointer;
  margin: 4px;
  width: 24px;
  height: 24px;

  @media (min-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

const PlayAgainPopup = ({ onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const game = useSelector(getGame);

  function onOverlayClick() {
    onClose();
  }

  function onPopupClick(event) {
    event.stopPropagation();
  }

  function onPlayAgainButtonClick() {
    dispatch(
      playAgain({
        modeId: game.modeId,
        players: game.players,
      })
    );
  }

  return (
    <Overlay onClick={onOverlayClick}>
      <Popup
        onClick={onPopupClick}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <PopupContent>
          <StyledMainText>
            {game.winnerId
              ? t("win_message", { playerId: game.winnerId })
              : t("draw_message")}
          </StyledMainText>
          <StyledText>{t("play_again_popup")}</StyledText>
          <ButtonWrapper>
            <StyledNavLink to="/">
              <ButtonIcon icon="home" />
              {t("cancel")}
            </StyledNavLink>
            <Button onClick={onPlayAgainButtonClick}>
              <ButtonIcon icon="restart" />
              {t("play_again")}
            </Button>
          </ButtonWrapper>
        </PopupContent>
      </Popup>
    </Overlay>
  );
};

export default PlayAgainPopup;
