import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("AdminData") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default Routes;
