import Robot from "../Robot/Robot";
import { RobotsListStyles } from "./RobotListStyles";

const RobotsList = () => {
  return (
    <RobotsListStyles>
      <div className="container">
        <Robot
          name="wall-e"
          image="https://miro.medium.com/max/1400/1*9VrbLFsI8lqLafp7m8o7DQ.png"
        />
        <Robot
          name="Eve"
          image="https://static.turbosquid.com/Preview/2014/07/12__09_19_10/render1.png1daf3d03-7ce0-4d8f-95a0-39d2c1d57a93Original.jpg"
        />
      </div>
    </RobotsListStyles>
  );
};

export default RobotsList;
