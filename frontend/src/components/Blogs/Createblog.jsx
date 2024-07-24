import React, { useState, useRef } from 'react'
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';

const Createblog = () => {
  const editor = useRef(null);
  const history = useNavigate()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cat, setCat] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('cat', cat);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/v1/blog/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(response.data.message)
      history("/")
      setTitle("")
      setContent("")
      setCat("")
      setImage("")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <>
      <div>Createblog</div>
      <form action="#" className='flex justify-center items-center flex-col mb-10'>
        <label htmlFor="thumbnail" className='mt-5 mb-5 capitalize font-bold'>Thumbnail</label>
        <input type="file" className="file-input w-full max-w-xs" accept='image/jpg/png' onChange={handleFileChange} />

        <label htmlFor="title" className='mt-5 mb-5 capitalize font-bold'>title</label>
        <input type="text" placeholder="title" id={"title"} className="input input-bordered w-full max-w-xs" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="cat" className='mt-5 mb-5 capitalize font-bold'>Select Category</label>
        <select className="select select-bordered w-full max-w-xs" id='cat' value={cat} onChange={(e) => setCat(e.target.value)}>
          <option disabled selected value={"cat"}>Category</option>
          <option value={"Technology"}>Technology</option>
          <option value={"Science"}>Science</option>
          <option value={"Computer"}>Computer</option>
          <option value={"Engineering"}>Engineering</option>
        </select>

        <label htmlFor="des" className='mt-5 mb-5 capitalize font-bold'>Description</label>
        <textarea placeholder="Des" id='des' className="textarea textarea-bordered textarea-lg w-full max-w-xs" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        {/* <JoditEditor
          ref={editor}
          value={content}
         
          tabIndex={1} // tabIndex of textarea
          onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          
        /> */}

        <button className='btn btn-primary mt-5' onClick={handleSubmit}>Publish</button>

      </form>
    </>
  )
}

export default Createblog