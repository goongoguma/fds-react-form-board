// import React from "react";

// export default class LoginForm extends React.Component {
//   render() {
//     const {onRegister} = this.props
//     return (
//       <form>
//         <h1>로그인</h1>
//         <button onClick={() => onRegister()}>회원가입</button>
//       </form>
//     );
//   }
// }

import React from 'react'
import api from '../api'



export default class LoginForm extends React.Component{
  async handleSubmit(e){
    e.preventDefault()
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const res = api.post('/users/login',{
      username,
      password
    })
    localStorage.setItem('token', res.data.token)
    // TODO : 게시글 목록 보여주기
  }
  render(){
    const {onRegister} = this.props // 분해대입으로 속성을 꺼내와서 변수명 설ㅈㅇ
    return(
      // 아무 의미 없는 내용으로 감싸는 법
      //  1. <div></div>
      //  2. <React.Fragment></React.Fragment>
      //  3. <></> 
      <React.Fragment>  

        <form>
          <h1 onSubmit={e => this.handleSubmit(e)}>로그인</h1>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>로그인</button>

        </form>
        <button onClick={() => onRegister()}>회원가입</button>
      </React.Fragment>
    )
  }
}