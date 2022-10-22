import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/User'

const Login = () => {
  const dispatch = useDispatch()

  const themeColor = useSelector(state => state.theme.value)


  return (
    <>

      <div style={{backgroundColor: themeColor}}>
        lorem ipsum do molir aoeuuue loajheuy
        <button onClick={() => {
          dispatch(login({ name: 'ade', age: 30, email: 'ade1712@gmail.com' }))
        }}>Login</button>

        <button onClick={() => {
          dispatch(logout())
        }}>Logout</button>
      </div>

    </>

  )
}

export default Login