import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import History from '../components/History'
import Main from '../components/Main'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" index element={<Main />} />
        <Route path="/history"  element={<History />} />
      </Routes>
    </>
  )
}