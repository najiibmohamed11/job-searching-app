import React from 'react'
import Search from '../Search/Search'
import styled from 'styled-components'
import Header from '../Header/Header'
import FiltersBtns from '../../FilterButons/FiltersBtns'
import AllJobs from '../AllJobs/AllJobs'

const HollyJobSearch=styled.div`
      width: 1110px;
      margin:20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

`

function FindJob() {
  return (
    <>

    <HollyJobSearch>
      <Search alignment={ "center"}/>
      <FiltersBtns/>
      <AllJobs/>

    </HollyJobSearch>
    </>
  )
}

export default FindJob