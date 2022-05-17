import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { username: "" },
  reducers: {
    loginUser: (action) => ({ ...action.payload }),
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
