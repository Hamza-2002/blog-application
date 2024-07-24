
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllUsers, GetAllUsers } from '../../Store/CreateReducres/GetAllUserSlice'
import {Link} from 'react-router-dom'
import { GetAllcomments } from '../../Store/CreateReducres/GetAllCommentSlice'

const AdminUser = () => {
  const  Users = useSelector(AllUsers)
  
  
 const disptach = useDispatch()

  useEffect(() =>{
    disptach(GetAllUsers())

    disptach(GetAllcomments())
  },[])

  return (
    <>
      <div className="overflow-x-auto ml-52 ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              
              Users  && Users?.data?.map((user, index) =>{
                return (
                  <tr className="bg-base-200" key={index} >
                  <th>{index +1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td><Link to={`/admin/update/user/${user._id}`} className='btn btn-success'>Update</Link></td>
                  <td><Link to={`/admin/delete/user/${user._id}`} className='btn btn-error' >Delete</Link></td>
                </tr>
                )
              })
             
            }
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminUser