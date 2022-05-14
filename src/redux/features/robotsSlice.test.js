import robotsReducer, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given a robotsSlice with an loadRobots reducer", () => {
  describe("When we pass a list of robots", () => {
    test("Then it should return the new state with robots", () => {
      const initialValue = [];
      const receivedValue = [{ name: "marian" }];

      const action = loadRobotsActionCreator(receivedValue);
      const newState = robotsReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
