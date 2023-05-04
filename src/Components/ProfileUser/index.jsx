import React from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'
import { BlogContext } from '../context'

import ProtectRoute from '../ProtectdRoutes'

const ProfileUser = () => {
  let params = useParams()
  let userName = params.user
  let location = useLocation()
  let navigate = useNavigate()

  console.log(location)
  //Tira null si el usuario no esta registrado
  let {user,users} = React.useContext(BlogContext)
  
  if(user){
    let path = '/profiles/'
    let userName = location.pathname.substring(path.length)
    let viewUser = users.find(user => user.username === userName)

    let userView = viewUser
    return (
      <>
        <h1>Profile</h1>
        <p>Username: {userView.username}</p>
        <p>Age: {userView.age}</p>
        <p>City: {userView.city}</p>
        <p>FullName: {userView.fullname}</p>
        <p>Role: {userView.role}</p>
        {user.role === "ADMIN" ? <button onClick={()=>navigate(`/myprofile/edit/${user.username}`,{state: userView})}>Edit</button> : <></>}
      </>
    )
  }else{
    let userView = location.state.user 
    return(
      <>
        <h1>Conectate con {userName} para ver mas!</h1>
        <p>Username: {userView.username}</p>
        <p>Age: {userView.age}</p>
        <p>FullName: {userView.fullname}</p>
      </>
    )
  }
}

export default ProfileUser