import React, { useState, useEffect } from 'react'

import axios from 'axios'

function PostFetching() {
  const [post, setPost] = useState({})
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.comm/posts/1')
      .then(res => {
        setLoading(false)
        setPost(res.data)
        setErr('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setErr('wrong')
      })
  }, [])
  return (
    <div className='text-5xl text-blue-600'>
      {loading ? 'loading' : post.title}
      {err ? err : null}
    </div>
  )
}

export default PostFetching
