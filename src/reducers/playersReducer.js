import { INIT_GAME } from "actions/gameActions";

const initialState = {};

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME: {
      return action.payload.players;
    }
    default:
      return state;
  }
}
