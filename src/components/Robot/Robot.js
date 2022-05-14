import { RobotStylesCard } from "./RobotStyles";

const Robot = ({ image, name }) => {
  return (
    <>
      <RobotStylesCard>
        <div className="card">
          <img src={image} alt={`robot ${name}`} className="card__image" />
          <div className="card__caption">
            <h2 className="card__title">{name} </h2>
          </div>
        </div>
      </RobotStylesCard>
    </>
  );
};

export default Robot;
