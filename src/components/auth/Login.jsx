import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../API';

export default function Login() {
  const initialState = { email: "", password: "" };
  const [state, setState] = useState(initialState)
  const navigate = useNavigate();
  const handleInput = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${API}/user/login`, state)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="row">
        {console.log(state)}
        <div className="col-6 offset-3">
          <form>
            <h2 className='text-center'>Login</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name='email' onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name='password' onChange={handleInput} className="form-control" id="exampleInputPassword1" required />
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
            <Link className='ml-5 btn btn-outline-info' to={"/register"}>Register</Link>
          </form>
        </div>
      </div>
    </div>
  )
}