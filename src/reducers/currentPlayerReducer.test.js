import { INIT_GAME, PLAY_AGAIN, PLAYER_MOVE } from "actions/gameActions";
import reducer from "reducers/currentPlayerIdReducer";

describe("current player id reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  it("should set player id on INIT_GAME", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        currentPlayerId: 1,
      },
    };
    const expectedState = 1;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set player id on PLAY_AGAIN", () => {
    const state = [];
    const action = {
      type: PLAY_AGAIN,
      payload: {
        currentPlayerId: 1,
      },
    };
    const expectedState = 1;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should change player id on PLAYER_MOVE", () => {
    const state = 1;
    const action = {
      type: PLAYER_MOVE,
      payload: {
        playerId: 1,
      },
    };
    const expectedState = 2;
    expect(reducer(state, action)).toBe(expectedState);
  });
});
