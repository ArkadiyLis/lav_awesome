import React, { Component } from "react";
import { Route, Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Canals from "./Canals";
import User from "./user/User";

@withRouter
@inject("store")
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  componentDidMount() {}

  render() {
    return (
      <div className="md-app">
        <Canals />
        <div className="md-content-wrapper">
          {/*<div className="md-notification"></div>*/}
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/@user" />;
            }}
          />
          <Route
            path="/@user"
            render={() => {
              return <User />;
            }}
          />
        </div>
      </div>
    );
  }
}
