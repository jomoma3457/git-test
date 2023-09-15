import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      text: "Q",
      keycode: 81,
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      text: "W",
      keycode: 87,
      id: "Kick-n-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      text: "E",
      keycode: 69,
      id: "Heater1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      text: "A",
      keycode: 65,
      id: "Heater2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      text: "S",
      keycode: 83,
      id: "Heater3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      text: "D",
      keycode: 68,
      id: "Heater4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      text: "Z",
      keycode: 90,
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      text: "X",
      keycode: 88,
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
    {
      text: "C",
      keycode: 67,
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.url}
              onClick={() => {
                playSound(drumPad.text);
              }}
              className="drum-pad"
              id={drumPad.url}
            >
              {drumPad.text}
              <audio
                src={drumPad.url}
                className="clip"
                id={drumPad.text}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
