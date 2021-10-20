import React from "react";
import styled from "styled-components";

const Squares = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;
  outline: none;
`;

const X = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const O = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <>
      <Squares className={style} onClick={onClick}>
        {value}
      </Squares>
    </>
  );
};

export default Square;
