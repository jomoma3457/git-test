import React, { useState } from "react";
import WordFreq from "./WordFreq1";
import "./InputFreq.css";

export default function Input() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    setText(newText);
  };
  return (
    <div className="inp-section">
      <div>Enter Text Below</div>
      <textarea
        placeholder="enter text..."
        className="text-area"
        onChange={handleChange}
      />
      <WordFreq text={text} />
    </div>
  );
}
