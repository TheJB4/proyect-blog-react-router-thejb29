import React from 'react'

import {BlogContext} from '../context/index'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  let {rutes,user} = React.useContext(BlogContext)
  
  return (
    <>
      <ul>
        {rutes.map(rute => {
            if(!user && rute.slug === "logut") return null
            if(!user && rute.slug === "profiles") return null
            if(user?.role !== "ADMIN" && rute.slug === "profiles") return null
            if(!user && rute.slug === "myprofile") return null
            if(user && rute.slug === "login") return null
            return (
              <li key={rute.slug}>
                <NavLink 
                  to={rute.to}
                  style={({isActive})=> isActive ? {color:'red'} : {color:'blue'}}
                >
                  {rute.slug}
                </NavLink>
              </li>)
        })}
      </ul>
    </>
  )
}

export default Menu