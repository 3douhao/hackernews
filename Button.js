import React, { Children } from 'react'
const Button = props => {
  console.log(`rendering ${props.children}`)
  return (
    <button
      className='bg-blue-500'
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  )
}
export default React.memo(Button)
