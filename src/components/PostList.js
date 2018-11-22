import React, { Component } from "react";
import api from "../api";
import Layout from './Layout';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false
    };
  }

  async componentDidMount() {
    const res = await api.get('/posts')
    this.setState({
      posts: res.data
    })
    console.log(res.data)
  }

  render() {
    const {posts} = this.state
    const {onPostDetailPage, onNewPostFormPage} = this.props
    return (
      <Layout title="게시물 목록">
        <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
        <h1>게시물 목록</h1>
        <ul>
          {posts.map(post => (
           <li key={post.id} onClick={() => onPostDetailPage(post.id)}>{post.title}</li>
          ))}
        </ul>
      </Layout>
    );
  }
}