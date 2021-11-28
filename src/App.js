import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { SET_THEME } from "actions/themeActions";
import { getTheme } from "selectors";
import themes from "themes";
import Main from "views/Main";
import GlobalProvider from "components/GlobalProvider";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Notifications from "components/Notifications";

const StyledApp = styled.div`
  height: 100%;
`;

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      return;
    }

    dispatch({ type: SET_THEME, payload: storedTheme });
  }, []);

  return (
    <StyledApp>
      <ThemeProvider theme={themes[theme]}>
        <GlobalProvider>
          <ModalsProvider>
            <Main />
            <Modals />
            <AppNotifications />
          </ModalsProvider>
        </GlobalProvider>
      </ThemeProvider>
    </StyledApp>
  );
};

export default App;
