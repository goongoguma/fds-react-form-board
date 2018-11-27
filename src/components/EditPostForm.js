import React, { Component } from 'react'
import PostForm from './PostForm'
import api from '../api';

export default class EditPostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       body: ''
    }
  }

  async componentDidMount() {
    // const res = await api.get(`/posts/${this.props.postId}`)
    // const title = res.data.title
    // const body = res.data.body
    const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }

  async handleSubmit(title, body) {
     // App에 있는 EditPost에서 온것
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body
    })
    // TODO: 게시물 세부 페이지 보여주기
    // FIXME: 자기가 작성한 글만 수정 가능하도록 고쳐야한다.
    this.props.onPostDetailPage(this.props.postId)
  }
  
  render() {
    const{title, body} = this.state
    if(!title) {
      return 'loading...'
    }
    return (
      <PostForm editing={true} onSubmit={(title, body) => this.handleSubmit(title, body)}  title={title} body={body} />
      // <PostForm onSubmit={e => this.handleSubmit(e)} />
      // editing은 스타일링을 위해 PostForm에 props로 내려준다. 
    )
  }
}
