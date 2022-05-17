import axios from "axios";
import { loginUserActionCreator } from "../../features/usersSlice/usersSlice";
import jwt_decode from "jwt-decode";

const API_URL = "https://two02204-w6chwe-marian-lopez-back.onrender.com";

export const loginThunk = (userData) => async (dispatch) => {
  const { data, status } = await axios.post(`${API_URL}/users/login`, userData);

  if (status === 200) {
    const userInfo = jwt_decode(data.token);
    localStorage.setItem("token", data.token);
    dispatch(loginUserActionCreator({ username: userInfo.username }));
  }
};
