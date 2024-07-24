import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteComment } from '../../Store/CreateReducres/GetAllCommentSlice'
import { useDispatch } from 'react-redux'

const AdminDeleteComment = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch( deleteComment(id))
        navigate("/admin")
    },[])
  return (
    <div>AdminDeleteComment</div>
  )
}

export default AdminDeleteComment