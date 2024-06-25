import React from 'react'
import styled from 'styled-components'
import {HolleyExperience,TextPart,PercentagePart,NumberAndText,SubTitle,Percentage} from "./style.js"


function Experience() {
  return (
    <HolleyExperience>
        <TextPart>
            <SubTitle >
                Join Connect Today
            </SubTitle>
            <h2 style={{fontWeight:"500", fontSize:"28px",width:"80%", margin:"0px"}} >
                Experience With Number
            </h2>
        </TextPart>
        <PercentagePart>
            <NumberAndText>
                <Percentage>92%</Percentage>
                <SubTitle>Many Users find relevent jobs accourding to skills</SubTitle>
            </NumberAndText>
            <NumberAndText>
                <Percentage>92%</Percentage>
                <SubTitle>Many Users find relevent jobs accourding to skills</SubTitle>
            </NumberAndText>
            <NumberAndText style={{border:"none"}}>
                <Percentage>92%</Percentage>
                <SubTitle>Many Users find relevent jobs accourding to skills</SubTitle>
            </NumberAndText>
        </PercentagePart>
       
    </HolleyExperience>
  )
}

export default Experience