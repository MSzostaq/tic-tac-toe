import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHolder = styled.nav`
  width: 100px;
  height: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 8px;
  width: 100px;
  height: 48px;
`;

const StyledLink = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 40px;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <ButtonHolder>
        <Button>
          <StyledLink to="/singleplayer">singleplayer</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/multiplayer">multiplayer</StyledLink>
        </Button>
      </ButtonHolder>
    </Wrapper>
  );
};

export default Dashboard;
