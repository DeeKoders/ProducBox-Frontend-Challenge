import React from 'react'
const CheckItem = (props) => {
  return (
    <tr>
      <th scope='col-1'>{props.id}</th>
      <th scope='col-3'>{props.name}</th>
      <th scope='col-3'>{props.price}</th>
      <th scope='col-3'>
        <img
          width={70}
          height={50}
          src={'http://localhost:3001/' + props.img}
          alt=''
        />
      </th>
    </tr>
  )
}

export default CheckItem
