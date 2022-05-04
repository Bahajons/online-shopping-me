import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';

export default function History() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.
      get(`${API}/user/getHistory`, { headers: { Authorization: localStorage.getItem("token") } })
      .then(res => {
        console.log(res);
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h1>History</h1>
      {console.log(product.products)}
    </div>
  )
}
