import { INIT_GAME, PLAY_AGAIN, PLAYER_MOVE } from "actions/gameActions";

const initialState = null;

export default function currentPlayerIdReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME:
    case PLAY_AGAIN: {
      return action.payload.currentPlayerId;
    }
    case PLAYER_MOVE: {
      return action.payload.playerId === 1 ? 2 : 1;
    }
    default:
      return state;
  }
}
