import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import Dashboard from "views/Dashboard";
import MultiPlayer from "views/MultiPlayer";
import SinglePlayer from "views/SinglePlayer";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
            <Route path="/singleplayer">
              <SinglePlayer />
            </Route>
            <Route path="/multiplayer">
              <MultiPlayer />
            </Route>
            <Redirect path="/" />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
