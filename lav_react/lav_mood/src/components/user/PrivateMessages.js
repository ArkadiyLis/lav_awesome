import React, { Component } from "react";
import { Route, Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import FriendList from "./FriendList";

@withRouter
@inject("store")
@observer
export default class PrivateMessages extends Component {
  constructor(props) {
    super(props);
    this.appState = this.props.store.appState;
  }

  render() {
    return (
      <div className="md-private-messages">
        <div className="md-friends-toolbar">
          <div className="md-toolbar-actions-wrapper">
            <div className="md-toolbar-actions">
              <NavLink
                to={`/@user/friends/add`}
                activeClassName="md-action-selected"
                className="md-toolbar-action md-toolbar-add-friend"
              >
                Добавить друга
              </NavLink>

              <div className="md-toolbar-separator" />

              <NavLink
                exact
                to={`/@user/friends/list/all`}
                activeClassName="md-action-selected"
                className="md-toolbar-action md-toolbar-all"
              >
                Все
              </NavLink>

              <NavLink
                to={`/@user/friends/list/online`}
                activeClassName="md-action-selected"
                className="md-toolbar-action md-toolbar-online"
              >
                В сети
              </NavLink>

              <NavLink
                to={`/@user/friends/list/requests`}
                activeClassName="md-action-selected"
                className="md-toolbar-action md-toolbar-requests"
              >
                Запросы
              </NavLink>

              <div className="md-toolbar-separator" />

              <NavLink
                to={`/@user/friends/list/blocked`}
                activeClassName="md-action-selected"
                className="md-toolbar-action md-toolbar-locked"
              >
                Заблокированные
              </NavLink>
            </div>

            <a href="#" className="md-toolbar-action md-toolbar-create-group">
              <i className="mdi mdi-library-plus" />
            </a>
          </div>
          <div className="md-toolbar-separator" />

          <div className="md-toolbar-info">
            <a href="#" className="md-toolbar-action md-mentioning">
              <i className="mdi mdi-at" />
            </a>
            <a href="#" className="md-toolbar-action md-help">
              <i className="mdi mdi-help" />
            </a>

            {/*<div className="md-mentioning"></div>*/}
            {/*<div className="md-help"></div>*/}
          </div>
        </div>

        <Route
          exact
          path="/@user/friends"
          render={() => {
            return <Redirect to="/@user/friends/list/all" />;
          }}
        />

        <Route
          path="/@user/friends/list/:filter"
          render={() => {
            return <FriendList />;
          }}
        />

        <Route
          exact
          path="/@user/friends/add"
          render={() => {
            return <div className="md-friends-search">Добавить друга</div>;
          }}
        />
      </div>
    );
  }
}
