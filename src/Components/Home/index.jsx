import React from 'react'
import { BlogContext } from '../context'

const Home = () => {
  let {nombre} = React.useContext(BlogContext)
  return (
    <h1>Home {nombre}</h1>
  )
}

export default Home