import React, { Component } from "react";
import { Route, Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import FriendsBar from "./FriendsBar";
import PrivateMessages from "./PrivateMessages";

@withRouter
@inject("store")
@observer
export default class User extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  componentDidMount() {}

  render() {
    return (
      <div className="md-content">
        <FriendsBar />

        <Route
          path="/@user/friends"
          render={() => {
            return <PrivateMessages />;
          }}
        />
      </div>
    );
  }
}
