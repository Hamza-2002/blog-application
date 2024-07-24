import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Allblogdata, DeleteBlogByAdmin } from '../../Store/CreateReducres/BlogSlice'
import { Link } from 'react-router-dom'

const AdminBlog = () => {
  const blogs = useSelector(Allblogdata)
  const [currentPage , setCurrentPage] = useState(1)
  const totalPage = Math.ceil(blogs.length/5);

  const handlePageChange = (newPage) =>{
    setCurrentPage(newPage)
  }

  const handleButton = () =>{
  if(currentPage < totalPage){
  
    setCurrentPage(currentPage +1)
  }
  
  }

  const handlePreviousButton = () =>{
    if(currentPage >1){
      setCurrentPage(currentPage -1)
    }
  }

  const nextDisabled = totalPage === currentPage;
  const previousDisabled = currentPage === 1;
  const totalItemPerPage = 5;

  const startIndex = (currentPage -1) * totalItemPerPage;
  const endIndex = startIndex + totalItemPerPage

  


  return (
    <>
      <div className="overflow-x-auto ml-52">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>title</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              blogs && blogs.slice(startIndex , endIndex).map((ele , index) => {
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
                          <div className="text-sm opacity-50">{ele.user ? ele.user.email.slice(0,5) : "hamza@"}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {ele.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">{ele.Category}</span>
                    </td>
                    <td>{ele.content.slice(0,20)}...</td>
                    <th>
                      <Link to={`/admin/delete/blog/${ele._id}`} className="btn btn-error  btn-sm" >Delete</Link>
                    </th>
                  </tr>
                )
              })


            }
           
          </tbody>
          {/* foot */}


        </table>
            <button onClick={handlePreviousButton} disabled={previousDisabled} className='btn btn-link' >
              Previous
            </button>
            {
              Array.from({length:totalPage} , (_, i) =>{
                return (
                  <button className='btn btn-link' onClick={() => handlePageChange(i+1)} disabled={currentPage === i+1} >
                    {i+1}
                  </button>
                )
              })
            }


            <button onClick={handleButton} disabled={nextDisabled} className='btn btn-link'> Next </button>

      </div>

    </>
  )
}

export default AdminBlog