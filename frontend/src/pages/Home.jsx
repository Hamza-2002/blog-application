import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Blogs/Card'
import ReactHelemet from '../components/ReactHelemet'
import home_logo from '../images/blogger-logo-icon-png-22.png'
import RecentsCards from '../components/Blogs/RecentsCards'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Allblogdata, iserror, isloading } from '../Store/CreateReducres/BlogSlice'
import { isadmin } from '../Store/CreateReducres/LoginSlice'
import { styled } from 'styled-components';
import TrendingBlogs from '../components/Blogs/TrendingBlogs'
import { Carousel } from 'react-responsive-carousel'
import Categories from '../components/Blogs/Category/Categories'
const Wrapper = styled.div`
  width: 1200px;
  display:grid;
  
  grid-template-columns:repeat(auto-fit , minmax(300px , 340px));
  gird-template-rows:repeat(2, 1fr);
  gap:1rem;
  margin:auto;
  justify-content:center;

  `


const Home = () => {
  const isAdmin = useSelector(isadmin)
  const isLoading = useSelector(isloading)
  const isError = useSelector(iserror)
  const blog = useSelector(Allblogdata)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blog.length / 6);


  const handleNewPage = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleNextButton = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }

  }
  const handlePreviousButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const totalItemPerPage = 6
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + totalItemPerPage;


  return (
    <>

      <ReactHelemet title="Home" image={home_logo} />

      <div className="navbar bg-base-100">
        <div className="flex-1">
          {
            isAdmin ? (

              <Link to={"/admin"} className="btn btn-ghost text-xl">Admin DashBoard</Link>
            ) : ""
          }
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <Link to={"/createblog/user"} className='btn btn-primary'>Create Blog</Link>
        </div>
      </div>



      {/* // blog section  */}

      <h1 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "1.8rem", marginBottom: "1rem" }}>Trending</h1>
      <Carousel infiniteLoop={true} autoPlay={true} stopOnHover={true} swipeable={true} showStatus={false} showThumbs={false}>
        {
          blog && blog.slice(0, 5).map(({ title, content, cat, image, _id, user, Category, updatedAt }, index) => {

            return (


              <TrendingBlogs

                CardId={_id}
                key={index}
                title={title}
                content={content}
                cat={cat}
                image={image}
                user={user}
                Category={Category}
                updatedAt={updatedAt}
              />
            )
          })
        }
      </Carousel>

      <div className="blog flex mb-10 mt-10">



        <Wrapper>

          {
            blog && blog.slice(startIndex, endIndex).map(({ title, content, cat, image, _id, user, Category, updatedAt }, index) => {

              return (

                <Card
                  CardId={_id}
                  key={index}
                  title={title}
                  content={content}
                  cat={cat}
                  image={image}
                  user={user}
                  Category={Category}
                  updatedAt={updatedAt}
                />
              )
            })
          }

        </Wrapper>






      </div>
      {Array.from({ length: totalPages }, (_, i) => {

        return (

          <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <input className="join-item btn btn-square " type="radio" name="options" aria-label={i + 1} checked onClick={() => handleNewPage(i+1)} />

          </div>
        )
      })
      }
      {/* Recents Cards  */}

      <div style={{ width: "1200px", margin: "auto" }}>

        <h4 style={{
          fontWeight: "bolder",
          fontSize: "1.8rem",
          textAlign: "center",
          margin: "1rem 0"

        }}>Most Popular  Posts</h4>
        <Carousel infiniteLoop={true} width={"900px"} autoPlay={true} stopOnHover={true} swipeable={true} showThumbs={false} >
          {
            blog && blog.slice(4, 9).map(({ title, content, cat, image, _id, user, Category, updatedAt }, index) => {

              return (
                <div key={index} style={{
                  width: "1000px"
                }}>

                  <RecentsCards
                    CardId={_id}
                    key={index}
                    title={title}
                    content={content}
                    cat={cat}
                    image={image}
                    user={user}
                    Category={Category}
                    updatedAt={updatedAt} />
                </div>
              )
            })
          }
        </Carousel>

      </div>

      <div className="categories">
        <Categories />
      </div>
    </>
  )
}

export default Home