import React, { useEffect } from "react";
import clamps from "/assets/sounds/clamps.wav";
import drum from "/assets/sounds/drum.wav";
import fastClamps from "/assets/sounds/fast-clamps.wav";
import fastDrum from "/assets/sounds/fast-drum.wav";
import flam from "/assets/sounds/flam.wav";

const KEYS = [
  {
    letter: "A",
    code: 65,
    sound: clamps,
  },
  {
    letter: "S",
    code: 83,
    sound: drum,
  },
  {
    letter: "D",
    code: 68,
    sound: fastClamps,
  },
  {
    letter: "F",
    code: 70,
    sound: fastDrum,
  },
  {
    letter: "G",
    code: 71,
    sound: flam,
  },
  {
    letter: "H",
    code: 72,
    sound: clamps,
  },
  {
    letter: "J",
    code: 74,
    sound: drum,
  },
  {
    letter: "K",
    code: 75,
    sound: fastClamps,
  },
  {
    letter: "L",
    code: 76,
    sound: fastDrum,
  },
];

export default () => {
  useEffect(() => {
    const keys = document.querySelectorAll(".key");
    const playSound = event => {
      const { keyCode } = event;
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${keyCode}"]`);

      if (!audio) return;

      audio.currentTime = 0;
      audio.play();

      key.classList.add("playing");
    };

    const removeClass = function(e) {
      if (e.propertyName !== "transform") return;

      this.classList.remove("playing");
    };

    window.addEventListener("keydown", playSound);
    keys.forEach(key => key.addEventListener("transitionend", removeClass));

    return () => {
      window.removeEventListener("keydown", playSound);
      keys.forEach(key => key.removeEventListener("transitionend", removeClass));
    };
  }, []);
  return (
    <div className="full-height bg-image bg-image--orange is-flex flex-aic">
      <div className="container">
        <div className="columns is-centered">
          {KEYS.map(key => (
            <button key={`button-${key.code}`} data-key={key.code} className="button is-a key">
              {key.letter}
            </button>
          ))}
        </div>
      </div>
      {KEYS.map(key => (
        <audio
          src={key.sound}
          data-key={key.code}
          key={`audio-${key.code}`}
          className="key"
        ></audio>
      ))}
    </div>
  );
};
