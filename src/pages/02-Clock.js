import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    const handSecond = document.querySelector(".hand__second");
    const handMinutes = document.querySelector(".hand__minute");
    const handHours = document.querySelector(".hand__hour");
    const setTime = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDeg = (seconds / 60) * 360 + 90;
      const minutes = now.getMinutes();
      const minutesDeg = (minutes / 60) * 360 + 90;
      const hours = now.getHours();
      const hoursDeg = (hours / 12) * 360 + 90;

      handSecond.style.transform = `rotate(${secondsDeg}deg)`;
      handMinutes.style.transform = `rotate(${minutesDeg}deg)`;
      handHours.style.transform = `rotate(${hoursDeg}deg)`;
    };

    setInterval(setTime, 1000);
  }, []);

  return (
    <div className="full-height bg-image bg-image--blue is-flex flex-aic flex-jcc">
      <div className="clock">
        <div className="hand hand__hour"></div>
        <div className="hand hand__minute"></div>
        <div className="hand hand__second"></div>
      </div>
    </div>
  );
};
