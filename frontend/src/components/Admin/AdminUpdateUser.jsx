import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ConvertUserToAdmin } from '../../Store/CreateReducres/GetAllUserSlice'

const AdminUpdateUser = () => {
    const navigate = useNavigate()
    const [role , setRole] = useState("")
    const {id} = useParams()
    const dispatch = useDispatch()
    
    const handleupdate = async(e) =>{
        e.preventDefault()
        try{

            dispatch(ConvertUserToAdmin(id))
            navigate("/admin")
        }catch(err){
            console.log(err);
        }
    }

  return (
   <>
   
   <div style={{ margin: "2rem`  ", marginBottom: "4rem" }}>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

    <label htmlFor="role">Role</label>
    <select className="select select-bordered w-full max-w-xs" id='role'  value={role} onChange={(e) => setRole(e.target.value)}>
          <option disabled selected>user</option>
          <option value={"admin"}>admin</option>
          
        </select>

    <div>

       
        <button className='btn btn-primary w-32 mt-5' onClick={handleupdate}> Update</button>
    </div>
</div>
</div>
   
   </>
  )
}

export default AdminUpdateUser