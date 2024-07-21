
import styled from 'styled-components'

export const HolleyCard=styled.div`
background-color: ${props=>props.color};
width: 100%;
margin: 0px 5px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 60px;
border-radius:15px


`

 
export const HolleyDetails=styled.div`
width: 60%;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
border: 0.01px solid gray;
margin: 0 auto;
padding: 15px;


`
export const DetailsHeader=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top:20px
`
export const DetailsHeaderLogoPart=styled.div`
display: flex;
width: 100%;
margin-left: 30px;

`
 
export const DetailsHeaderLogoPartTextPart=styled.div`
font-size: 10px;
margin-left: 10px;
`
export const HolleyBelowTheHeaderCard=styled.div`
display: flex;
justify-content: stretch;
margin-top: 30px;
`
export const DetailsAndApplyBtns=styled.button`
  border: none;
background-color: ${props=>props.IsClickedUs?'black':'white'} ;
  padding: 13px;
  color: ${props=>props.IsClickedUs?'white':'black'};
  width: 100%;
  border: ${props=>props.IsClickedUs?'none':'1px solid grey'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */



  margin:0px 30px ;
  border-radius: 30px;
`
export const HoleyDetailsAndApplyBtns=styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`
export const Titile=styled.div`
font-size: 15px;
font-weight: 800;
margin-top: 20px;
margin-left:10px;


`
export const SubTitile=styled.div`
font-weight: 400;
margin: 0;
margin-left: 10px;



`
export const Content=styled.div`
margin-top: 40px;
margin-left: 30px;
min-height: 350px;



`


export const UploadArea = styled.div`
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  height:200px ;
  margin: 20px;
  color: #888;
  cursor: pointer;
  align-items: end;
  &:hover {
    border-color: #777;
    color: #555;
  }
`;

