import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteSingleUser } from '../../Store/CreateReducres/GetAllUserSlice'

const AdminDeleteUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(DeleteSingleUser(id))
        navigate("/admin")
    },[id])
        
  return (
    <div>AdminDeleteUser</div>
  )
}

export default AdminDeleteUser