import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { ESC } from "constants/keys";
import Icon from "components/Icon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
`;

const Popup = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundPopup};
  box-shadow: 0px 0px 8px 0px ${({ theme }) => theme.colors.darkGrey};
  overflow-y: hidden;
  positon: absolute;
  width: 50vw;
  height: 50vh;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const AboutPopup = () => {
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function onOverlayClick() {
    history.push("/");
  }

  function onKeyDown(event) {
    if (event.keyCode === ESC) {
      event.preventDefault();
      history.push("/");
    }
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
        <CloseIcon icon="close" onClick={onOverlayClick} />
      </Popup>
    </Overlay>
  );
};

export default AboutPopup;
