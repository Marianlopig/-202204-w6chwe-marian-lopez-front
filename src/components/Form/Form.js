import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createRobotThunk } from "../../redux/thunks/robotsThunk/robotsThunk";
import { FormStyles } from "./FormStyles";

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [speed, setSpeed] = useState(5);
  const [toughness, setToughness] = useState(5);
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRobotThunk(name, date, speed, toughness, picture));
    navigate("/");
  };

  return (
    <FormStyles>
      <div className="container">
        <h2>Create a new Robot</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => handleChange(event, setName)}
              placeholder="Name"
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(event) => handleChange(event, setDate)}
            />
          </label>
          <label>
            Speed:
            <div className="slider">
              <input
                type="range"
                min="0"
                max="10"
                value={speed}
                onChange={(event) => handleChange(event, setSpeed)}
              />
              <p>{speed}</p>
            </div>
          </label>
          <label>
            Toughness:
            <div className="slider">
              <input
                type="range"
                min="0"
                max="10"
                value={toughness}
                onChange={(event) => handleChange(event, setToughness)}
              />
              <p>{toughness}</p>
            </div>
          </label>
          <label>
            Picture:
            <input
              type="url"
              value={picture}
              onChange={(event) => handleChange(event, setPicture)}
              placeholder="photo url"
            />
          </label>
          <div className="submitContainer">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </FormStyles>
  );
};

export default Form;
