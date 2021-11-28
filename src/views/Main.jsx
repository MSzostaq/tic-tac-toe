import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Routes from "components/Routes";

const Wrapper = styled.div`
  height: 100%;
`;

const MainMenu = () => {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes />
      </Wrapper>
    </Router>
  );
};

export default MainMenu;
