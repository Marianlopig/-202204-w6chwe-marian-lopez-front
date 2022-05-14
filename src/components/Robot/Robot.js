import { RobotStylesCard } from "./RobotStyles";

const Robot = ({ image, name }) => {
  return (
    <>
      <RobotStylesCard>
        <div className="cols">
          <div className="col">
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
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RobotStylesCard>
    </>
  );
};

export default Robot;
