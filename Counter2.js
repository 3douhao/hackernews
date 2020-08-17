import React, { useReducer } from 'react'
const initialState = {
  firstCounter: 0,
  secondCounter: 10
}
const reducer = (state, action) => {
  switch (action) {
    case 'increment1':
      return {
        ...state,
        firstCounter: state.firstCounter + 1
      }
    case 'decrement1':
      return {
        ...state,
        firstCounter: state.firstCounter - 1
      }
    case 'increment2':
      return {
        ...state,
        secondCounter: state.secondCounter + 5
      }
    case 'decrement2':
      return {
        ...state,
        secondCounter: state.secondCounter - 5
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function Counter2() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  )
  return (
    <div className='text-center'>
      <p className='text-6xl text-blue-500'>
        Count - {count.firstCounter}
      </p>
      <p className='text-6xl text-blue-500'>
        Count2 - {count.secondCounter}
      </p>
      <button
        className='bg-orange-400'
        onClick={() => dispatch('increment1')}
      >
        Increment
      </button>
      <button
        className='bg-green-400'
        onClick={() => dispatch('decrement1')}
      >
        Decrement
      </button>
      <button
        className='bg-orange-400'
        onClick={() => dispatch('increment2')}
      >
        Increment2
      </button>
      <button
        className='bg-green-400'
        onClick={() => dispatch('decrement2')}
      >
        Decrement2
      </button>
      <button
        className='bg-purple-600'
        onClick={() => dispatch('reset')}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter2
