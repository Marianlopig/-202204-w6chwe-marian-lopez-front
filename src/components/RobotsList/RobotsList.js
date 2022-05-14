import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyles className="wrapper">
      <h1>The best Robots</h1>
      <div className="cols">
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
