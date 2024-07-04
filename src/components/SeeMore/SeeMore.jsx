import React from 'react'
import {SeaMorebtn,HollyBtn} from "./style"
import { useNavigate } from 'react-router-dom'
function SeeMore() {
  const navigate = useNavigate()
  return (
    <HollyBtn>
    <SeaMorebtn onClick={()=>{navigate('/findjop')}}>See More</SeaMorebtn>
    </HollyBtn>

  )
}

export default SeeMore