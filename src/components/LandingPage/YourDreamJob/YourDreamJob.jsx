import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { handleClickFilter } from '../../../features/JobFilter/jobFilter'
import { DreamJobText, DreamTitile, FilterBtn, FiltterBtns, HolleyYourDreamJob } from './style'
import FiltersBtns from '../../FilterButons/FiltersBtns'




function YourDreamJob() {
  const dispatch = useDispatch()
  const requestedJob= useSelector((store=>store.filter))
  console.log(requestedJob)

 const handleFilterClicked=(btnType)=>{
  dispatch(handleClickFilter(btnType))

 }
  return (
 
    <HolleyYourDreamJob>
        <DreamJobText>Your Dream Job</DreamJobText>
        <DreamTitile>Explore And Find Your Job Her</DreamTitile>
       < FiltersBtns/>
    </HolleyYourDreamJob>
 
    
  )
}

export default YourDreamJob