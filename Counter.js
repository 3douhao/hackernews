import React, { useState } from 'react'

function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const handler1 = () => {
    let i = 0
    while (i < 2000000000) i++
    setCounterOne(counterOne + 1)
  }
  const handler2 = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = () => {
    return counterOne % 2 === 0
  }
  return (
    <div>
      <p>{counterOne}</p>
      <p className='text-blue-500'>
        {isEven() ? 'Even' : 'Odd'}
      </p>
      <button className='bg-green-500' onClick={handler1}>
        One
      </button>
      <button className='bg-purple-700' onClick={handler2}>
        Two - {counterTwo}
      </button>
    </div>
  )
}

export default Counter
