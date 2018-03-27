import React, { Component } from "react";
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

const Canal = ({ canal }) => {
  return (
    <NavLink
      to={`/channels/${canal.id}`}
      activeClassName="md-canal-selected"
      className={`md-canal ${canal.unread && "md-canal-unread"}`}
    >
      <div className="md-canal-inner">
        <div className="md-canal-link">{!canal.avatar && canal.name}</div>
      </div>
      {canal.unread && (
        <div className="md-canal-unread-badge">{canal.unread}</div>
      )}
    </NavLink>
  );
};

@withRouter
@inject("store")
@observer
export default class Canals extends Component {
  constructor(props) {
    super(props);
    this.appState = this.props.store.appState;
  }

  render() {
    const { canals } = this.appState;

    return (
      <div className="md-canals-wrapper">
        <div className="md-canals">
          <NavLink
            to={`/@user`}
            activeClassName="md-canal-selected"
            className="md-canal md-personal"
          >
            <div className="md-canal-inner">
              <div className="md-canal-link">
                <i className="md-canal-icon mdi mdi-account-group" />
              </div>
            </div>
          </NavLink>

          <div className="md-canals-text">3 в сети</div>

          <div className="md-separator" />

          {canals.map((canal, index) => {
            return <Canal canal={canal} key={index} />;
          })}

          {/*todo сделать button*/}
          <NavLink to={`/channels/add`} className="md-canal md-add-canal">
            <div className="md-canal-inner">
              <div className="md-canal-link">
                <i className="md-canal-icon mdi mdi-plus" />
              </div>
            </div>
          </NavLink>

          <div className="md-separator" />

          <NavLink
            to={`/channels/desktop_add`}
            className="md-canal md-desktop-load"
          >
            <div className="md-canal-inner">
              <div className="md-canal-link">
                <i className="md-canal-icon mdi mdi-arrow-collapse-down" />
              </div>
            </div>
          </NavLink>

          <div className="md-canals-text">Загрузить приложения</div>
        </div>
      </div>
    );
  }
}
