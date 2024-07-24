import axios from 'axios'
import React, { useState } from 'react'

import { toast } from 'react-toastify'

const Comments = ({Id}) => {
    
    const [content , setComment] = useState("")
   
    const handleClick = (e) =>{
        e.preventDefault()
        const data = {
             content,
            blogid : Id
        }
      
            try {
                axios.post(`/api/v1/comment/post` , data).then((response) => toast.success(response.data.message) )
              setComment("")
            } catch (error) {
               
            //    toast.error( error.response.data.message)
            console.log(error);
            }
    
    }
  return (
    <>
    
        <div>
            <form action="#">
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder='Add comment' value={content} onChange={(e) => setComment(e.target.value)}></textarea> <br />
            
                <button className='btn btn-success' onClick={handleClick}>comment</button>
            </form>
        </div>
    </>
  )
}

export default Comments