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

export {
  UserProvider,
  Consumer as UserConsumer
}