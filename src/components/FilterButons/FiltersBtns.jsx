import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterBtn, FiltterBtns } from './style'
import { handleClickFilter } from '../../features/JobFilter/jobFilter'
function FiltersBtns() {

    const dispatch = useDispatch()
    const requestedJob= useSelector((store=>store.filter))
  
   const handleFilterClicked=(btnType)=>{
    dispatch(handleClickFilter(btnType))
  
   }
  return (
    <FiltterBtns>
        <FilterBtn onClick={()=>handleFilterClicked("Recommended") } isActive={requestedJob=="Recommended"} >Recommended Jobs</FilterBtn>
        <FilterBtn onClick={()=>handleFilterClicked("NewJobs")} isActive={requestedJob=="NewJobs"} >New Jobs</FilterBtn>
        <FilterBtn onClick={()=>handleFilterClicked("HighSalaryJobs")} isActive={requestedJob=="HighSalaryJobs"} >High Salary jobs</FilterBtn>
    </FiltterBtns>
  )
}

export default FiltersBtns