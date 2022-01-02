import { INIT_GAME, SET_PLAYER_SCORE } from "actions/gameActions";

const initialState = {};

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME: {
      return action.payload.players;
    }
    case SET_PLAYER_SCORE: {
      const { playerId, score } = action.payload;
      return { ...state, [playerId]: { ...state[playerId], score } };
    }
    default:
      return state;
  }
}
