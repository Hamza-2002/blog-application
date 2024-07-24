import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetSingleBlog, getSingleblog } from '../Store/CreateReducres/UserBlogsSlice'

const BlogUpdateWhichCreatedByUser = () => {
  const singleblog = useSelector(GetSingleBlog)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getSingleblog(id))
 },[])
  return (
    <>

      <form action="#" className='flex justify-center items-center flex-col mb-10'>
        <label htmlFor="thumbnail" className='mt-5 mb-5 capitalize font-bold'>Thumbnail</label>
        <input type="file" className="file-input w-full max-w-xs" accept='image/jpg/png'  />

        <label htmlFor="title" className='mt-5 mb-5 capitalize font-bold'>title</label>
        <input type="text" placeholder="title" id={"title"} className="input input-bordered w-full max-w-xs"  value={singleblog?.title} />

        <label htmlFor="cat" className='mt-5 mb-5 capitalize font-bold'>Select Category</label>
        <select className="select select-bordered w-full max-w-xs" id='cat' value={singleblog?.Category} >
          <option disabled selected value={"cat"}>Category</option>
          <option value={"Technology"}>Technology</option>
          <option value={"Science"}>Science</option>
          <option value={"Computer"}>Computer</option>
          <option value={"Engineering"}>Engineering</option>
        </select>

        <label htmlFor="des" className='mt-5 mb-5 capitalize font-bold'>Description</label>
        <textarea placeholder="Des" id='des' className="textarea textarea-bordered textarea-lg w-full max-w-xs" value={singleblog?.content} ></textarea>

        <button className='btn btn-primary mt-5'>Update</button>

      </form>
    </>
  )
}

export default BlogUpdateWhichCreatedByUser