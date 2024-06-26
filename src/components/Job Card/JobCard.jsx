import React from 'react'
import { CiBookmarkMinus } from "react-icons/ci";
import { CarBookMark, CarDate, CarHeader, CarImg, CardBodu, CardRequirement, CardbuttomPart, Detailsbtn, HollyCard, PricAndPlace, Requirement, UperCard } from './style';
import RequirementContainer from './RequirementContainer';
import { useNavigate } from 'react-router-dom';

function JobCard({id, imgeurl, date, salary, title, company, requirments ,location}) {
  const navigate = useNavigate();  // Use the useNavigate hook to get the navigation function

  const HandleClickDetails = () => {
    navigate(`/details/${id}`);  // Use the navigation function to navigate
  }
  return (
    <HollyCard>
      <UperCard>
        <CarHeader>
          <CarImg src={imgeurl} alt="" width={100} />
          <CarDate>{date}</CarDate>
          <CarBookMark><CiBookmarkMinus /></CarBookMark>
        </CarHeader>
        <CardBodu>
          <div>{company}</div>
          <h1 style={{margin:0, padding:0, fontSize:"22px"}}>{title}</h1>
        </CardBodu>
        <CardRequirement>
          {
            requirments.map((requirement, index) => (
              <RequirementContainer key={index} requirement={requirement} />
            ))
          }
        </CardRequirement>
      </UperCard>
      <CardbuttomPart>
        <PricAndPlace>
          <h4 style={{margin:0, padding:0, color:"black"}}>${salary}/hr</h4>
          <span>{location}</span>
        </PricAndPlace>
        <Detailsbtn onClick={HandleClickDetails}>Details</Detailsbtn>
      </CardbuttomPart>
    </HollyCard>
  )
}

export default JobCard;
