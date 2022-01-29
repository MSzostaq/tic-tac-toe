import { getTheme } from "selectors";

describe("theme selectors", () => {
  describe("getTheme", () => {
    it("should get theme", () => {
      const state = {
        theme: "dark",
      };
      expect(getTheme(state)).toEqual("dark");
    });
  });
});
