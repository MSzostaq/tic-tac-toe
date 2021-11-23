import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "themes/theme";
import { useDarkMode } from "hooks/useDarkMode";
import GlobalProvider from "components/GlobalProvider";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Notifications from "components/Notifications";
import Routes from "components/Routes";

const StyledApp = styled.div`
  height: 100%;
`;

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode} toggleTheme={toggleTheme}>
        <GlobalProvider>
          <ModalsProvider>
            <Routes />
            <Modals />
            <AppNotifications />
          </ModalsProvider>
        </GlobalProvider>
      </ThemeProvider>
    </StyledApp>
  );
};

export default App;
