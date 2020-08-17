import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { CounterContext } from './App'
const ComponentA = () => {
  const counterContext = useContext(CounterContext)
  return (
    <div>
      <h1 className='text-5xl text-blue-500'>
        From componentA: {counterContext.countContext}
      </h1>
      <button
        className='mx-3 bg-blue-400'
        onClick={() =>
          counterContext.dispatchContext('increment')
        }
      >
        Increment
      </button>
      <button
        className='mx-3 bg-blue-400'
        onClick={() =>
          counterContext.dispatchContext('decrement')
        }
      >
        Decrement
      </button>
      <button
        className='mx-3 bg-blue-400'
        onClick={() =>
          counterContext.dispatchContext('reset')
        }
      >
        Reset
      </button>
      <ComponentB />
    </div>
  )
}
export default ComponentA
