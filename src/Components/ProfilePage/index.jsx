import React from 'react'

import { BlogContext } from '../context'
import { Link,Outlet } from 'react-router-dom'

const ProfilePage = () => {
  let {users,user} = React.useContext(BlogContext)

  if(user.role != 'VISITOR'){
    return (
      <div>
          <h4>Lista de usuarios registrados:</h4>
          <ol>
            {users.map(user => (
              <li key={user.username}>
                <Link to={`/profiles/${user.username}`} state={{user}}>{user.username}</Link>
              </li>
            ))}
          </ol>
        <Outlet/>
      </div>
    )
  }
  return <Outlet/>
}

export default ProfilePage