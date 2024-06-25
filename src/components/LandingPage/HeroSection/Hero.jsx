import React from 'react'
import styled from 'styled-components'
import MobileLogo from '../../../assets/Mobile.png'
import Notion from '../../../assets/companies/notion.png'
import upwork from '../../../assets/companies/upwork.png'
import dribble from '../../../assets/companies/dribble.png'
import github from '../../../assets/companies/github.png'
import slack from '../../../assets/companies/slack.png'  
import google from '../../../assets/companies/google.png'  
import figma from '../../../assets/companies/figma.png'  
import {Title,TitleSpan,HeroSection,Here,SearchStyle,SearInput,Button,CompoyImages}from "./style"

function Hero() {
  return (
    <HeroSection>
        <div>
            <Title>Your Dream Career Starts<Here><span>Here</span>  <TitleSpan>loream consectetur adipisicing elit. r adipisicing eli r adipisicing eli r eli r adipisicing eli Quis necessitatibusora eum.</TitleSpan></Here></Title>
          <SearchStyle>
          <SearInput type="text" placeholder='Search for job titile' />
          <Button>Get Start</Button>
          </SearchStyle>
          <h4 style={{marginBottom:"0px"}}>several companies are opening vacancies</h4>
          <CompoyImages>
            <img src={Notion} alt="" width={30} />
            <img src={upwork} alt=""  width={30}/> 
            <img src={dribble} alt=""  width={30}/>  
            <img src={figma} alt=""  width={30}/>  
            <img src={slack} alt=""  width={30}/>  
            <img src={github} alt=""  width={30}/>  
            <img src={google} alt=""  width={30}/>  
          </CompoyImages>
        </div>
        <div><img src={MobileLogo} width={400} alt="" /></div>
    </HeroSection>
  )
}

export default Hero