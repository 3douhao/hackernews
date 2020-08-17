import React, { useState } from 'react'

const Button = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrementHandler = () => {
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(initialCount)
  }
  return (
    <div>
      <h1 className='text-6xl text-center'>{count}</h1>
      <div className='flex items-center w-1/2 h-32 mx-auto border-2 border-gray-400 justify-evenly border-opacity-100'>
        <button
          className='px-4 bg-pink-500'
          onClick={reset}
        >
          Reset
        </button>
        <button
          className='px-4 bg-blue-500'
          onClick={incrementHandler}
        >
          increment
        </button>
        <button
          className='px-4 bg-green-500'
          onClick={decrementHandler}
        >
          decrement
        </button>
      </div>
    </div>
  )
}

export default Button
