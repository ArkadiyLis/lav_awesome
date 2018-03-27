import React, { Component } from "react";
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@withRouter
@inject("store")
@observer
export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.appState = this.props.store.appState;
  }

  render() {
    const { friends } = this.appState;
    const { match } = this.props;

    const friendsList = friends.filter((friend, index) => {
      const filter = match.params.filter;

      if (filter === "all") {
        return friend;
      } else if (filter === "online") {
        return friend.isOnline;
      } else if (filter === "requests") {
        return friend.isRequests;
      } else if (filter === "blocked") {
        return friend.isBlocked;
      }
    });

    return (
      <div className="md-friends-list">
        <div className="md-friends-head">
          <div className="md-friends-col">ИМЯ</div>
          <div className="md-friends-seporator" />
          <div className="md-friends-col">СТАТУС</div>
          <div className="md-friends-seporator" />
          <div className="md-friends-col">ОБЩИЕ СЕРВЕРА</div>
          <div className="md-friends-seporator" />
        </div>

        <div className="md-friends-body">
          {friendsList.map((friend, index) => {
            return (
              <NavLink
                to={`/@user/${friend.id}`}
                key={index}
                activeClassName="md-friend-selected"
                className="md-friend-row"
              >
                <div className="md-friend-cell">
                  <div className="md-friend-avatar md-friend-online " />
                  <div className="md-friend-title">{friend.title}</div>
                </div>
                <div className="md-friend-cell">
                  {friend.isOnline ? "В сети" : "Не активен"}
                </div>

                <div className="md-friend-cell">
                  <div className="md-friend-avatar md-friend-online " />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/*<table className="md-table">
                    <thead className="md-table-head">
                    <tr className="md-table-row">
                        <th className="md-table-col">ИМЯ</th>
                        <th className="md-table-col">СТАТУС</th>
                        <th className="md-table-col">ОБЩИЕ СЕРВЕРА</th>
                    </tr>
                    </thead>

                    <tbody className="md-table-body">
                    <tr className="md-table-row">
                        <td className="md-table-cell">EvLTimE</td>
                        <td className="md-table-cell">В сети</td>
                        <td className="md-table-cell"></td>
                    </tr>
                    <tr className="md-table-row">
                        <td className="md-table-cell">Nessy</td>
                        <td className="md-table-cell">В сети</td>
                        <td className="md-table-cell"></td>
                    </tr>
                    <tr className="md-table-row">
                        <td className="md-table-cell">KS_hmelev</td>
                        <td className="md-table-cell">В сети</td>
                        <td className="md-table-cell"></td>
                    </tr>
                    </tbody>
                </table>*/}
      </div>
    );
  }
}
