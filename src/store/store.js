import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../redux/features/robotsSlice";

const store = configureStore({
  reducer: { robots: robotsReducer },
});

export default store;
