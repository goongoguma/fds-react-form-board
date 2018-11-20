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
    const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }
  
  render() {
    const{title, body} = this.state
    if(!title) {
      return 'loading...'
    }
    return (
      <PostForm title={title} body={body} />
    )
  }
}
