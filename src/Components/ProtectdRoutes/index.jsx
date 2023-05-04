import React from 'react'
import { BlogContext } from '../context'
import { Navigate, useLocation} from 'react-router-dom'

const ProtectRoute = ({children}) => {
    let {user} = React.useContext(BlogContext)
    let location = useLocation()

    if(!user) return <Navigate to={'/login'}/>
    //if(user.role === "VISITOR") return children
    
    // if(user.role === "VISITOR" && location.pathname.includes("/profile/")){
    //     let path = '/profile/'
    //     let userName = location.pathname.substring(path.length)
    //     let viewUser = users.find(user => user.username === userName)

    //     if(viewUser){
    //         console.log('EL USUARIO ES',viewUser,'PASAR LA DATA AL COMPONENTE PROFILEUSER')
    //         navigate(`/profile/${viewUser.username}`,{state: viewUser})
    //         //return <Navigate to={`/profile/${viewUser.username}`} state={{user}}/>
            
    //     }else{
    //         return <h1>El usuario no existe en esta red social</h1>  
    //     }
    // }

    
    if(user.role === "ADMIN" && !(user.role === "VISITOR")){
        return children
    }

    if(user.role !== "VISITOR"){
        console.log(user.role)
        return children
    }

    if(user.role !== "ADMIN" && user.role !== "EDITOR"){
        if(user.role === "VISITOR" && location.pathname === "/profiles"){
            console.log(location.pathname)
            return <p>No tienes acceso</p>
        }    
    }

    if(user) return children
}

export default ProtectRoute