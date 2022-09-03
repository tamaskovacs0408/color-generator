import "./App.css";
import React, { useState } from "react";
import Values from "values.js";
import Color from "./Components/Color/Color";
import uuid from "react-uuid";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#007FB2").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Tint and Shade Generator</h1>
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <input
              id="input_field"
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
              placeholder="Enter your HEX color"
              className={`${error ? "error" : null}`}
            />
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="color__container">
        {colorList.map((color) => {
          return <Color key={uuid()} {...color} hexColor={color.hex} />;
        })}
      </div>
    </div>
  );
}

export default App;
