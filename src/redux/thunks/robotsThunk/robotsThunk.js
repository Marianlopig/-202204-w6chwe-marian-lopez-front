import axios from "axios";
import {
  loadRobotsActionCreator,
  deleteRobotActionCreator,
  createRobotActionCreator,
} from "../../features/robotsSlice/robotsSlice";

const API_URL = "https://two02204-w6chwe-marian-lopez-back.onrender.com";
const getAuth = () => {
  const token = localStorage.getItem("token");
  const authorization = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return authorization;
};
export const loadRobotsThunk = () => async (dispatch) => {
  const { data, status } = await axios.get(`${API_URL}/robots`);

  if (status === 200) {
    dispatch(loadRobotsActionCreator(data));
  }
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(
    `${API_URL}/robots/delete/${id}`,
    getAuth()
  );
  if (status === 200) {
    dispatch(deleteRobotActionCreator(id));
  }
};

export const createRobotThunk =
  (name, date, speed, toughness, picture) => async (dispatch) => {
    const body = {
      name,
      creationDate: date,
      image: picture,
      speed,
      toughness,
    };
    const { status, data } = await axios.post(
      `${API_URL}/robots/create`,
      body,
      getAuth()
    );
    if (status === 201) {
      dispatch(createRobotActionCreator(data));
    }
  };
