import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  positon: absolute;
  width: 90vw;
  height: 70vh;

  @media (min-width: 800px) {
    width: 50vw;
    height: 60vh;
  }

  @media (min-width: 1800px) {
    width: 50vw;
    height: 50vh;
  }
`;

const PopupHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 48px;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  cursor: pointer;
  margin: 4px;
  width: 40px;
  height: 40px;
`;

const PopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: 100%;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.3;
  text-align: justify;
`;

const PopupFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 2px solid ${({ theme }) => theme.colors.shadow};
  width: 100%;
  height: 48px;
`;

const About = ({ onClose }) => {
  const { t } = useTranslation();

  function onOverlayClick() {
    onClose();
  }

  function onPopupClick(event) {
    event.stopPropagation();
  }

  return (
    <Overlay onClick={onOverlayClick}>
      <Popup
        onClick={onPopupClick}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <PopupHeader>
          <CloseIcon icon="close" onClick={onOverlayClick} />
        </PopupHeader>
        <PopupContent>
          <StyledText>{t("about_popup")}</StyledText>
        </PopupContent>
        <PopupFooter />
      </Popup>
    </Overlay>
  );
};

export default About;
