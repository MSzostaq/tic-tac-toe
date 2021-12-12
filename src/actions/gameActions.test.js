import { initGame, INIT_GAME } from "actions/gameActions";
import {
  SINGLE_PLAYER,
  MULTI_PLAYER,
  MULTI_PLAYER_ONLINE,
} from "constants/gameModes";

describe("game actions", () => {
  describe("initGame", () => {
    it("should create an action to init single player game", () => {
      const action = initGame({ modeId: SINGLE_PLAYER });
      const { modeId, players, currentPlayerId, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      const xo = ["X", "O"];
      expect(action.type).toBe(INIT_GAME);
      expect(modeId).toBe(SINGLE_PLAYER);
      expect(p1.id).toBe(1);
      expect(p2.id).toBe(2);
      expect([1, 2].includes(currentPlayerId)).toBe(true);
      expect(p1.isHuman).toBe(true);
      expect(p2.isHuman).toBe(false);
      expect(xo.includes(p1.symbol)).toBe(true);
      expect(xo.includes(p2.symbol)).toBe(true);
      expect(p1.symbol).not.toBe(p2.symbol);
      expect(p1.score).toBe(0);
      expect(p1.score).toBe(0);
      expect(board).toEqual([[], [], []]);
      expect(moves).toEqual([]);
    });

    it("should create an action to init multi player game", () => {
      const action = initGame({ modeId: MULTI_PLAYER });
      const { modeId, players, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      const xo = ["X", "O"];
      expect(action.type).toBe(INIT_GAME);
      expect(modeId).toBe(MULTI_PLAYER);
      expect(p1.id).toBe(1);
      expect(p2.id).toBe(2);
      expect(p1.isHuman).toBe(true);
      expect(p2.isHuman).toBe(true);
      expect(xo.includes(p1.symbol)).toBe(true);
      expect(xo.includes(p2.symbol)).toBe(true);
      expect(p1.symbol).not.toBe(p2.symbol);
      expect(p1.score).toBe(0);
      expect(p1.score).toBe(0);
      expect(board).toEqual([[], [], []]);
      expect(moves).toEqual([]);
    });

    it("should create an action to init online multi player game", () => {
      const action = initGame({ modeId: MULTI_PLAYER_ONLINE });
      const { modeId, players, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      const xo = ["X", "O"];
      expect(action.type).toBe(INIT_GAME);
      expect(modeId).toBe(MULTI_PLAYER_ONLINE);
      expect(p1.id).toBe(1);
      expect(p2.id).toBe(2);
      expect(p1.isHuman).toBe(true);
      expect(p2.isHuman).toBe(true);
      expect(xo.includes(p1.symbol)).toBe(true);
      expect(xo.includes(p2.symbol)).toBe(true);
      expect(p1.symbol).not.toBe(p2.symbol);
      expect(p1.score).toBe(0);
      expect(p1.score).toBe(0);
      expect(board).toEqual([[], [], []]);
      expect(moves).toEqual([]);
    });
  });
});
