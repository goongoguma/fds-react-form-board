import React, { Component } from 'react'
import api from '../api';

export default class NewPostForm extends Component {
  async handleSubmit(e) {
    e.preventDefault()
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value
    const res = await api.post('/posts', {
      title,
      body
    })
    // TODO: 생성된 게시물 보여주기
    this.props.onPostDetailPage(res.data.id)
  
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="title" />
          <textarea name="body" cols="30" rows="10"></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}
