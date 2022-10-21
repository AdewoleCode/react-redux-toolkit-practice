import React from 'react'

import { useDispatch } from 'react-redux'
import { login, logout } from '../features/User'

const Login = () => {
  const dispatch = useDispatch()


  return (
    <>
      <button onClick={() => {
        dispatch(login({ name: 'ade', age: 30, email: 'ade1712@gmail.com' }))
      }}>Login</button>

      <button onClick={() => {
        dispatch(logout())
      }}>Logout</button>
    </>

  )
}

export default Login