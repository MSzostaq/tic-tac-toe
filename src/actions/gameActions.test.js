import {
  initGame,
  INIT_GAME,
  playAgain,
  PLAY_AGAIN,
} from "actions/gameActions";
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
      const xo = ["x", "o"];
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
      expect(p2.score).toBe(0);
      expect(board).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      expect(moves).toEqual([]);
    });

    it("should create an action to init multi player game", () => {
      const action = initGame({ modeId: MULTI_PLAYER });
      const { modeId, players, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      const xo = ["x", "o"];
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
      expect(p2.score).toBe(0);
      expect(board).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      expect(moves).toEqual([]);
    });

    it("should create an action to init online multi player game", () => {
      const action = initGame({ modeId: MULTI_PLAYER_ONLINE });
      const { modeId, players, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      const xo = ["x", "o"];
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
      expect(p2.score).toBe(0);
      expect(board).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      expect(moves).toEqual([]);
    });
  });

  describe("playAgain", () => {
    it("should create an action to play again", () => {
      const previousPlayers = {
        "1": {
          id: 1,
          isHuman: true,
          symbol: "x",
          score: 1,
        },
        "2": {
          id: 2,
          isHuman: false,
          symbol: "o",
          score: 0,
        },
      };
      const action = playAgain({
        modeId: SINGLE_PLAYER,
        players: previousPlayers,
      });
      const { modeId, players, currentPlayerId, board, moves } = action.payload;
      const p1 = players[1];
      const p2 = players[2];
      expect(action.type).toBe(PLAY_AGAIN);
      expect(modeId).toBe(SINGLE_PLAYER);
      expect(p1.id).toBe(1);
      expect(p2.id).toBe(2);
      expect([1, 2].includes(currentPlayerId)).toBe(true);
      expect(currentPlayerId).toBe(2);
      expect(p1.isHuman).toBe(true);
      expect(p2.isHuman).toBe(false);
      expect(p1.symbol).toBe("o");
      expect(p2.symbol).toBe("x");
      expect(p1.score).toBe(1);
      expect(p2.score).toBe(0);
      expect(board).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      expect(moves).toEqual([]);
    });
  });
});
