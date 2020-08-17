import React, { useState, useEffect } from 'react'

const Tick = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('updating')
    const tick = () => {
      setCount(count + 1)
    }
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])
  return <h1>{count}</h1>
}
export default Tick
