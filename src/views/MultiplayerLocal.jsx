import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { calculateWinner } from "components/CalculateWinner";
import Board from "components/Board";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const BackButton = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  cursor: pointer;
  display: flex;
  padding: 4px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const BackIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.icons};
  transform: rotate(90deg);
  width: 24px;
  height: 24px;
`;

const GameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GameTitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 12px;
`;

const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 24px;
`;

const GameHistory = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const MultiplayerLocal = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () => {
    history.map((step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to start!`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  };

  return (
    <Wrapper>
      <BackButton to="/">
        <BackIcon icon="caretDown" />
      </BackButton>
      <GameWrapper>
        <GameTitle>
          {winner ? "Player " + winner + " won!" : "Next player " + xO}
        </GameTitle>
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </GameWrapper>
      <GameInfo>
        <GameHistory>History</GameHistory>
        {renderMoves()}
      </GameInfo>
    </Wrapper>
  );
};

export default MultiplayerLocal;
