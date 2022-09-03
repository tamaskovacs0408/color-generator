import "./App.css";
import { useState } from "react";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>Color Generator</h1>
      <div className="form__container"></div>
    </div>
  );
}

export default App;
