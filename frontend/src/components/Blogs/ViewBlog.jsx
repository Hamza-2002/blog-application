import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from '../Comments/Comments'
import ShowComments from '../Comments/ShowComments'

const ViewBlog = () => {
  const [singleBlog, setSingleBlog] = useState({})
 
  const { id } = useParams()


  useEffect(() => {
    const func = async () => {

      const { data } = await axios.get(`/api/v1/blog/${id}/single`)
      
      setSingleBlog(data?.data)
    }
    func()
  }, [id])

  return (
    <>
      <div className='w-3/4 m-auto'>

        <div className='w-96 m-auto'>

          {

            singleBlog &&
            <img src={singleBlog?.image} alt={singleBlog?.title} className='w-full mb-10' />
          }
       
          <div>
            <h1 className='font-bold text-2xl ' >{singleBlog?.title}</h1>
            {singleBlog?.content}
          </div>
        </div>

      
      </div>


      <Comments Id={id} />


      <ShowComments Id={id}/>
    </>
  )
}

export default ViewBlog