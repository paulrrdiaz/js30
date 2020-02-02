import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const handleUpdate = e => {
      const {
        name,
        value,
        dataset: { suffix },
      } = e.target;

      document.documentElement.style.setProperty(`--${name}`, `${value}${suffix || ""}`);
    };

    inputs.forEach(input => input.addEventListener("input", handleUpdate));

    return () => {
      inputs.forEach(input => input.removeEventListener("input", handleUpdate));
    };
  }, []);

  return (
    <div className="full-height bg-image bg-image--green is-flex flex-aic flex-jcc">
      <div className="css-varaibles">
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input
              max="1200"
              min="400"
              name="max-width"
              className="input"
              type="range"
              data-suffix="px"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Container Font Size</label>
          <div className="control">
            <input
              max="2"
              min="0"
              step="0.01"
              name="font-size"
              className="input"
              type="range"
              data-suffix="rem"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <input name="background-color" className="input" type="color" />
          </div>
        </div>
        <div className="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente culpa
            molestias placeat atque omnis, quasi excepturi veritatis blanditiis modi odit corporis
            porro deleniti ullam natus quia eos doloribus molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};
