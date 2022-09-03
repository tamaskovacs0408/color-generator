import "./App.css";
import { useState } from "react";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <h1>Color Generator</h1>
      <div className="form__container"></div>
    </div>
  );
}

export default App;
