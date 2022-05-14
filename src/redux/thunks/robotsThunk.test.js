import "../../mocks/server";
import { loadRobotsActionCreator } from "../features/robotsSlice";
import { loadRobotsThunk } from "./robotsThunk";

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
