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
import MultiplayerLocal from "views/MultiplayerLocal";
import MultiplayerOnline from "views/MultiplayerOnline";
import SinglePlayer from "views/SinglePlayer";

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
            <Route path="/singleplayer">
              <SinglePlayer />
            </Route>
            <Route path="/multiplayer-local">
              <MultiplayerLocal />
            </Route>
            <Route path="/multiplayer-online">
              <MultiplayerOnline />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
