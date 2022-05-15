import { useNavigate } from "react-router";
import { AddRobotStyles } from "./AddRobotStyles";
import { MdAddCircleOutline } from "react-icons/md";

const AddRobot = () => {
  const navigate = useNavigate();
  return (
    <AddRobotStyles>
      <div className="card" onClick={() => navigate("/new")}>
        <MdAddCircleOutline className="icon" />
      </div>
    </AddRobotStyles>
  );
};

export default AddRobot;
