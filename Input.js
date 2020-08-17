import React, { useState } from 'react'
const Input = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })
  return (
    <form className='w-1/2 h-64 mx-auto bg-gray-300'>
      <input
        type='text'
        value={name.firstName}
        onChange={(e) =>
          setName({ ...name, firstName: e.target.value })
        }
        id='firstName'
      />
      <label htmlFor='firstName'>firstName</label>
      <input
        type='text'
        value={name.lastName}
        onChange={(e) =>
          setName({ ...name, lastName: e.target.value })
        }
        id='lastName'
      />
      <label htmlFor='lastName'>Lastname</label>
      <p>your first name is {name.firstName}</p>
      <p>your last name is {name.lastName}</p>
    </form>
  )
}
export default Input
