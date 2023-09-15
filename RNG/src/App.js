import "./styles.css";
import { useState } from "react";
export default function Random() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
  );

  const handleRandom = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="randomNum">
          <p>RNG</p>
          <h2 id="title-one">
            Generate a number <span>{randomNum}</span>
          </h2>
          <div className="numContainer">
            <div>
              <p>Min</p>
              <input
                type="number"
                value={minVal}
                onChange={(e) => setMinVal(+e.target.value)}
              />
              <p>Max</p>
              <input
                type="number"
                value={maxVal}
                onChange={(e) => setMaxVal(+e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="gen-button">
          <button id="gen" onClick={handleRandom}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
