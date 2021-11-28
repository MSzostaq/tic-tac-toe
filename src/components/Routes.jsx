import React from "react";
import {
  Redirect,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  SINGLE_PLAYER,
  MULTI_PLAYER,
  MULTI_PLAYER_ONLINE,
} from "constants/gameModes";
import Menu from "views/Menu";
import Game from "views/Game";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
