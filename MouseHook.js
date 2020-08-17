import React, { useState, useEffect } from 'react'

const MouseHook = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const watchMouse = (e) => {
    console.log('logging mouse move')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('effect called')
    window.addEventListener('mousemove', watchMouse)
    return () => {
      console.log('unmounting code')
      window.removeEventListener('mousemove', watchMouse)
    }
  }, [])
  return (
    <div>
      Coordinates: X: {x} Y: {y}
    </div>
  )
}
export default MouseHook
