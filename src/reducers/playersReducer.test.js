import { INIT_GAME, PLAY_AGAIN, SET_PLAYER_SCORE } from "actions/gameActions";
import reducer from "reducers/playersReducer";

describe("players reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should set player on INIT_GAME", () => {
    const state = [];
    const action = {
      type: INIT_GAME,
      payload: {
        players: {
          "1": {
            id: 1,
            isHuman: true,
            symbol: "x",
            score: 0,
          },
          "2": {
            id: 2,
            isHuman: false,
            symbol: "o",
            score: 0,
          },
        },
      },
    };
    const expectedState = {
      "1": {
        id: 1,
        isHuman: true,
        symbol: "x",
        score: 0,
      },
      "2": {
        id: 2,
        isHuman: false,
        symbol: "o",
        score: 0,
      },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set player on PLAY_AGAIN", () => {
    const state = [];
    const action = {
      type: PLAY_AGAIN,
      payload: {
        players: {
          "1": {
            id: 1,
            isHuman: true,
            symbol: "x",
            score: 0,
          },
          "2": {
            id: 2,
            isHuman: false,
            symbol: "o",
            score: 0,
          },
        },
      },
    };
    const expectedState = {
      "1": {
        id: 1,
        isHuman: true,
        symbol: "x",
        score: 0,
      },
      "2": {
        id: 2,
        isHuman: false,
        symbol: "o",
        score: 0,
      },
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should set score on SET_PLAYER_SCORE", () => {
    const state = {
      "1": {
        id: 1,
        isHuman: true,
        symbol: "x",
        score: 0,
      },
      "2": {
        id: 2,
        isHuman: false,
        symbol: "o",
        score: 0,
      },
    };
    const action = {
      type: SET_PLAYER_SCORE,
      payload: {
        playerId: 1,
        score: 1,
      },
    };
    const expectedState = {
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
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
