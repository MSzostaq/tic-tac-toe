import { SET_THEME } from "actions/themeActions";
import reducer from "reducers/themeReducer";

describe("theme reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual("dark");
  });

  it("should set theme on SET_THEME", () => {
    const state = [];
    const action = {
      type: SET_THEME,
      payload: "light",
    };
    const expectedState = "light";
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
