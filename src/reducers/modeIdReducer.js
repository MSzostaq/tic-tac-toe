import { INIT_GAME, PLAY_AGAIN } from "actions/gameActions";

const initialState = null;

export default function modeIdReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME:
    case PLAY_AGAIN: {
      return action.payload.modeId;
    }
    default:
      return state;
  }
}
