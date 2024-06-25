import React from 'react';
import styled from 'styled-components';
import JobCard from '../Job Card/JobCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_JOBS } from '../../GraphQl/JobQuary';

const JobsContainer = styled.div`
  width: 1110px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr  ;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin-top: 40px;
`;



function Jobs() {

  const {data,loading,error}=useQuery(GET_ALL_JOBS)
  if(error){
    return<h1>{error}</h1>
  }
  if(loading){

    return<h1>loading......</h1>
  }
  return (
    <JobsContainer>
      {
        data.job_info.map((job_info,index) =>  < JobCard {...job_info} key={index}/>)


      }
    
    </JobsContainer>
  );
}

export default Jobs;
