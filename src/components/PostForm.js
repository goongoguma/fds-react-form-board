import React, { Component } from 'react'

// 중복되기 때문에 render를 따로 빼내고 submit의 내용을 위에서 결정하게 만들었음
// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  render() {
    return ( 
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}
