import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

const StyledNotification = styled(motion.li)`
  background-color: ${({ type }) => (type === "error" ? "#ce5a5a" : "#76bd70")};
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.white};
  width: 300px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  padding: 0 12px;
  width: 100%;
  height: 40px;
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

const CloseButton = styled(Icon)`
  margin-left: auto;
  width: 24px;
  height: 24px;
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 20px;
  padding: 4px 12px 12px;
`;

const Notification = ({
  className,
  notification,
  onCloseButtonClick,
  ...rest
}) => {
  const { message, title, type } = notification;

  return (
    <StyledNotification className={className} type={type} {...rest}>
      <Header>
        <Title>{title}</Title>
        <CloseButton
          icon="close"
          onClick={() => onCloseButtonClick(notification)}
        />
      </Header>
      <Message>{message}</Message>
    </StyledNotification>
  );
};

export default Notification;
