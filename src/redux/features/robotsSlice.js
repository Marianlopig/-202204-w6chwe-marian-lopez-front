import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (state, action) => [...action.payload],
    deleteRobot: (state, action) => [
      ...state.filter((robot) => robot._id !== action.payload),
    ],
    createRobot: (state, action) => [...state, action.payload],
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
  createRobot: createRobotActionCreator,
} = robotsSlice.actions;
export default robotsSlice.reducer;
