import React, { useState } from "react";
import "./WordFreq1.css";

export default function WordFreq(props) {
  const text = props.text.toLowerCase();
  const textArr = text.split(" ");
  const obj = {};

  const giveFreq = () => {
    for (let i = 0; i <= textArr.length; i++) {
      obj[textArr[i]] = 0;
    }
    for (let i = 0; i <= textArr.length; i++) {
      obj[textArr[i]]++;
    }
    return obj;
  };
  const newObj = giveFreq();
  let keys = Object.keys(newObj);
  keys = keys.slice(0, keys.length - 2);

  return (
    <div className="res-section">
      {keys.map((ele) => (
        <div className="grid-item">
          {ele} : {newObj[ele]}
        </div>
      ))}
    </div>
  );
}
