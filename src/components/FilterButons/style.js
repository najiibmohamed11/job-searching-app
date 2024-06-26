import styled from "styled-components";

export const FiltterBtns = styled.div`
display: flex;
width: 100%;

justify-content: center;



`
export const FilterBtn = styled.button`
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

