import React, { useEffect } from "react";
import styled from "styled-components";
import ModalsProvider from "components/ModalsProvider";
import Modals from "components/Modals";
import Notifications from "components/Notifications";
import Routes from "components/Routes";

const StyledApp = styled.div`
  height: 100%;
`;

const AppNotifications = styled(Notifications)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const App = () => {
  useEffect(() => {
    document.title = "Tic-Tac-Toe";
  });

  return (
    <StyledApp>
      <ModalsProvider>
        <Routes />
        <Modals />
        <AppNotifications />
      </ModalsProvider>
    </StyledApp>
  );
};

export default App;
