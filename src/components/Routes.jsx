import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "views/Main";

const Routes = () => {
  return (
    <Router>
      <Route path="/">
        <Main />
      </Route>
    </Router>
  );
};

export default Routes;
