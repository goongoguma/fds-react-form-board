import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PostForm from './PostForm'

// 어떤 presentational 컴포넌트는 함수를 받고 그 함수는 특정 상황에서만 작동이된다. 내가 prop에 넘겨준 함수가 특정상황에 잘 작동 하는지 테스트하기 위해서는 
// onSubmit={action('onSubmit)}을 사용해준다.
const actions = {
  onSubmit: action('onSubmit')
}

storiesOf('PostForm', module)
  .add('default', () => <PostForm {...actions} />)
  .add('editing', () => <PostForm onSubmit={linkTo('PostDetailView')} editing={true} />)


