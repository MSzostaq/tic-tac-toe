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
import Local from "views/Local";

const Wrapper = styled.div`
  height: 100%;
`;

const Main = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/local">
              <Local />
            </Route>
            <Route path="/singleplayer">
              <Local />
            </Route>
            <Route path="/multiplayer">
              <MultiPlayer />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
