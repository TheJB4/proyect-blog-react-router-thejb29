import React from 'react'

import {BlogContext} from '../context/index'

const Login = () => {
  let {login} = React.useContext(BlogContext)
  
  let [data,setData] = React.useState({})

  return (
    <>
      <form onSubmit={(e)=>{
        e.preventDefault()
        login(data)
      }}>
        <input 
          type="text" 
          placeholder='username'
          onChange={(e) => setData({
            ...data,
            username: e.target.value
          })}
        />
        <input 
          type="password" 
          placeholder='password'
            onChange={(e) => setData({
            ...data,
            password: e.target.value
          })}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login