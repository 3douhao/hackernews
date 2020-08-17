import React from 'react'

function Age(props) {
  console.log(`rendering ${props.age}`)
  return <div>Age: {props.age}</div>
}

export default React.memo(Age)
