import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import CheckItem from './checkItem'

function Checkout() {
  const { cart, setCart } = useContext(LoginContext)
  console.log(cart)
  let navigate = useNavigate()
  return (
    <div className='container'>
      <div className='col py-4'>
        <div className='row justify-content-between bg-dark py-3 mb-5'>
          <ol class='breadcrumb col-4 px-3'>
            <li class='breadcrumb-item'>
              <a href='/' className=''>
                Home
              </a>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Checkout
            </li>
          </ol>
          <form className='d-flex col-4'>
            <input
              className='form-control me-2'
              type='search'
              id='sear'
              placeholder='Search'
              aria-label='Search'
            />

            <button
              className='btn btn-dark'
              type='submit'
              onClick={() => {
                var myText = document.getElementById('sear').value
                navigate('/search/BirdsInformation/' + myText)
              }}
            >
              Search
            </button>
          </form>
        </div>

        <div>
          <h1 className='fs-2 fw-bold text-light text-uppercase'>Checkout</h1>
          <hr className='py-1 text-light' />
        </div>
        <div
          className='container  px-5 bg-light bg-opacity-50 py-2 '
          Style='overflow:scroll;height:50vh'
        >
          <table className='table'>
            <thead>
              <tr>
                <th scope='col-1'>Product ID</th>
                <th scope='col-3'>Name</th>
                <th scope='col-3'>Price</th>
                <th scope='col-3'>Image</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i) => {
                return <CheckItem key={i.id} {...i} />
              })}
            </tbody>
          </table>
        </div>
        <div className='d-flex justify-content-center  my-4'>
          <h1 className='text-light fw-bold fs-5 my-4 text-center px-5'>
            You Have {cart.length} Items for Checkout
          </h1>
          <button
            className='fw-bold btn btn-outline-light'
            onClick={() => {
              setCart([])
              localStorage.removeItem('products')
            }}
          >
            Clear Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
