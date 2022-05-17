import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { username: "" },
  reducers: {
    loginUser: (user, action) => {
      return { ...action.payload };
    },
    logoutUser: (user) => ({}),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = usersSlice.actions;
export default usersSlice.reducer;
