import React from 'react'
import { Button, SearInput, SearchStyle } from './style'

function Search({alignment}) {
  return (
    <SearchStyle style={{justifyContent: alignment,marginBottom:"30px"}}>
    <SearInput type="text" placeholder='Search for job titile' />
    <Button>Get Start</Button>
    </SearchStyle>
  )
}

export default Search