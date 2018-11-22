import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">헤더</div>
        <div className="title">{this.props.title}</div>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    )
  }
}
