import React, { useState } from 'react'
import MouseHook from './MouseHook'
const Container = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div className='w-1/2 h-32 mx-auto'>
      <button
        className='bg-blue-400'
        onClick={() => setDisplay(!display)}
      >
        Toggle display
      </button>
      {display && <MouseHook />}
    </div>
  )
}
export default Container
