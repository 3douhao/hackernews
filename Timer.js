import React, { useRef, useEffect, useState } from 'react'

function Timer() {
  const interValRef = useRef()
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => {
      clearInterval(interValRef.current)
    }
  }, [timer])
  return (
    <div>
      <p>hookTimer : {timer}</p>
      <button
        onClick={() => clearInterval(interValRef.current)}
      >
        clear
      </button>
    </div>
  )
}

export default Timer
