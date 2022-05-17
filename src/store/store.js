import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../redux/features/robotsSlice/robotsSlice";
import usersReducer from "../redux/features/usersSlice/usersSlice";

const store = configureStore({
  reducer: { robots: robotsReducer, users: usersReducer },
});

export default store;
