import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #404040;
  height: 100%;
  width: 100%;
`;

const BackButton = styled(NavLink)`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const SinglePlayer = () => {
  return (
    <Wrapper>
      <h1>Hello there</h1>
      <BackButton to="/">Back</BackButton>
    </Wrapper>
  );
};

export default SinglePlayer;
