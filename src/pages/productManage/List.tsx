import React, { useEffect, useState } from 'react'
import api from '../../service/product';

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    api.getProductList().then(res => {
      console.log(res)
    })

  }, [])
  return (
    <div>List</div>
  )
}

export default List