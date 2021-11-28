import React from "react";
import styled from "styled-components";
import pl_circle from "assets/pl_circle.png";
import uk_circle from "assets/uk_circle.png";

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.board};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ value }) =>
    value === "pl" ? "flex-end" : "flex-start"};
  margin-right: 12px;
  width: 56px;
  height: 32px;

  @media (min-width: 1800px) {
    border-radius: 24px;
    width: 80px;
    height: 48px;
  }
`;

const Switch = styled.div`
  background: url(${({ value }) => (value === "pl" ? pl_circle : uk_circle)});
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 32px;
  height: 32px;

  @media (min-width: 1800px) {
    width: 48px;
    height: 48px;
  }
`;

const LanguageToggle = ({ value, onChange }) => {
  function onLanguageToggleClick() {
    onChange(value === "pl" ? "en" : "pl");
  }

  return (
    <ToggleButton value={value} onClick={onLanguageToggleClick}>
      <Switch value={value} />
    </ToggleButton>
  );
};

export default LanguageToggle;
