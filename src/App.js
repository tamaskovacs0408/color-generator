import "./App.css";
import { useState } from "react";
import Values from "values.js";
import Color from "./Components/Color/Color";
import uuid from "react-uuid";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(20);
      setColorList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };

  return (
    <div className="App">
      <h1>HEX Color Generator</h1>
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder='Enter your HEX color'
            className={`${error ? 'error' : null}`}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="color__container">
          {colorList.map((color, index) => {
            return <Color key={uuid()} {...color} index={index}/>
          })}
      </div>
    </div>
  );
}

export default App;
