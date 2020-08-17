import React, { useContext } from 'react'
import { CounterContext } from './App'

function ComponentB() {
  const counterContextB = useContext(CounterContext)
  return (
    <div>
      <p className='text-5xl text-orange-400'>
        component B {counterContextB.countContext}
      </p>
      <button
        className='mx-3 bg-pink-400'
        onClick={() =>
          counterContextB.dispatchContext('increment')
        }
      >
        Increment
      </button>
      <button
        className='mx-3 bg-pink-400'
        onClick={() =>
          counterContextB.dispatchContext('decrement')
        }
      >
        Decrement
      </button>
      <button
        className='mx-3 bg-pink-400'
        onClick={() =>
          counterContextB.dispatchContext('reset')
        }
      >
        Reset
      </button>
    </div>
  )
}

export default ComponentB
