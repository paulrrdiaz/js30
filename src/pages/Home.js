import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <div className="full-height is-flex flex-aic">
      <div className="container">
        <h1 className="title is-1">JS30</h1>
        <h2 className="subtitle">
          Based on{" "}
          <a href="https://javascript30.com/" target="_blank" rel="noopener noreferrer">
            https://javascript30.com/
          </a>
        </h2>
        <ul>
          <li>
            <Link to="/day-01">Day 1</Link>
          </li>
          <li>
            <Link to="/day-02">Day 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
