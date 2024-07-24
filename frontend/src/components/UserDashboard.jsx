import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { BlogsWhichCreatedUser, loginUserblogs } from '../Store/CreateReducres/UserBlogsSlice'





const UserDashboard = () => {
  const dispatch = useDispatch()
  const Usersblog = useSelector(BlogsWhichCreatedUser)
 
  useEffect(() =>{
    dispatch(loginUserblogs())
  },[])

  return (
    <>
    <div className="overflow-x-auto ml-52 mb-52 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>title</th>
              <th>Content</th>
              <th>update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              Usersblog &&  Usersblog.map((ele , index) => {
                return (
                  <tr key={index}>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={ele.image} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{ele.user ? ele.user.username : "Hamza"}</div>
                          <div className="text-sm opacity-50">{ele.user ? ele.user.email : "hamza@"}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {ele.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">{ele.Category}</span>
                    </td>
                    <td>{ele.content.slice(0,20)}...</td>
                    <td> <Link to={`/udpate/user/blog/${ele._id}`} className="btn btn-accent btn-sm">update</Link> </td>
                    <th>
                      <Link to={`/user/delete/blog/${ele._id}`} className="btn btn-error  btn-sm" >Delete</Link>
                    </th>
                  </tr>
                )
              }).filter((title) => title)
             
            }
           
          </tbody>
          {/* foot */}


        </table>
      </div>

    </>
  )
}

export default UserDashboard