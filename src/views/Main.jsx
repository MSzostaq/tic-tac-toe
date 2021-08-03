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
  position: relative;
  height: 100%;
`;

const View = styled.div`
  height: 100%;
`;

const Main = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <View>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/singleplayer">
                <SinglePlayer />
              </Route>
              <Route path="/multiplayer">
                <MultiPlayer />
              </Route>
              <Redirect to="/" />
            </Switch>
          </View>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Main;
