import { SINGLE_PLAYER } from "constants/gameModes";
import { getGame } from "selectors";

describe("game selectors", () => {
  describe("getGame", () => {
    it("should get game", () => {
      const state = {
        game: {
          modeId: SINGLE_PLAYER,
          players: {},
          board: [[], [], []],
          moves: [],
        },
      };
      const expected = {
        modeId: SINGLE_PLAYER,
        players: {},
        board: [[], [], []],
        moves: [],
      };
      expect(getGame(state)).toEqual(expected);
    });
  });
});
