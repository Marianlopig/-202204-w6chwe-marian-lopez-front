import "../../mocks/server";
import {
  loadRobotsActionCreator,
  deleteRobotActionCreator,
} from "../features/robotsSlice";
import { loadRobotsThunk, deleteRobotThunk } from "./robotsThunk";

describe("Given a loadRobotsThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadRobotsActionCreator with the data from the api", async () => {
      const dispatch = jest.fn();
      const expectedData = [
        {
          name: "Marian",
        },
      ];

      const expectedAction = loadRobotsActionCreator(expectedData);

      const thunk = loadRobotsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteRobotThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch deleteRobotActionCreator with the deleted id", async () => {
      const dispatch = jest.fn();
      const idToDelete = "3";

      const expectedAction = deleteRobotActionCreator(idToDelete);

      const thunk = deleteRobotThunk(idToDelete);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
