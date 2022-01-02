import { INIT_GAME } from "actions/gameActions";
import { SINGLE_PLAYER } from "constants/gameModes";
import reducer from "reducers/boardReducer";

describe("board reducer", () => {
  it("should add empty board", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        modeId: SINGLE_PLAYER,
        players: {
          1: { id: 1, isHuman: true, symbol: "X", score: 0 },
          2: { id: 2, isHuman: false, symbol: "O", score: 0 },
        },
        board: [[], [], []],
        moves: [],
      },
    };
    const expectedState = [[], [], []];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});