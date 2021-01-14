import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import HomePage from "views/Components/HomeScreen.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import TeamPage from "views/TeamPage/TeamPage.js";
import GalleryPage from "views/GalleryPage/GalleryPage.js";
// import RoverThree from "views/Roverthree/RoverThree.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/team-page" component={TeamPage} />
      <Route path="/gallery-page" component={GalleryPage} />
      {/* <Route path="/rover-three" component={RoverThree} /> */}
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
