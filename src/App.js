import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import Form from "./components/Form/Form";
import LoginForm from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunk/robotsThunk";
import jwt_decode from "jwt-decode";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "./redux/features/usersSlice/usersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = jwt_decode(token);
    if (token) {
      dispatch(loginUserActionCreator(userInfo));
    }
  }, [dispatch]);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
    return;
  };

  return (
    <div className="App">
      <Navigation />
      <h1>Hi {user?.name}, here you have a lit of robots</h1>
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
