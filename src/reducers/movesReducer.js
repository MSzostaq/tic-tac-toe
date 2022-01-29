import { INIT_GAME, PLAY_AGAIN, PLAYER_MOVE } from "actions/gameActions";

const initialState = [];

export default function movesReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME:
    case PLAY_AGAIN: {
      return action.payload.moves;
    }
    case PLAYER_MOVE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
