import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 12px;
  height: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 8px;
  width: 160px;
  height: 48px;
`;

const StyledLink = styled(NavLink)`
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.icons};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.colors.xl};
  text-decoration: none;
  height: 40px;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Button>
        <StyledLink to="/local">Local</StyledLink>
      </Button>
      <Button>
        <StyledLink to="/singleplayer">Single Player</StyledLink>
      </Button>
      <Button>
        <StyledLink to="/multiplayer">Multiplayer</StyledLink>
      </Button>
    </Wrapper>
  );
};

export default Dashboard;
