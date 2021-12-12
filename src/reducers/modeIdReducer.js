import { INIT_GAME } from "actions/gameActions";

const initialState = null;

export default function modeIdReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME: {
      return action.payload.modeId;
    }
    default:
      return state;
  }
}
