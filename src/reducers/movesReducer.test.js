import { INIT_GAME, PLAY_AGAIN, PLAYER_MOVE } from "actions/gameActions";
import reducer from "reducers/movesReducer";

describe("moves reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should create empty array on INIT_GAME", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        moves: [],
      },
    };
    const expectedState = [];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should create empty array on PLAY_AGAIN", () => {
    const state = [];
    const action = {
      type: PLAY_AGAIN,
      payload: {
        moves: [],
      },
    };
    const expectedState = [];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should add move on PLAYER_MOVE", () => {
    const state = [];
    const action = {
      type: PLAYER_MOVE,
      payload: {
        date: "2022-01-29T09:40:40.797Z",
        playerId: 1,
        x: 0,
        y: 0,
      },
    };
    const expectedState = [
      {
        date: "2022-01-29T09:40:40.797Z",
        playerId: 1,
        x: 0,
        y: 0,
      },
    ];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
