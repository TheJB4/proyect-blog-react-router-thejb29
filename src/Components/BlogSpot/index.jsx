import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { BlogContext } from '../context'

const BlogSpot = () => {
  let {user} = React.useContext(BlogContext)
  let navigate = useNavigate()
  let data = useLocation().state
  let {author,content,title} = data
  let canEdit = author === user.username;
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{content}</p>

      {
        (user.role === "ADMIN" || canEdit) ?
           <button 
              onClick={()=>navigate('edit',{state:data})}
            >
            Edit
            </button> : null
      }
    </>
  )
}

export default BlogSpot