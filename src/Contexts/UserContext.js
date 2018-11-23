import React, { Component } from 'react'
import api from "../api"
const {Provider, Consumer} = React.createContext()

export default class UserProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: null,
       username: null
    }
  }
  
  // 재접속할시
  async componentDidMount() {
    if(localStorage.getItem('token')) {
      await this.refrechUser()
    }
  }
  
  async login(username, password) {
    const res = await api.post('/users/login',{
      username,
      password
    })
    // if(res === 201)?
    localStorage.setItem('token', res.data.token)
    await this.refrechUser()
    // TODO : 게시글 목록 보여주기
    this.props.onPostListPage()
  }

  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token')
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null
    })
    // TODO: 로그인 폼 보여주기
  }

  // 재사용코드
  async refrechUser() {
    const res2 = await api.get('/me')
    this.setState({
      id: res2.data.id,
      username: res2.data.username
    })
  }

  render() {
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// wrappedComponent에 들어온 컴포넌트들을 Consumer로 둘러싸준 후에 모든 value들과 props들을 전해준다.
// 반환되는 함수가 무기명이면 리액트 구조에서는 Unknown으로 표시된다.
function withUser(WrappedComponent) {
   function WithUser(props) {
    return (
      // UserConsumer의 값은 UserProvider의 변수 value의 값
      <Consumer>
        {value => <WrappedComponent {...value} {...props} />}
      </Consumer>
    )
  }
  // displayName 속성을 이용해 개발자 도구에서 이름이 나타나게 할 수 있다. 그런데 복잡하면 그냥 반환되는 함수에 이름을 넣어도 괜찮다
  WithUser.displayName = `withUser(${getDisplayName(WrappedComponent)})`
  return WithUser
}

export {
  UserProvider,
  Consumer as UserConsumer, 
  withUser
}