import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../API';

export default function Main() {
  const [product, setProduct] = useState([]);
  const [addToCard, setAddToCard] = useState([])
  useEffect(() => {
    axios.
      get(`${API}/api/products`, { headers: { Authorization: localStorage.getItem("token") } })
      .then(res => {
        // console.log(res);
        setProduct(res.data.products)
      })
      .catch(err => console.log(err))
  }, [])

  const addToCart = (id) => {
    // setAddToCard(...addToCard, findItem(id))
    findItem(id)
    // console.log(product);
  }
  const findItem = (id) => {
    let obj = {};
    product.forEach(item => {
      if (item._id === id) obj = item;
    });
    setAddToCard(addToCard=>[
      ...addToCard,obj
    ])
    // console.log(obj);
  }

  return (
    <div className='container-fluid'>
      <h1>Products</h1>
      {console.log(addToCard)}
      <div className="row">
        {product ? (product.map((item, index) => (
          <div className="col-4 my-2" key={index}>
            <div className="card">
              <div className="card-body">
                <img src={item.images.url} className="w-100" style={{ height: 200, objectFit: 'cover' }} alt="" />
              </div>
              <div className="card-body">
                <p><b>Name: </b>{item.title}</p>
                <p><b>Description: </b>{item.description}</p>
              </div>
              <div className="card-footer">
                <button className='btn btn-success' onClick={() => addToCart(item._id)} >Add to card</button>
              </div>
            </div>
          </div>
        ))) : "Loading..."}
      </div>
    </div>
  )
}
