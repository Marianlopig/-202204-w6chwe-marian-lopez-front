import { RobotStylesCard } from "./RobotStyles";

const Robot = ({ image, name, creationDate, speed, toughness }) => {
  return (
    <RobotStylesCard>
      <div className="container">
        <div
          className="front"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="inner">
            <p>{name}</p>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              {name} was born on {new Date(creationDate).toDateString()}. It has
              a speed of {speed}
              /10 and a his toughness level is {toughness}/10.
            </p>
          </div>
        </div>
      </div>
    </RobotStylesCard>
  );
};

export default Robot;
