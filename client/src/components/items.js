import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './item'

import Loading from './loading'
import { Link, useNavigate } from 'react-router-dom'
function Items() {
  let navigate = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const res = await axios.get('http://localhost:3001/items')
      setData(res.data)
      setLoading(false)
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loading />

  return (
    <div className='container'>
      <div className='col py-4'>
        <div className='row justify-content-between bg-dark py-3 mb-5'>
          <ol class='breadcrumb col-4 px-3'>
            <li class='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Available Items
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
          <h1 className='fs-2 fw-bold text-light text-uppercase'>
            Available Items
          </h1>
          <hr className='py-1 text-light' />
        </div>
        <div className='container-fluid'>
          <section className=' row justify-content-between py-2 '>
            {data.map((i) => {
              return <Item key={i.id} {...i} />
            })}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Items
