import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';

export default function Products() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.
      get(`${API}/api/products`, { headers: { Authorization: localStorage.getItem("token") } })
      .then(res => {
        console.log(res);
        setCategory(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h1>Kategory</h1>
      {console.log(category)}
      {category.map((item, index) => (
        <div className='p-2 my-2 border bg-light' key={index}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}
