import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MainMenu from "views/MainMenu";

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        <MainMenu />
      </Route>
    </Router>
  );
};

export default Routes;
