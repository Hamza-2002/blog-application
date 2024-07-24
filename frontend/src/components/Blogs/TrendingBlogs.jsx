import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import blogimage from '../../images/blog-grid-13.jpg'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
const Wrapper = styled.div`

width:1100px;
margin:auto;
// border:1px solid black;
padding:1rem;
.slider{
    display:flex;
   
    gap:2rem;
    .image{
        width:500px;
        img{
            width:100%;
            border-radius:10px;
        }
    }
    .blog-body{
        display:flex;
        justify-content:center;
        align-items:flex-start;
        flex-direction:column;
        gap:0.7rem;

        .category{
            font-weight:bold;
            text-transform:capitalize;
            font-size:1.7rem;
            
            span{
                font-weight:300;
                margin-left:1rem;
                color:gray;
            }
        }

        .title-des{
            width:500px;
          
            
            h1{
                font-weight:bolder;
                font-size:2rem;
                text-transform:capitalize;
                margin-bottom:1rem;
                line-height:2rem;
                text-align:left;
            }
            p{
                // width:500px;
                text-align:center;
                color:gray;
                text-align:justify;

            }
        }
        .author{
            align-self:flex-start;
            display:flex;
            align-items:center;
            gap:1rem;

            .avatar{
                width:30px;
                height:30px;
                border:1px solid gray;
                border-radius:50%;
                display:flex;
                justify-content:center;
                align-items:center;
                font-weight:bold;
                color:white;
                background-color:gray;
            }
            h2{
                font-weight:bolder;
                text-transform:capitalize;
                font-size:1.4rem;
            }
        }

        
    }
}
@media (max-width:800px){
    .slider{
        
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
`
const TrendingBlogs = ({ title, content, cat, image, CardId, user, Category ,updatedAt}) => {

  

    return (
        <Wrapper>

<Link to={`/${CardId}/single`} >


                <div className='slider'>

                    <div className="image">
                        <img src={image} />
                    </div>

                    <div className="blog-body">
                        <div className="category">
                            <h2>{Category} <span>{updatedAt}</span></h2>

                        </div>

                        <div className="title-des">
                            <h1>{title}</h1>
                            <p>{content.slice(0,150)}...
                            </p>
                        </div>
                        <div className='author'>

                            <div className="avatar">
                              {user.username.slice(0,2)}
                            </div>
                            <h2>{user?.username}</h2>
                        </div>
                    </div>

                </div>
         
</Link>
        </Wrapper>
    )
}

export default TrendingBlogs