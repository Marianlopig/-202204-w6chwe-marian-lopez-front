import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import Form from "./components/Form/Form";
import LoginForm from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunk/robotsThunk";
import jwt_decode from "jwt-decode";
import { loginUserActionCreator } from "./redux/features/usersSlice/usersSlice";
import MainLogin from "./components/MainLogin/MainLogin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = jwt_decode(token);
    if (token) {
      dispatch(loginUserActionCreator(userInfo));
    }
  }, [dispatch]);

  // const logOut = () => {
  //   localStorage.removeItem("token");
  //   dispatch(logoutUserActionCreator());
  //   return;
  // };

  return (
    <div className="App">
      <Navigation />
      <MainLogin />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<RobotsList />} />
        <Route path="/new" element={<Form />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
