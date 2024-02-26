import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const LoginComponent = () => {
    const {setUser}=useContext(UserContext)
  return (
    <div>LoginComponent
        <input onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default LoginComponent