import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { Allblogdata } from '../../Store/CreateReducres/BlogSlice';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
width:1000px;
// border:1px solid black;
.popular{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    align-items:flex-start;
    img{
        height:450px;
    }
    .category{
        font-weight:bold;
        text-transform:capitalize;
        font-size:1.5rem;
        
        span{
            font-weight:300;
            margin-left:1rem;
            color:gray;
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
             width:800px;
            text-align:center;
            color:gray;
            text-align:justify;

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
`
const RecentsCards = ({ title, content, cat, image, CardId, user, Category, updatedAt }) => {

   

    return (
        <Wrapper>

            <div className="popular">
                <img src={image} alt={title} />

                <div className="category">

                    <h1>{Category} <span>{updatedAt}</span></h1>

                </div>

                <h1>{title}</h1>

                <p>{content.slice(0,150)}</p>

                <div className="author">
                    <div className="avatar">
                        {user?.username.slice(0,2)}
                    </div>
                    <h1>{user?.username}</h1>
                </div>

            </div>
        </Wrapper>

    )
















}

export default RecentsCards