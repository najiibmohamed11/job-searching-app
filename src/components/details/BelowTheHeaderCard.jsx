import React from 'react'

import {HolleyCard} from './style'


function BelowTheHeaderCard({Numbers,Titile ,Color}) {

  return (
    <HolleyCard  color={Color}>
        <span style={{fontSize:"14px"}}>{Titile} </span>
        <p style={{margin:"5px", fontWeight:"600"}}>{Numbers}</p>
    </HolleyCard>
  )
}

export default BelowTheHeaderCard