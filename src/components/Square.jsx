import React from "react";
import styled from "styled-components";

const Squares = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  cursor: pointer;
  outline: none;
`;

const Square = ({ value, onClick }) => {
  return <Squares onClick={onClick}>{value}</Squares>;
};

export default Square;
