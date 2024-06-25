import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { handleClickFilter } from '../../../features/JobFilter/jobFilter'



const HolleyYourDreamJob=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

    
`
const DreamJobText=styled.span`
  color: gray;
  font-size: 14px;
`
const DreamTitile=styled.h1`
font-size: 40px;
margin-top: 10PX;
font-weight: 500;
max-width: 400px;
text-align: center;
`
const FilterBtn = styled.button`
    padding:10px 40px;
    font-size: 15px;
    background-color: ${props=>props.isActive? " #A855F7":"white"};
    border-radius: 20px;
    color: ${props=>props.isActive? " white":"BLACK"};
    border: none;   
    cursor: pointer;
    border: ${props=>props.isActive? "none":"1px solid #A855F7"};
    margin:0px 20px;
    cursor: pointer;

 
`



const FiltterBtns = styled.div`
display: flex;
width: 100%;

justify-content: center;



`





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
        <FiltterBtns>
            <FilterBtn onClick={()=>handleFilterClicked("Recommended") } isActive={requestedJob=="Recommended"} >Recommended Jobs</FilterBtn>
            <FilterBtn onClick={()=>handleFilterClicked("NewJobs")} isActive={requestedJob=="NewJobs"} >New Jobs</FilterBtn>
            <FilterBtn onClick={()=>handleFilterClicked("HighSalaryJobs")} isActive={requestedJob=="HighSalaryJobs"} >High Salary jobs</FilterBtn>
        </FiltterBtns>
    </HolleyYourDreamJob>
 
    
  )
}

export default YourDreamJob