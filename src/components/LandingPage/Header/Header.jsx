import React from 'react'
import MainLogo from '../../../assets/MainLogo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Headers,Navigations,SingleLink,contactBtn} from './style'

function Header() {



  return (
    <Headers>
  
            <Link to='/'><img src={MainLogo} alt="" width={80} /></Link>
            <Navigations>
                <SingleLink to="/">Home</SingleLink>
                <SingleLink to="/findjop">Find Job</SingleLink>
                <SingleLink to="/about">about us</SingleLink>
                <SingleLink to="/contact">Contact</SingleLink>
            </Navigations>
    </Headers>
  )
}

export default Header