import React, { useState } from 'react'
const Arrayy = () => {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10)
      }
    ])
  }
  return (
    <div className='w-1/2 h-64 mx-auto'>
      <button className='bg-blue-400' onClick={addItem}>
        Add a item
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}
export default Arrayy
