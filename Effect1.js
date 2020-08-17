import React, { useState, useEffect } from 'react'
const Effect1 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const addCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  useEffect(() => {
    console.log('updating')
    document.title = `clicked ${count} times`
  }, [count])
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        id='name'
      />
      <label htmlFor='name'>your name {name}</label>
      <button onClick={addCount}>
        Click {count} times
      </button>
    </div>
  )
}
export default Effect1
