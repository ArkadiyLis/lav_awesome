import React, { Component } from "react";
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@withRouter
@inject("store")
@observer
export default class FriendsBar extends Component {
  constructor(props) {
    super(props);
    this.appState = this.props.store.appState;
  }

  render() {
    const { friends } = this.appState;

    return (
      <div className="md-friends-bar">
        <div className="md-search">
          <input
            className="md-search-input"
            type="text"
            placeholder={"Найти или начать беседу"}
          />
        </div>

        <div className="md-friends-wrapper">
          <NavLink
            to={`/@user/friends`}
            activeClassName="md-friend-selected"
            className="md-friend md-all-friends"
          >
            <div className="md-friend-avatar md-friends-icon">
              <i className="mdi mdi-account-multiple" />
            </div>
            <div className="md-friend-title">Друзья</div>
          </NavLink>

          <div className="md-friends-messages-title">ЛИЧНЫЕ СООБЩЕНИЯ</div>

          {friends.map((friend, index) => {
            return (
              <NavLink
                to={`/@user/${friend.id}`}
                activeClassName="md-friend-selected"
                className="md-friend"
                key={index}
              >
                <div className="md-friend-avatar md-friend-status-icon md-friend-online " />

                <div className="md-friend-title">{friend.title}</div>
              </NavLink>
            );
          })}
        </div>

        <div className="md-user-toolbar">
          <div className="md-user-toolbar-inner" />
        </div>
      </div>
    );
  }
}
