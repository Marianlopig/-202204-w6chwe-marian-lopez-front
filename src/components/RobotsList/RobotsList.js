import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyles>
      <div className="wrapper">
        <h1>The best Robots</h1>
        {robots.map((robot) => (
          <Robot {...robot} />
        ))}
      </div>
    </RobotsListStyles>
  );
};

export default RobotsList;
