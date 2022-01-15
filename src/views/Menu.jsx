import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Icon from "components/Icon";
import Tooltip from "components/Tooltip";

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

const Logo = styled(Icon)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
  width: 192px;
  height: 192px;
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
  font-weight: bold;
  text-decoration: none;
  padding: 8px;
  width: 200px;
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

const Version = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  position: fixed;
  bottom: 12px;
  right: 12px;
`;

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo icon="xoxo" />
      <Button>
        <StyledNavLink to="/singleplayer">{t("single_player")}</StyledNavLink>
      </Button>
      <Button>
        <StyledNavLink to="/multiplayer-local">
          {t("multiplayer_local")}
        </StyledNavLink>
      </Button>
      <Tooltip text="Coming soon, stay tuned!" position="right">
        <Button>
          <StyledNavLink to="/multiplayer-onlinee">
            {t("multiplayer_online")}
          </StyledNavLink>
        </Button>
      </Tooltip>
      <Version>v. 1.0.0</Version>
    </Wrapper>
  );
};

export default Dashboard;
