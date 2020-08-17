import React from 'react'

function Salary(props) {
  console.log(`rendering ${props.salary}`)
  return <div>Salary: {props.salary}</div>
}

export default React.memo(Salary)
