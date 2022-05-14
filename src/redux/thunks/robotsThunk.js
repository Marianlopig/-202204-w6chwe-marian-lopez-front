import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data, status } = await axios.get(
    "https://two02204-w6chwe-marian-lopez-back.onrender.com/robots"
  );

  if (status === 200) {
    dispatch(loadRobotsActionCreator(data));
  }
};
