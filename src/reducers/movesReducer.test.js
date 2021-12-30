import { PLAYER_MOVE } from "actions/notificationsActions";
import reducer from "reducers/movesReducer";

describe("moves reducer", () => {
  it("should add moves to moves array", () => {
    const state = [];
    const action = {
      type: PLAYER_MOVE,
      payload: {
        playerId: "1",
        x: "0",
        y: "0",
        date: "2021-12-18T07:42:10.386Z",
      },
    };
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
