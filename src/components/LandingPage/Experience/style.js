import styled from "styled-components";

export const HolleyExperience= styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FDF2F8;
  padding: 20px;
  align-items: center;
  margin-top: 30px;

`
export const TextPart= styled.div`
flex: 2;

`
export const PercentagePart= styled.div`
flex: 4;
display: flex;
 justify-content: center;
width: 150px;

`
export const NumberAndText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 40px;
    bottom: 10px;
    width: 1px;
    background-color: grey;
  }
`
export const SubTitle=styled.div`
color: grey;

;

`
export const Percentage=styled.h3`
color: #6A2AD6;
margin:5px 0px;
margin-top: 20px;

;

`



