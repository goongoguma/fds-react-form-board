import React, { Component } from 'react'
import PostForm from './PostForm'

export default class EditPostForm extends Component {
  render() {
    return (
      <PostForm title="제목" body="내용" />
    )
  }
}
