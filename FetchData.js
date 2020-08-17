import React, { useState, useEffect } from 'react'
import axios from 'axios'
const FetchData = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [buttonId, setButtonId] = useState(1)

  const handleClick = () => {
    setButtonId(id)
  }
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${buttonId}`
      )
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => console.log(err))
  }, [buttonId])

  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleClick}>Fetch post</button>
      <h4>{post.title}</h4>
    </div>
  )
}
export default FetchData
