import { useSelector } from "react-redux";
import AddRobot from "../AddRobot/AddRobot";
import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyles>
      <div className="container">
        <AddRobot />
        {robots.map((robot) => (
          <>
            <Robot {...robot} />
          </>
        ))}
      </div>
    </RobotsListStyles>
  );
};

export default RobotsList;
