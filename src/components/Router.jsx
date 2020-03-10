import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Events from "./Events";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Router">
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/:event_id" component={Events} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
