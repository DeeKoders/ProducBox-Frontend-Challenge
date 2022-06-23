import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
const Item = (props) => {
  const { setCart } = useContext(LoginContext)
  let products = []
  const handleClick = (e) => {
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'))
    }
    products.push(props)

    localStorage.setItem('products', JSON.stringify(products))

    setCart(products)
  }

  return (
    <div class='col-md-6 col-lg-4 mb-4 mb-md-0 py-3 '>
      <div class='card border border-dark' Style='border-radius:10px'>
        <div class='d-flex justify-content-between p-3 bg-dark text-light '>
          <p class='lead mb-0'>Product ID: {props.id}</p>
          <p class='lead btn btn-outline-light mb-0' onClick={handleClick}>
            Add to Cart{' '}
          </p>
        </div>
        <img
          src={'http://localhost:3001/' + props.img}
          Style='height:350px'
          class='border-top border-1 border-dark card-img-top'
          alt='Gaming Laptop'
        />
        <div class='card-body'>
          <div class='d-flex justify-content-between mb-3'>
            <h5 class='mb-0'>{props.name}</h5>
            <h5 class='text-dark mb-0'>${props.price}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
