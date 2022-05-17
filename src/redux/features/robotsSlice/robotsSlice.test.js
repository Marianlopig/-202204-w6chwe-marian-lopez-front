import robotsReducer, {
  loadRobotsActionCreator,
  deleteRobotActionCreator,
} from "./robotsSlice";

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

describe("Given a robotsSlice with an deleteRobots reducer", () => {
  describe("When we pass a robots id to delete", () => {
    test("Then it should return the new list without the deleted robot", () => {
      const initialValue = [{ _id: "1" }, { _id: "2" }, { _id: "3" }];
      const idToDelete = "3";
      const expectedRobotList = [{ _id: "1" }, { _id: "2" }];

      const action = deleteRobotActionCreator(idToDelete);
      const newState = robotsReducer(initialValue, action);

      expect(newState).toEqual(expectedRobotList);
    });
  });
});
