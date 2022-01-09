import { INIT_GAME, PLAY_AGAIN, SET_PLAYER_SCORE } from "actions/gameActions";

const initialState = {};

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME:
    case PLAY_AGAIN: {
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
