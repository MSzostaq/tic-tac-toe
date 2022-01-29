import { INIT_GAME, PLAY_AGAIN } from "actions/gameActions";
import { SINGLE_PLAYER } from "constants/gameModes";
import reducer from "reducers/modeIdReducer";

describe("mode id reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it("should set mode id on INIT_GAME", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        modeId: SINGLE_PLAYER,
      },
    };
    const expectedState = SINGLE_PLAYER;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set mode id on PLAY_AGAIN", () => {
    const state = [];
    const action = {
      type: PLAY_AGAIN,
      payload: {
        modeId: SINGLE_PLAYER,
      },
    };
    const expectedState = SINGLE_PLAYER;
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
