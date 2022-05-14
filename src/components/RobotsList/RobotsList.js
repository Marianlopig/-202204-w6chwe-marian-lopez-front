import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);
  return (
    <RobotsListStyles>
      <div key={"lalal"} className="container">
        {robots.map((robot) => (
          <Robot key={robot.id} name={robot.name} image={robot.image} />
        ))}
      </div>
    </RobotsListStyles>
  );
};

export default RobotsList;
