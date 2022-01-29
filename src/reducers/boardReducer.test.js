import { INIT_GAME, PLAY_AGAIN, PLAYER_MOVE } from "actions/gameActions";
import reducer from "reducers/boardReducer";

describe("board reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should create empty board on INIT_GAME", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
      },
    };
    const expectedState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should create empty board on PLAY_AGAIN", () => {
    const state = [];
    const action = {
      type: PLAY_AGAIN,
      payload: {
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
      },
    };
    const expectedState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should create empty board on PLAYER_MOVE", () => {
    const state = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const action = {
      type: PLAYER_MOVE,
      payload: {
        x: 0,
        y: 0,
        playerId: 1,
        symbol: "x",
      },
    };
    const expectedState = [
      ["x", null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
