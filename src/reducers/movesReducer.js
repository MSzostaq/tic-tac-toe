import moment from "moment";
import { INIT_GAME, PLAYER_MOVE } from "actions/gameActions";

const initialState = [];

export default function movesReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_GAME: {
      return action.payload.moves;
    }
    case PLAYER_MOVE: {
      const date = moment().toISOString();
      const { playerId, x, y } = action.payload;
      return [...state, { playerId, x, y, date }];
    }
    default:
      return state;
  }
}
