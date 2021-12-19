import { INIT_GAME } from "actions/gameActions";
import {
  SINGLE_PLAYER,
  MULTI_PLAYER,
  MULTI_PLAYER_ONLINE,
} from "constants/gameModes";
import reducer from "reducers/modeIdReducer";

describe("mode id reducer", () => {
  it("should handle add SINGLE_PLAYER mode id to the state", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        modeId: SINGLE_PLAYER,
      },
    };
    const expectedState = "SINGLE_PLAYER";

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle add MULTI_PLAYER mode id to the state", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        modeId: MULTI_PLAYER,
      },
    };
    const expectedState = "MULTI_PLAYER";
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle add MULTI_PLAYER_ONLINE mode id to the state", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        modeId: MULTI_PLAYER_ONLINE,
      },
    };
    const expectedState = "MULTI_PLAYER_ONLINE";
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
