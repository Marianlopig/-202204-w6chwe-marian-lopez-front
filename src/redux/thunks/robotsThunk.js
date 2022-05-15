import axios from "axios";
import {
  loadRobotsActionCreator,
  deleteRobotActionCreator,
} from "../features/robotsSlice";

const API_URL = "https://two02204-w6chwe-marian-lopez-back.onrender.com";
export const loadRobotsThunk = () => async (dispatch) => {
  const { data, status } = await axios.get(`${API_URL}/robots`);

  if (status === 200) {
    dispatch(loadRobotsActionCreator(data));
  }
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(`${API_URL}/robots/delete/${id}`);
  if (status === 200) {
    dispatch(deleteRobotActionCreator(id));
  }
};
