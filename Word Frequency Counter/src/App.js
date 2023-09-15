import "./styles.css";
import { useState } from "react";
import InputFreq from "./InputFreq";

export default function App() {
  const [val, setVal] = useState("");
  const [word, setWord] = useState(0);

  const handleChange = (e) => {
    const data = e.target.value.split(" ");
    if (data.length <= 300) {
      setVal(e.target.value);
      setWord(data.length);
    } else {
      alert("Only 300 words, please!");
    }
  };

  return (
    <div className="App">
      <h3>Letter Count: {val.length}</h3>
      <h3>Word Count: {word}/300</h3>
      <input
        className="text-box"
        value={val}
        onChange={(e) => handleChange(e)}
      />
      <InputFreq />
    </div>
  );
}
