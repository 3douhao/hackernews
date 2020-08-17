import React, { useReducer, useEffect } from 'react'

import axios from 'axios'

const initialState = {
  loading: true,
  post: {},
  err: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        err: ''
      }
    case 'FETCH_FAILURE':
      return {
        loading: false,
        post: {},
        err: 'something is wrong'
      }
    default:
      return state
  }
}
const DataFetching2 = () => {
  const [post, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicod.com/posts/1')
      .then(res => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_FAILURE' })
      })
  }, [])

  return (
    <div>
      {post.loadiing ? 'Loading' : post.post.title}
      {post.err ? post.err : null}
    </div>
  )
}

export default DataFetching2
