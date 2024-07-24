import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteBlogByAdmin } from '../../Store/CreateReducres/BlogSlice'

const AdminDeleteblog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(DeleteBlogByAdmin(id))
        navigate("/admin")
    },[id])
  return (
    <div>AdminDeleteblog</div>
  )
}

export default AdminDeleteblog