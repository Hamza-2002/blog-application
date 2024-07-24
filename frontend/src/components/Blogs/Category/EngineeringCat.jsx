import React from 'react'
import styled from 'styled-components'
import blogimage from '../../../images/blog-grid-13.jpg'
const Wrapper = styled.div`
margin:0.2rem 0 ;
display:flex;
gap:0.8rem;

.image{
    width:150px;
    img{
        width:100%;
        border-radius:10px;
    }
}
.body{
    h2{
        font-weight:bolder;
        font-size:1.6rem;
        span{
            font-weight:200;
            margin-left:1rem;
            font-size:1.2rem;
        }

    }
    h1{
        font-weight:bolder;
        font-size:1.2rem;
        width:400px;
        line-height:1.7rem;
        text-transform:capitalize;
    }

    .author{
        display:flex;
        align-items:center;
        gap:1rem;
        .avatar{
            width:30px;
            height:30px;
            border-radius:50%;
            border:1px solid gray;
            background-color:gray;
            color:white;
            font-weight:bold;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        h3{
            font-weight:bolder;
            text-transform:capitalize;
            font-size:1.1rem;
        }
    }
}
`
const EngineeringCat = () => {
   
    return (
        <>
            <h1 style={{
                fontSize:"1.5rem",
                fontWeight:"bolder",
                margin:"20px 0"
            }}>Engineering</h1>

            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="image" />
                </div>

                <div className="body">

                    <h2>Bussniss <span>23 jun 2024</span></h2>

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    
                    <div className="author">

                        <div className="avatar">
                            hk
                        </div>

                        <h3>hamza</h3>

                    </div>
                </div>

            </Wrapper>
            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="image" />
                </div>

                <div className="body">

                    <h2>Bussniss <span>23 jun 2024</span></h2>

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    
                    <div className="author">

                        <div className="avatar">
                            hk
                        </div>

                        <h3>hamza</h3>

                    </div>
                </div>

            </Wrapper>
            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="image" />
                </div>

                <div className="body">

                    <h2>Bussniss <span>23 jun 2024</span></h2>

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    
                    <div className="author">

                        <div className="avatar">
                            hk
                        </div>

                        <h3>hamza</h3>

                    </div>
                </div>

            </Wrapper>
            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="image" />
                </div>

                <div className="body">

                    <h2>Bussniss <span>23 jun 2024</span></h2>

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    
                    <div className="author">

                        <div className="avatar">
                            hk
                        </div>

                        <h3>hamza</h3>

                    </div>
                </div>

            </Wrapper>
            <Wrapper>
                <div className="image">

                    <img src={blogimage} alt="image" />
                </div>

                <div className="body">

                    <h2>Bussniss <span>23 jun 2024</span></h2>

                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    
                    <div className="author">

                        <div className="avatar">
                            hk
                        </div>

                        <h3>hamza</h3>

                    </div>
                </div>

            </Wrapper>
           
        </>
    )
}

export default EngineeringCat