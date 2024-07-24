import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items:center;
gap:2rem;

img{
  width:100%;
  border-radius:3%;
}
.categories{
  margin-top:1rem;
  h2{

    font-weight:bold;
    text-transform:capitalize;
    
  }
  span{
    margin-left:1rem;
    font-weight:400
  }
}

h1{
  margin:0.5rem 0;
  font-weight:bolder;
  text-transform:capitalize;
  font-size:1.2rem;
  line-height:1.5rem;
  
}

p{
  font-size:0.9rem;
  color:gray;
  margin-bottom:0.5rem;
  text-align:left;
}
.author{
  display:flex;
  align-items:center;
  gap:1rem;
  
  .avatar{
    width:30px;
    height:30px;
    border:1px solid black;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:gray;
    color:white;
    text-transform:capitalize;
    font-weight:bolder;
  }
  h2{
    font-weight:bolder;
    text-transform:capitalize;
  }

}

`

const Card = ({ title, content, cat, image, CardId  , user ,Category ,updatedAt}) => {

 
  return (
    <Wrapper>
      <Link to={`/${CardId}/single`} >

        <img src={image} alt={title} />
        <div className="categories" >
          <h2 >
            {Category}
            <span>{updatedAt}</span>
          </h2>

        </div>

        <h1>{title} </h1>
        <p>{content.slice(0,150)}...</p>


          <div className='author'>

            <div className="avatar">
              {user?.username.slice(0,2)}
            </div>
            <h2>{user?.username}</h2>
          </div>




      </Link>
    </Wrapper>


  )
}

export default Card