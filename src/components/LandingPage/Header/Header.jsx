import React from 'react'
import MainLogo from '../../../assets/MainLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Headers,Navigations,SingleLink,JoinToUs} from './style'

function Header() {



  return (
    <Headers>
  
            <Link><img src={MainLogo} alt="" width={80} /></Link>
            <Navigations>
                <SingleLink>Home</SingleLink>
                <SingleLink>Find Job</SingleLink>
                <SingleLink>Why Man</SingleLink>
                <SingleLink>Contact</SingleLink>
            </Navigations>
            <JoinToUs>Join With Us</JoinToUs>
    </Headers>
  )
}

export default Header