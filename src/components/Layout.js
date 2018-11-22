import React, { Component } from 'react'
import {UserConsumer} from '../contexts/UserContext';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          헤더
          <UserConsumer>
            {({username, logout}) => <React.Fragment>
            <div>{username}</div>
            <button onClick={() => logout()}>로그아웃</button>
            </React.Fragment>}
          </UserConsumer>
        </div>
        <div className="title">{this.props.title}</div>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    )
  }
}
