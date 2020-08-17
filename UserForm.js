import React from 'react'
import useInput from './useInput'

function UserForm() {
  const [
    firstName,
    firstNameBind,
    resetFirstName
  ] = useInput('')
  const [lastName, lastNameBind, resetLastName] = useInput(
    ''
  )

  const submitHandler = e => {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <form onSubmit={submitHandler}>
      <input type='text' {...firstNameBind} />
      <p>{firstName}</p>
      <input type='text' {...lastNameBind} />
      <p>{lastName}</p>
      <button>submit</button>
    </form>
  )
}

export default UserForm
