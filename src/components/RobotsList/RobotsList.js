import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyles>
      <div className="wrapper">
        <h1>The best Robots</h1>
        <div className="cols">
          {robots.map((robot) => (
            <>
              <Robot {...robot} />
              <Robot {...robot} />
              <Robot {...robot} />
              <Robot {...robot} />
            </>
          ))}
        </div>
      </div>
    </RobotsListStyles>
  );
};

export default RobotsList;
