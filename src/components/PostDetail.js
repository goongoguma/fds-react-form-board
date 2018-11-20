import React, { Component } from 'react'

export default class PostDetail extends Component {
  render() {
    const{postId} = this.props

    return (
      <div>
        <h1>{postId}</h1>
      </div>
    )
  }
}
