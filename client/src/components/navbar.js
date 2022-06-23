import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

const Navbar = (props) => {
  let navigate = useNavigate()
  const { cart } = useContext(LoginContext)
  return (
    <nav className='navbar navbar-scroll container navbar-expand-lg navbar-light  text-uppercase border-bottom '>
      <a className='col text-light  fs-4 fw-bold navbar-brand' href='/'>
        RandoStore
      </a>
      <button
        onClick={() => {
          navigate('/checkout')
        }}
        type='button'
        class='btn position-relative'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='white'
          class='bi bi-cart'
          viewBox='0 0 16 16'
        >
          <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
        </svg>
        <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
          {cart.length > 0 ? cart.length : 0}
        </span>
      </button>
    </nav>
  )
}
export default Navbar
