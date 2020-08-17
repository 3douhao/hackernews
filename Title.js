import React from 'react'

function Title() {
  console.log('rending title')
  return (
    <div className='text-5xl text-blue-500'>
      useCallback
    </div>
  )
}

export default React.memo(Title)
