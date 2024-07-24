
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import Singup from './pages/Singup'
import AdminPanel from './components/Admin/AdminPanel'
import Createblog from './components/Blogs/Createblog'
import PageNotFound from './components/PageNotFound'
import AdminUser from './components/Admin/AdminUser'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/PrivateRoute'

import ViewBlog from './components/Blogs/ViewBlog'
import UserProfile from './components/UserProfile'
import UserDashboard from './components/UserDashboard'
import AdminUpdateUser from './components/Admin/AdminUpdateUser'
import AdminDeleteUser from './components/Admin/AdminDeleteUser'
import AdminDeleteblog from './components/Admin/AdminDeleteblog'
import BlogUpdateWhichCreatedByUser from './components/BlogUpdateWhichCreatedByUser'
import AdminDeleteComment from './components/Admin/AdminDeleteComment'
import UserDeleteblog from './components/Users/UserDeleteblog'
import { useSelector } from 'react-redux'
import { islogin } from './Store/CreateReducres/LoginSlice'
import NewCategories from './components/Blogs/Category/NewCategories'

function App() {
  const isAuthenticated = useSelector(islogin)


  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        
        <Header />
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {

          }
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/createblog' element={<PrivateRoute />} >

            <Route path='user' element={<Createblog />} />
          </Route>
          <Route path='/:id/single' element={<ViewBlog />} />
          <Route path='/profile' element={<UserProfile />} />
          
          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/udpate/user/blog/:id' element={<BlogUpdateWhichCreatedByUser />} />
          <Route path='/user/delete/blog/:id'  element= {<UserDeleteblog />} />

          {/* amdin Routes */}

          <Route path='/admin' element={<AdminPanel />} />

          <Route path='/admin/user' element={<AdminUser />} />
          <Route path='/admin/update/user/:id' element={<AdminUpdateUser />} />
          <Route path='/admin/delete/user/:id' element={<AdminDeleteUser />} />
          <Route path='/admin/delete/blog/:id' element={<AdminDeleteblog />} />
          <Route path='/admin/delete/comment/:id' element={<AdminDeleteComment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
