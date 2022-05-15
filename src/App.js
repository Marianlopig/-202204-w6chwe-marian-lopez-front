import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import Form from "./components/Form/Form";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<RobotsList />} />
        <Route path="/new" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
