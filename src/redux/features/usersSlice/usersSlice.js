import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    loginUser: (user, action) => [{ ...action.payload }],
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
