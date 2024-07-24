import React from 'react'
import EngineeringCat from './EngineeringCat'
import ScienceCat from './ScienceCat'
import styled from 'styled-components'


const Wrapper = styled.div`
width:900px;
margin:1.5rem auto;
  display:grid;
  grid-template-columns:repeat(2 , 1fr);
  justify-content:center;

`
const Categories = () => {

  return (
    <>
      <Wrapper>

        <div className="one">

          <EngineeringCat />
        </div>
        <div className="two">

          <ScienceCat />
        </div>
      </Wrapper>

    </>
  )
}

export default Categories