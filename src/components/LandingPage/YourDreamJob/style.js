import styled from "styled-components";


export const HolleyYourDreamJob=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;

    
`
export const DreamJobText=styled.span`
  color: gray;
  font-size: 14px;
`
export const DreamTitile=styled.h1`
font-size: 40px;
margin-top: 10PX;
font-weight: 500;
max-width: 400px;
text-align: center;
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



export const FiltterBtns = styled.div`
display: flex;
width: 100%;

justify-content: center;



`



