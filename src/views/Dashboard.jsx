import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import logo from "assets/xoxo_logo.png";
import AboutPopup from "popups/AboutPopup";
import Modal from "components/Modal";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 12px;
  position: relative;
  height: 100%;
`;

const Logo = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
  width: 200px;
  height: 120px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.popup};
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.colors.xl};
  text-decoration: none;
  padding: 8px;
  width: 180px;
  height: 40px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 100%;
  height: 100%;
`;

const Dashboard = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Wrapper>
      <Logo src={logo} />
      <Button>
        <StyledNavLink to="/singleplayer">{t("single_player")}</StyledNavLink>
      </Button>
      <Button>
        <StyledNavLink to="/multiplayer-local">
          {t("multiplayer_local")}
        </StyledNavLink>
      </Button>
      <Button>
        <StyledNavLink to="/multiplayer-online">
          {t("multiplayer_online")}
        </StyledNavLink>
      </Button>
      <Button onClick={openModal}>{t("about")}</Button>
      {isOpen && (
        <Modal>
          <AboutPopup onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Dashboard;
