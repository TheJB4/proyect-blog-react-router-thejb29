import React from 'react'
import { BlogContext } from '../context'

const CreateBlogPage = () => {
    let {onCreateBlog} = React.useContext(BlogContext)

    let [data,setData] = React.useState({})
    
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        onCreateBlog(data)
    }}>
        <label htmlFor="title">Titulo del blog:</label>
        <input 
            type="text" 
            placeholder='title' 
            id='title'
            onChange={(e)=>setData({
                ...data,
                title: e.target.value
            })}
            />
        <label 
            htmlFor="author">Author del blog:</label>
        <input 
            type="text" 
            placeholder='author' 
            id='author'
            onChange={(e)=>setData({
                ...data,
                author: e.target.value
            })}
            />
        <label 
            htmlFor="content">Contenido del blog:</label>
        <input 
            type="text" 
            placeholder='content' 
            id='content'
            onChange={(e)=>setData({
                ...data,
                content: e.target.value
            })}
            />
        <label htmlFor="slug">Slug del blog:(Como quieres que aparezca en la pagina: )</label>
        <input 
            type="text" 
            placeholder='que-es-react' 
            id='slug'
            onChange={(e)=>setData({
                ...data,
                slug: e.target.value
            })}
            />
        <button type='submit'>Crear</button>
    </form>
  )
}

export default CreateBlogPage