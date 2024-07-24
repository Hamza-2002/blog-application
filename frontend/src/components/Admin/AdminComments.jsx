import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllAdminComments, GetAllcomments, Status, deleteComment, error } from '../../Store/CreateReducres/GetAllCommentSlice'
import { Link } from 'react-router-dom'

const AdminComments = () => {
  const dispatch = useDispatch()
  const admincomments = useSelector(AllAdminComments)

  const loading = useSelector(Status)
  const Errors = useSelector(error)
  const [currentPage, setCurrentPages] = useState(1)

  const totalPages = Math.ceil(admincomments.length / 5)
  console.log("totalPages", totalPages);



  const handlePageChange = (newPage) => {
    setCurrentPages(newPage)
  }
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPages(currentPage + 1)
    }

  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPages(currentPage - 1)
    }
  }
  const nextDisabled = currentPage === totalPages;
  const previousDisabled = currentPage === 1;

  const itemPerPage = 5;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage
  const paginationData = admincomments.slice(startIndex, endIndex);

  return (
    <>
      {
        loading ? (
          <h1>loading</h1>
        ) : Errors ? (
          <h1>error</h1>
        ) : (
          <div className="overflow-x-auto ml-52 ">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>UserName</th>
                  <th>Blog Title</th>
                  <th>Comment</th>

                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {

                  paginationData && paginationData?.map((comment, index) => {
                    return (
                      <tr className="bg-base-200" key={index} >
                        <th>{index + 1}</th>
                        <td>{comment?.user?.username}</td>
                        <td>{comment?.blog?.title}</td>
                        <td>{comment?.content}</td>

                        <td><Link to={`/admin/delete/comment/${comment?._id}`} className='btn btn-error' >Delete</Link></td>
                      </tr>
                    )
                  })

                }

              </tbody>
            </table>
            
            <button
              onClick={handlePreviousPage}
              className='btn btn-link'
              disabled={previousDisabled}
            >prev</button>

            {
              Array.from({ length: totalPages }, (_, i) => {

                return (

                  <button
                    className="join-item btn btn-link"
                    onClick={() => handlePageChange(i + 1)}
                    disabled={i + 1 === currentPage}
                  >
                    {i + 1}
                  </button>



                )
              })
            }
            <button onClick={handleNextPage} disabled={nextDisabled} className='btn btn-link'>next</button>

          </div>
        )
      }


    </>
  )
}

export default AdminComments