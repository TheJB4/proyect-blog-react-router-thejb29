import React from "react";

const BlogContext = React.createContext()

import { rutes } from "../../data/rutes";
import {usersData} from "../../data/users";
import { blogData } from "../../data/blogdata";
import { useNavigate } from "react-router-dom";


function BlogProvider({children}){
    let [users,setUsers] = React.useState(usersData)
    let [user,setUser] = React.useState(null)
    let [blogs,setBlogs] = React.useState(blogData)
    let navigate = useNavigate()

    function login(data){
        let user = users.find(user => data.username === user.username)

        if(user){
            console.log('El usuario tiene el rol:', user.role)
            setUser(user)
        }else{
            let newUser = {
                username: data.username,
                password: data.password,
                role: 'VISITOR',
                age: '',
                fullname: '',
                city: ''
            }
            setUsers([
                ...users,
                newUser
            ])
            setUser(newUser)
        }

        navigate('/myprofile')
    }

    function logout(){
        setUser(null)
        navigate('/login')
    }

    function onEdit(data,nameToEdit){
        let newPropsUser = [...users]

        let newUserUpdated = newPropsUser.map(userr => {
            console.log(user.role)
            if(userr.username === nameToEdit){
                if(user.role !== "ADMIN"){
                    userr.username = data.username
                    userr.age = data.age
                    userr.fullname = data.fullname
                    userr.city = data.city
                }
                if(user.role === "ADMIN"){
                    console.log('CAMBIANDO EL USUARIO A ADMIN')
                    userr.username = data.username
                    userr.age = data.age
                    userr.fullname = data.fullname
                    userr.city = data.city
                    userr.role = data.role
                }
            }
            return userr
        })
        console.log(newUserUpdated)
 
        setUsers(newUserUpdated)
    }

    function onEditBlog(data){
        let oldListBlogs = [...blogs]
        let newListBlogs = oldListBlogs.map(blog => {
            if(blog.slug === data.slug){
                blog.title = data.title,
                blog.content = data.content
            }

            return blog
        })
        setBlogs(newListBlogs)
        navigate(`/blogs`)
    }

    function onCreateBlog(data){
        setBlogs([
            ...blogs,
            data
        ])
    }

    const context = {
        rutes,
        login,
        logout,
        users,
        user,
        blogs,
        onEdit,
        onEditBlog,
        onCreateBlog
    }
    
    return (
        <BlogContext.Provider value={context}>
            {children}
        </BlogContext.Provider>
    )
}


export {
    BlogProvider,
    BlogContext
}