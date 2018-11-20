import React, { Component } from 'react'
import api from '../api'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // 현재 입력 필드에 입력된 사용자 이름 / 암호
       username: '',
       password: ''
    }
  }
  
  async handleSubmit(e){
    e.preventDefault()
    // const username = e.target.elements.username.value
    // const password = e.target.elements.password.value
    const {username, password} = this.state
    // 사용자 이름 중복체크
    // api/users?username=fds => 뭔가 가져와지면 사용자가 있는것이고 안가져와지면 사용자가 없는것이다.
    const {data:users} = await api.get('/users', {
      params:{
        username
      }
    })
    if(users.length > 0){
      alert('중복된 아이디입니다.')
      return // return을 해버리면 밑에 있는 코드는 실행이 안되고 함수가 바로 종료된다.
    }
    const res = await api.post('/users/register', {
      username,
      password
    })
    localStorage.setItem('token', res.data.token)
    // TODO : 게시글 목록 보여주기
  }

  handleFieldChange(e, name) {
    // name 변수에 저장되어 있는 문자열을 그대로 속성 이름으로 사용하기
    this.setState({
      [name] : e.target.value
    })
  }

  render() { // 이벤트 객체를 넘겨야 할 떄는 (e)를 써주어야한다.
    const{username,password} = this.state
    return (
      <form onSubmit={e => this.handleSubmit(e)}> 
        <h1>회원가입</h1>
        <input type="text" name="username" value={username} onChange={e => this.handleFieldChange(e, 'username')}/>
        <input type="password" name="password" value={password} onChange={e => this.handleFieldChange(e, 'password')}/>
        <button>가입</button>
      </form>
    )
  }
}