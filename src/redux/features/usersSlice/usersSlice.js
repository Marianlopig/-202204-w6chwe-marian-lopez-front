import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { username: "" },
  reducers: {
    loginUser: (user, action) => {
      return { ...action.payload };
    },
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
