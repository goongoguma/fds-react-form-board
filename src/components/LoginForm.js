import React from 'react'
import {UserConsumer} from '../contexts/UserContext'

export default class LoginForm extends React.Component{
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
  }
  
  render(){
    const {onRegister} = this.props // 분해대입으로 속성을 꺼내와서 변수명 설정
    return(
      // 아무 의미 없는 내용으로 감싸는 법
      //  1. <div></div>
      //  2. <React.Fragment></React.Fragment>
      //  3. <></> 
      <UserConsumer>

      {({login}) => (
        <React.Fragment>  
          <form onSubmit={e => {
            e.preventDefault()
            const username = e.target.elements.username.value
            const password = e.target.elements.password.value
            login(username, password)
          }}>
            <h1>로그인h1</h1>
            <input ref={this.usernameRef} type="text" name="username" />
            <input ref={this.passwordRef} type="password" name="password" />
            <button>로그인</button>
          </form>
          <button onClick={() => onRegister()}>회원가입</button>
        </React.Fragment>
      )}

      </UserConsumer>
      
    )
  }
}