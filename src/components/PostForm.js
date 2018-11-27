import React, { Component } from 'react'
import styles from './PostForm.module.scss'
import classNames from 'classnames'

// 중복되기 때문에 render를 따로 빼내고 submit의 내용을 위에서 결정하게 만들었음
// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {

  static defaultProps = {
    // true가 주어지면, 편집 모드 스타일이 적용됨
    editing: false
  }
  
  render() {
    const {editing} = this.props
    const titleClass = classNames(styles.titleInput, {
      // 객체리터럴에서 속성이름 부분에 대괄호를 썼을때는 대괄호 안에 있는 표현식의 결과값이 속성 이름이 된다.
      // 교재의 객체 파트 다시한번 보기 
      [styles.editing] : editing
    })
    return ( 
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}></textarea>
          <button>전송</button>
        </form>
      </div>
    )
  }
}


