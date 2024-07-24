import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import ReactHelemet from '../components/ReactHelemet'
import login_image from '../images/login.jpg'

import { useDispatch, useSelector } from 'react-redux';
import {  iserror, loginUser, loginUserData } from '../Store/CreateReducres/LoginSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const isError = useSelector(iserror)
    const user = useSelector(loginUserData)
    
   

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
          toast.error(isError.message);
        }
        
      }, [isError ]);
    async function handleSubmit(e) {
        e.preventDefault()
     
         dispatch(loginUser({ email, password }))
       
    }
    return (
        <>
            <ReactHelemet title="Login" image={login_image} />
            <div style={{ margin: "2rem`  ", marginBottom: "4rem" }}>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


                    <label className="input input-bordered flex items-center gap-2 w-96 mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} name='email' />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 w-96 mt-10 mb-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" value={password} placeholder='Password' name='password' onChange={(e) => setpassword(e.target.value)} />
                    </label>
                    <div>

                        <p>Already have an account <Link to={"/singup"} className='btn-link mb-5'>Singup</Link> </p>
                        <Link className='btn btn-primary w-32 mt-5' onClick={handleSubmit}> Login</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login