import React from 'react'
import { BlogContext } from '../context'

const Logout = () => {
  let {logout} = React.useContext(BlogContext)

  return (
    <>
      Estas segura que quieres salir?
      <button onClick={logout}>Aceptar</button>
    </>
  )
}

export default Logout