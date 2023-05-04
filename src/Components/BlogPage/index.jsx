import React from 'react'
import { BlogContext } from '../context'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'

const BlogPage = () => {
  let {blogs} = React.useContext(BlogContext)
  let navigate = useNavigate()
  return (
    <>
      {blogs.map(blog => (
          <li key={blog.slug}>
            <NavLink 
              to={blog.slug}
              style={({isActive})=> isActive ? {color:'red'} : {color:'blue'}}
              state={blog}
            >
              {blog.title}
            </NavLink>
          </li>
      ))}
      <button onClick={()=>navigate('createblog')}>Create a blog</button>
    <Outlet/>
    </>
  )
}

export default BlogPage