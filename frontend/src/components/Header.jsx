import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogimage from '../images/blogger-logo-icon-png-22.png'
import { useDispatch, useSelector } from 'react-redux'
import { Allblogdata, blogdata } from '../Store/CreateReducres/BlogSlice'
import { islogin,  logoutuser } from '../Store/CreateReducres/LoginSlice'




const Header = () => {
  const dispatch = useDispatch()
  const Allblogs = useSelector(Allblogdata)
 

  const isAuthenticated = useSelector(islogin)
 


  useEffect(() => {
    dispatch(blogdata())
  

 

  }, [])


const handleLogout = (e) =>{
  e.preventDefault()
 dispatch(logoutuser())
}

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            {
              Allblogs &&  Allblogs.map((blog , index) =>{
                return (
                  <li key={index}><Link >{blog.Category}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">Blog</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {
              Allblogs &&  Allblogs.map((blog , index) =>{
                return (
                  <li key={index}><Link >{blog.Category}</Link></li>
                )
              })
            }
        </ul>
      </div>
      <div className="navbar-end">
        {
          isAuthenticated && isAuthenticated ? (
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={"/profile"} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to={"/userdashboard"}>Settings</Link></li>
        <li><a onClick={handleLogout} >Logout</a></li>
      </ul>
    </div>
          ): (
              <Link to = { "/login" }><button className = 'btn-info'>Login</button></Link>

  )
}
        
    </div >
  </div >
  )
}

export default Header