import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import {
  SINGLE_PLAYER,
  MULTI_PLAYER,
  MULTI_PLAYER_ONLINE,
} from "constants/gameModes";
import Dashboard from "views/Dashboard";
import Game from "views/Game";
import Navbar from "components/Navbar";

const Wrapper = styled.div`
  height: 100%;
`;

const MainMenu = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/menu">
            <Dashboard />
          </Route>
          <Route path="/singleplayer">
            <Game modeId={SINGLE_PLAYER} />
          </Route>
          <Route path="/multiplayer-local">
            <Game modeId={MULTI_PLAYER} />
          </Route>
          <Route path="/multiplayer-online">
            <Game modeId={MULTI_PLAYER_ONLINE} />
          </Route>
          <Redirect to="/menu" />
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default MainMenu;
