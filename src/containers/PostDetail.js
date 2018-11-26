import React, { Component } from 'react'
import PostDetailView from '../components/PostDetailView'
import api from "../api";

export default class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: null,
      title: null,
      userId: null
    }
  }

  // async componentDidMount(postId) {
  //   const res = await api.get(`/posts/${postId}`)
  //   this.setState({
  //    body: res.data
  //   })
  // }
  async componentDidMount(postId) {
    // const res = await api.get(`/posts/${this.props.postId}`)
    // const title = res.data.title
    // const body = res.data.body
    const {data: {title, body, userId}} = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
      userId
    })
  }
  render() {
    const {userId, title, body} = this.state
    const {onEditPostFormPage, postId} = this.props
    return (
      <PostDetailView 
        userId={userId}
        onEditPostFormPage={onEditPostFormPage}
        postId={postId}
        title={title}
        body={body}
      />
    )
  }
}
