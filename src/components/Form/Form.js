import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [speed, setSpeed] = useState(5);
  const [toughness, setToughness] = useState(5);
  const [picture, setPicture] = useState("");

  const handleChange = (event, setterFunction) => {
    setterFunction({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
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
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          onChange={(event) => handleChange(event, setSpeed)}
        />
      </label>
      <label>
        Toughness:
        <input
          type="range"
          min="0"
          max="10"
          value={toughness}
          onChange={(event) => handleChange(event, setToughness)}
        />
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
