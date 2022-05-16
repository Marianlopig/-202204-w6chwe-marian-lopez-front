import axios from "axios";
import {
  loadRobotsActionCreator,
  deleteRobotActionCreator,
  createRobotActionCreator,
} from "../features/robotsSlice";

const API_URL = "https://two02204-w6chwe-marian-lopez-back.onrender.com";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6Ik1hcmlhbiIsImlhdCI6MTY1MjczODExMywiZXhwIjoxNjUzMzQyOTEzfQ._RS2PRFqA3XOgVXTeJR5SHEy35sVqlGEdRuXUc22Xiw";
const authorization = {
  headers: { Authorization: `Bearer ${token}` },
};
export const loadRobotsThunk = () => async (dispatch) => {
  const { data, status } = await axios.get(`${API_URL}/robots`, authorization);

  if (status === 200) {
    dispatch(loadRobotsActionCreator(data));
  }
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  const { status } = await axios.delete(
    `${API_URL}/robots/delete/${id}`,
    authorization
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
      authorization
    );
    if (status === 201) {
      dispatch(createRobotActionCreator(data));
    }
  };
