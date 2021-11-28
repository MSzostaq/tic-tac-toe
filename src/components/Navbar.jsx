import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SET_THEME } from "actions/themeActions";
import { getTheme } from "selectors";
import { useTranslation } from "react-i18next";
import LanguageToggle from "components/LanguageToggle";
import ThemeToggle from "components/ThemeToggle";

const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 56px;
`;

const Logo = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
  width: 200px;
  height: 120px;
`;

const Navbar = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  function onLanguageChange(value) {
    i18n.changeLanguage(value);
  }

  function onThemeChange(value) {
    dispatch({ type: SET_THEME, payload: value });
  }

  return (
    <StyledNavbar>
      <ThemeToggle value={theme} onChange={onThemeChange} />
      <LanguageToggle value={i18n.language} onChange={onLanguageChange} />
    </StyledNavbar>
  );
};

export default Navbar;
