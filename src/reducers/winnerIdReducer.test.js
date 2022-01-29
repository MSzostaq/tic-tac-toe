import { END_GAME, INIT_GAME, PLAY_AGAIN } from "actions/gameActions";
import reducer from "reducers/winnerIdReducer";

describe("winner id reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it("should reset value on INIT_GAME", () => {
    const state = null;
    const action = {
      type: INIT_GAME,
    };
    const expectedState = null;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should reset value on PLAY_AGAIN", () => {
    const state = 1;
    const action = {
      type: PLAY_AGAIN,
    };
    const expectedState = null;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set winner on END_GAME", () => {
    const state = null;
    const action = {
      type: END_GAME,
      payload: {
        playerId: 1,
      },
    };
    const expectedState = 1;
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
