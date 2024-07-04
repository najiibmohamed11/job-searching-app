import React from 'react'
import { Button, SearInput, SearchStyle } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { handleSearch } from '../../../features/jobSearch/jobSearch'

function Search({alignment}) {
  const dispatch= useDispatch()

  return (
    <SearchStyle style={{justifyContent: alignment,marginBottom:"30px"}}>
    <SearInput onChange={(e)=>{
      dispatch(handleSearch(`%${e.target.value}%`))

    }} type="text" placeholder='Search for job titile' />
    <Button onClick={()=>{
      
    }} >Get Start</Button>
    </SearchStyle>
  )
}

export default Search