import React from 'react'

export default function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    if(props.loading) {
      return 'loading...'
    } else {
      return <WrappedComponent {...props} />
    }
  }
}