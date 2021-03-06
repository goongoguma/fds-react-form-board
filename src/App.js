import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import PostDetail from './containers/PostDetail';
import NewPostForm from './components/NewPostForm';
import EditPostForm from './components/EditPostForm';
import { UserProvider } from './contexts/UserContext';

// 로그인 폼에 회원가입 버튼 만들기
// 회원가입 버튼 클릭하면 회원가입 폼 보여주기

class App extends Component {
  constructor(props) {
    super(props);
    // page === 'login' -> 로그인 페이지
    // page === 'register' -> 회원가입 페이지
    // page === 'post-list' -> 게시물 목록 페이지
    // page === 'post-detail' -> 게시물 세부 페이지
    // page === 'new-post-form' -> 새 글 쓰기 페이지
    // page === 'edit-post-form' -> 글 수정 페이지

    this.state = {
      page: 'post-list',
      // 현재 보고있는 게시물의 id
      postId: null,
    };
  }

  handleRegisterPage() {
    this.setState({
      page: 'register',
    });
  }

  handlePostDetailPage(postId) {
    this.setState({
      page: 'post-detail',
      postId: postId,
    });
  }

  handleNewPostFormPage() {
    this.setState({
      page: 'new-post-form',
    });
  }

  handleEditPostFormPage(postId) {
    this.setState({
      page: 'edit-post-form',
      postId: postId,
    });
  }

  handleLoginFormPage() {
    this.setState({
      page: 'login',
    });
  }

  handlePostListPage() {
    this.setState({
      page: 'post-list',
    });
  }

  render() {
    return (
      <UserProvider onPostListPage={() => this.handlePostListPage()}>
        <div className="App">
          {this.state.page === 'login' ? (
            <LoginForm onRegister={() => this.handleRegisterPage()} />
          ) : this.state.page === 'register' ? (
            <RegisterForm />
          ) : this.state.page === 'post-list' ? (
            <PostList
              onPostDetailPage={postId => this.handlePostDetailPage(postId)}
              onNewPostFormPage={() => this.handleNewPostFormPage()}
              onLoginFormPage={() => this.handleLoginFormPage()}
            />
          ) : this.state.page === 'post-detail' ? (
            <PostDetail
              postId={this.state.postId}
              onEditPostFormPage={postId => this.handleEditPostFormPage(postId)}
            />
          ) : this.state.page === 'new-post-form' ? (
            <NewPostForm
              onPostDetailPage={postId => this.handlePostDetailPage(postId)}
            />
          ) : this.state.page === 'edit-post-form' ? (
            <EditPostForm
              postId={this.state.postId}
              onPostDetailPage={postId => this.handlePostDetailPage(postId)}
            />
          ) : null}
        </div>
      </UserProvider>
    );
  }
}

export default App;
