import { END_GAME, INIT_GAME, PLAY_AGAIN } from "actions/gameActions";

const initialState = null;

export default function winnerIdReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME:
    case PLAY_AGAIN: {
      return null;
    }
    case END_GAME: {
      return action.payload.playerId;
    }
    default:
      return state;
  }
}
