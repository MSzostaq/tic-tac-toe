import React, { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const ToltipTarget = styled.button`
  background: inherit;
  border: none;
  color: inherit;
  cursor: inherit;
  display: flex;
  font-size: inherit;

  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

const CenterContainer = styled.div`
  bottom: calc(100% + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -100px;
  pointer-events: none;
  position: absolute;
  left: 50%;
  width: 100%;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          margin-right: 0;
          top: 50%;
          right: calc(100% + 5px);
          left: unset;
          width: 100%;
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          top: 50%;
          left: calc(100% + 5px);
          width: 100%;
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

const TooltipBox = styled.span`
  animation: ${fadeIn} 0.5s linear;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  padding: 10px 8px;
  position: relative;

  ${({ position }) => {
    switch (position) {
      case "right":
        return css`
          color: #000;
        `;
      default:
        return css``;
    }
  }}

  &:after {
    border-width: 4px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent
      transparent;
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - 4.5px);
    width: 1px;
    height: 1px;
  }

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent
              ${({ theme }) => theme.colors.white} transparent;
            top: unset;
            left: calc(50% - 5px);
            bottom: 100%;
            width: 1px;
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent
              ${({ theme }) => theme.colors.white};
            top: calc(50% - 5px);
            left: 100%;
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent ${({ theme }) => theme.colors.white}
              transparent transparent;
            top: calc(50% - 5px);
            left: unset;
            right: 100%;
          }
        `;
      default:
        return css``;
    }
  }}
`;

const Tooltip = ({ background, children, position, text, styleMe = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <Wrapper>
      <ToltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        styleMe={styleMe}
        showOnFocus={isFocused}
      >
        {children}
      </ToltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position}>
            {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </Wrapper>
  );
};

export default Tooltip;
