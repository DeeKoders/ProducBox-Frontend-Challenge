import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container text-light'>
      <div Style='min-height:35vh'>
        <h1 className='row justify-content-center fs-1 fw-bold text-uppercase my-5 text-light'>
          Welcome to RandoStore
        </h1>
        <hr className='' Style='height:10px' />
      </div>

      <div className='col d-flex justify-content-evenly'>
        <Link
          className='p-5 text-light btn btn-primary fw-bold fs-4'
          aria-current='page'
          to='/addItems'
        >
          Put Items up for Sale
        </Link>
        <Link
          className='p-5 text-light btn btn-danger fw-bold fs-4 '
          aria-current='page'
          to='/browseItems'
        >
          Browse our Items!
        </Link>
        <Link
          className='p-5 text-light btn btn-success fw-bold fs-4'
          aria-current='page'
          to='/checkout'
        >
          Check out
        </Link>
      </div>
    </div>
  )
}

export default Home
