import React, { Component } from 'react';
import { UserConsumer, withUser } from '../contexts/UserContext';

class Layout extends Component {
  render() {
    const { onLoginFormPage, username, logout } = this.props;
    return (
      <div>
        <div className="header">
          헤더
          <div>{username}</div>
          {username ? (
            <button onClick={() => logout()}>로그아웃</button>
          ) : (
            <button onClick={onLoginFormPage}>로그인</button>
          )}
        </div>
        <div className="title">{this.props.title}</div>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    );
  }
}

export default withUser(Layout);
