import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div
        className='spinner-border '
        Style='margin-top: 15vw; width: 3rem; height: 3rem;'
        role='status'
      >
        <span className='sr-only'></span>
      </div>
    </div>
  )
}
export default Loading
