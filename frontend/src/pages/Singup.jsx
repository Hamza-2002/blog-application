import React, { useState } from 'react'
import ReactHelemet from '../components/ReactHelemet'
import singup_image from '../images/singup.jpg'
import { Link  , useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Singup = () => {
  const history = useNavigate()

  const [username , Setusername] = useState("")
  const [email , Setemail] = useState("")
  const [password , Setpassword] = useState("")


  
  const hanldeClick = async(e) =>{
    e.preventDefault()

   try {
    const response = await  axios.post(`/api/v1/user/register` , {username , email , password})
     
   
    

    toast.success(response.data.message)
    Setusername("")
    Setemail("")
    Setpassword("")
    history("/login")
   } catch (error) {
    
    toast.error(error.response.data.message);
  
  }
  
  }

  return (
    <>
      <ReactHelemet title="Singup" image={singup_image} />

      <div style={{ margin: "2rem`  ", marginBottom: "4rem" }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


          <label className="input input-bordered flex items-center gap-2 mt-5 mb-4 w-96">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="Username" value={username} onChange={(e)=> Setusername(e.target.value)} />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-5 mb-5 w-96">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email"  value={email} onChange={(e)=> Setemail(e.target.value)}/>
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-5 mb-5 w-96">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder='Password' value={password} onChange={(e)=> Setpassword(e.target.value)} />
          </label>
        

          <div>

            <p>Don't have any Account then <Link to={"/login"} className='btn-link mb-5'>Login</Link> </p>
            <Link className='btn btn-primary w-32 mt-5' onClick={hanldeClick} > Register</Link>
          </div>
        </div>
      </div>
    <ToastContainer />
    </>
  )
}

export default Singup