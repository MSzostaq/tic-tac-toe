import { INIT_GAME, PLAYER_MOVE } from "actions/gameActions";

const initialState = [];

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME: {
      return action.payload.board;
    }
    case PLAYER_MOVE: {
      const { symbol, x, y } = action.payload;
      const newBoard = [...state];
      newBoard[y][x] = symbol;
      return newBoard;
    }
    default:
      return state;
  }
}
