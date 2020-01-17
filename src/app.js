import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import GoBack from "~/components/GoBack";
import Home from "~/pages/Home";
import Day01 from "~/pages/01-DrumKit";
import Day02 from "~/pages/02-Clock";

import "./app.scss";

const App = () => (
  <Fragment>
    <GoBack />
    <Router>
      <Home path="/" />
      <Day01 path="/day-01" />
      <Day02 path="/day-02" />
    </Router>
  </Fragment>
);

render(<App />, document.getElementById("root"));
