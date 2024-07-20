

import { Link } from "react-router-dom";
import styled from "styled-components";


export const Headers = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1110px;
    margin:0 auto;
`
export const Navigations = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
 
`
export const SingleLink = styled(Link)`
    padding: 20px;
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
    color: black;
    `
 
export const contactBtn = styled(Link)`
    padding: 10px;
    font-size: 15px;
    text-decoration: none;
    background-color:#A855F7 ;
    border-radius: 20px;
    color: white;

    
 
`

