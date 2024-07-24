import React from 'react'
import styled from 'styled-components'
import blogimage from '../../../images/blog-grid-13.jpg'
import logo from '../../../images/blogger-logo-icon-png-22.png'
const Wrapper = styled.div`

width:900px;
display:flex;
margin:auto;
.image{
    width:500px;
    img{
        width:100%;
        border-radius:20px;
    }
}
.card-body{
    margin-top:-2rem;
    h2{
        font-weight:bolder;
        text-transform:capitalize;
        font-size:1.5rem;
    
        span{
            font-weight:300;
            margin-left:1rem;
        }
    }
    h1{
        font-weight:bolder;
        font-size:1.6rem;
        line-height:1.5rem;
    }
    p{
        color:gray;
        line-height:1.2rem;

    }

    .author{
        display:flex;
        // justify-content:center;
        align-items:center;
    
        .avatar{
            width:30px;
            height:30px;
            border-radius:50%;
        }
        h2{
            margin-left:1rem;
            font-size:1.4rem;
            text-transform:capitalize;
        }
    }
}



`

const NewCategories = () => {
    return (
        <>
            <div style={{
                width:"1000px",
                margin:"auto",
                marginBottom:"1rem"
            }}> 

                <p style={
                    {
                        textTransform:"capitalize"
                    }
                }>Categories</p>
                <h1 
                    style={{
                        fontSize:"2.5rem",
                        fontWeight:"bolder"
                    }}
                >Business </h1>
            </div>
            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="img" />
                </div>

                <div className="card-body">
                    <h2>bussniss  <span>july 2 , 2020</span></h2>

                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, eligendi!</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit minima! Reprehenderit repellendus saepe iure non doloribus sequi animi qui.</p>

                    <div className="author">
                        <div className="avatar">
                            <img src={logo} alt="" />
                        </div>
                        <h2>Hamza</h2>
                    </div>
                </div>

            </Wrapper>

        </>
    )
}

export default NewCategories