import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageToggle from "components/LanguageToggle";

const StyledNavbar = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 56px;
`;

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [value, setValue] = useState(false);
  function onValueChange(newValue) {
    setValue(newValue);
    changeLanguage(newValue ? "pl" : "en");
  }

  return (
    <StyledNavbar>
      <LanguageToggle value={value} onChange={onValueChange} />
    </StyledNavbar>
  );
};

export default Navbar;
