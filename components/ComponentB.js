import React, { useContext } from 'react'
import { UserContext } from '../App'

const ComponentB = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1 className='text-6xl'>{user}</h1>
    </div>
  )
}

export default ComponentB
