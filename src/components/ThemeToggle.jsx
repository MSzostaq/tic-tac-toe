import React from "react";
import styled from "styled-components";
import moon from "assets/moon.png";
import sun from "assets/sun.png";

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.board};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  margin-right: 12px;
  width: 56px;
  height: 32px;

  @media (min-width: 1800px) {
    border-radius: 24px;
    width: 80px;
    height: 48px;
  }
`;

const Switch = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  @media (min-width: 1800px) {
    width: 48px;
    height: 48px;
  }
`;

const SwitchImage = styled.div`
  background: url(${({ isOn }) => (isOn ? sun : moon)});
  background-color: ${({ theme }) => theme.colors.black};
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ToggleButton lightTheme={isLight} onClick={toggleTheme}>
      <Switch>
        <SwitchImage />
      </Switch>
    </ToggleButton>
  );
};

export default ThemeToggle;
