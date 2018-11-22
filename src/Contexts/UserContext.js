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
  

  async login(username, password) {
    const res = await api.post('/users/login',{
      username,
      password
    })
    // if(res === 201)?
    localStorage.setItem('token', res.data.token)
    const res2 = await api.get('/me')
    this.setState({
      id: res2.data.id,
      username: res2.data.username
    })
    // TODO : 게시글 목록 보여주기
  }

  render() {
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this)
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