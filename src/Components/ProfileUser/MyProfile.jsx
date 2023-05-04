import React from 'react'
import { BlogContext } from '../context'
import { useNavigate } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

const MyProfile = () => {
  let {user} = React.useContext(BlogContext)
  let navigate = useNavigate()

  return (
    <>
    <h1>Profile</h1>
    <p>Username: {user.username}</p>
    <p>Age: {user.age}</p>
    <p>City: {user.city}</p>
    <p>FullName: {user.fullname}</p>
    {
      (user.role === "ADMIN")
      ? <p>Role: {user.role}</p>
      : null
    }
    <button onClick={()=>navigate(`edit/${user.username}`,{state: user})}>Edit</button>
    <Outlet/>
  </>
  )
}

export default MyProfile