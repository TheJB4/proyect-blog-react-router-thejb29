import React from 'react'
import {useLocation} from 'react-router-dom'
import { BlogContext } from '../context'

const EditBlog = () => {
  let location = useLocation()
  let [data,setData] = React.useState(location.state)
  
  let {onEditBlog} = React.useContext(BlogContext)

  let onSubmitEdit = (e) => {
    e.preventDefault()
    onEditBlog(data)
  }
  return (
    <form onSubmit={onSubmitEdit}>
        <label htmlFor="title">Titulo del blog:</label>
        <input 
            type="text" 
            placeholder="title" 
            defaultValue={data.title}
            id='title'
            onChange={(e)=>setData({
                ...data,
                title: e.target.value
            })}
        />
        <label htmlFor="content">Contenido del blog:</label>
        <input 
            type="text" 
            placeholder="content" 
            defaultValue={data.content}
            id='content'
            onChange={(e)=>setData({
                ...data,
                content: e.target.value
            })}
        />
        <button type='submit'>Editar</button>
    </form>
  )
}

export default EditBlog