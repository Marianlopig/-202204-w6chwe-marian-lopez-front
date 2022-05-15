import Button from "../Button/Button";
import { RobotStyles } from "./RobotStyles";

const Robot = ({ image, name, creationDate, speed, toughness }) => {
  return (
    <RobotStyles>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="buttonContainer">
              <Button text="Delete" className="button" />
            </div>
            <div className="details">
              <h2>{name}</h2>
              <p>
                {name} was born on {new Date(creationDate).toDateString()}. It
                has a speed of {speed}
                /10 and a his toughness level is {toughness}/10.
              </p>
            </div>
          </div>
        </div>
        <div
          className="face face2"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2>{name}</h2>
        </div>
      </div>
    </RobotStyles>
  );
};

export default Robot;
