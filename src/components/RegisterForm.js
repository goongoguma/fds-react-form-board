// import React, { Component } from 'react'

// import api from '../api'

// export default class registerForm extends Component {

//   async handleSubmit(e) {
//     e.preventDefault()
//     const username = e.target.elements.username.value
//     const password = e.target.elements.password.value
//     // FIXME: 사용자 이름 중복체크 해야함 
//     const res = await api.post('users/register', {
//       username,
//       password
//     })
//     localStorage.setItem('token', res.data.token)
//     // TODO: 게시글 목록 보여주기
//   }

//   render() {
//     return (
//       // e는 이벤트 객체가 필요할 때 사용한다.
//       <form onSubmit={(e) => this.handleSubmit(e)}>
//         <h1>회원 가입</h1>
//         <input type="text" name="username" />
//         <input type="password" name="password" />
//         <button>가입</button>
//       </form>
//     )
//   }
// }

import React, { Component } from 'react'
import api from '../api'

export default class RegisterForm extends Component {
  async handleSubmit(e){
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value

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
  render() { // 이벤트 객체를 넘겨야 할 떄는 (e)를 써주어야한다.
    return (
      <form onSubmit={e => this.handleSubmit(e)}> 
        <h1>회원가입</h1>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>가입</button>
      </form>
    )
  }
}
