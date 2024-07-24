import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UserDeleteBlog } from '../../Store/CreateReducres/UserBlogsSlice'

const UserDeleteblog = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() =>{
        dispatch(UserDeleteBlog(id))
        history("/user")
    },[])
  return (
    <div>UserDeleteblog</div>
  )
}

export default UserDeleteblog