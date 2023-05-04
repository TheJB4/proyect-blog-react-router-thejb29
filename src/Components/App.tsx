import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'

import Home from './Home'
import Menu from './Menu'
import Login from './Login'
import BlogPage from '../Components/BlogPage'
import BlogSpot from './BlogSpot'
import ProfileUser from './ProfileUser'
import ProfilePage from './ProfilePage'
import Logout from './Logout'
import MyProfile from './ProfileUser/MyProfile'
import EditBlog from './BlogSpot/EditBlog'
import CreateBlogPage from './BlogPage/CreateBlogPage'

import FormEdit from './FormEdit/'

import ProtectRoute from './ProtectdRoutes'
import {BlogProvider} from './context/index.jsx'


function App() {

  return (
    <HashRouter>
      <BlogProvider>
        <Menu/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='myprofile' element={<MyProfile/>}>
              <Route path="edit/:username" element={<FormEdit/>}/>
          </Route>
          <Route path="/blogs" element={<BlogPage/>} >
            <Route path="createblog" element={<ProtectRoute><CreateBlogPage/></ProtectRoute>}/>
              <Route path=":slug" element={<BlogSpot/>}/>
              <Route path=":slug/edit" element={<ProtectRoute><EditBlog/></ProtectRoute>}/>
          </Route>
          <Route path="/profiles" element={
            <ProtectRoute>
              <ProfilePage/>
            </ProtectRoute>
          }>
              <Route 
                path=':user' 
                element={
                <ProtectRoute>
                  <ProfileUser />
                </ProtectRoute>
                }/>
          </Route>
        </Routes>
      </BlogProvider>
    </HashRouter>
  )
}

export default App
