import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@primer/octicons-react'

const AddItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [img, setImg] = useState('')
  let navigate = useNavigate()
  const onChangeFile = (e) => {
    setImg('./img/' + e.target.files[0].name)
  }
  const changeOnClick = (e) => {
    e.preventDefault()
    let data = {
      id: 0,
      name: name,
      price: price,
      img: img,
    }
    console.log(data)
    axios.post('http://localhost:3001/items/', data).catch((err) => {})
    window.location = '/addItems'
  }

  return (
    <div className='container'>
      <div className='row my-3 mb-5'>
        <div class='btn  btn-outline-dark d-flex border border-dark rounded-pill text-light col-2 justify-content-center p-3'>
          <ArrowLeftIcon size={24} />
          <h1 className='fs-5 px-2 fw-bold'>Goto Home</h1>
        </div>
        <h1 className='text-center col fs-1 fw-bold text-light '>
          Add Items to Database
        </h1>
      </div>
      <form
        className='row g-3 mb-3 bg-white bg-opacity-75 py-4 mx-5 px-5 border border-dark'
        onSubmit={changeOnClick}
        encType='multipart/form-data'
      >
        <div className='col-md-6'>
          <label for='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter Name of the Product'
            onChange={(e) => {
              setName(e.target.value)
            }}
            className='form-control'
            id='name'
          />
        </div>
        <div className='col-md-6'>
          <label for='price' className='form-label'>
            Price
          </label>
          <input
            type='number'
            placeholder='Enter Price(in Dollars)'
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            className='form-control'
            id='price'
          />
        </div>
        <div className='col-md-6'>
          <h1>Image</h1>
          <input
            type='file'
            className='form-control-file'
            filename='imageItem'
            onChange={onChangeFile}
          />
        </div>
        <br />

        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Add Item
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddItem
