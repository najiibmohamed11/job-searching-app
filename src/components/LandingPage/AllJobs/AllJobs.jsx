import React from 'react';
import { FIVE_HIGHEST_SALARY_JOBS, FIVE_LATEST_JOBS, FIVE_RECOMMENDE_JOBS } from '../../../GraphQl/JobQuary';
import { useQuery } from '@apollo/client';
import JobCard from '../../Job Card/JobCard';
import { useSelector } from 'react-redux';
import {JobsContainer,} from './style'
import Loading from '../../Loading/Loading';


function AllJobs() {
  const requestedJob = useSelector((store) => store.filter); // Correct the state slice
  const requestedJobFunction = requestedJob === "Recommended" ? FIVE_RECOMMENDE_JOBS :
                               requestedJob === "NewJobs" ? FIVE_LATEST_JOBS :
                               requestedJob === "HighSalaryJobs" ? FIVE_HIGHEST_SALARY_JOBS :
                               FIVE_RECOMMENDE_JOBS;
  console.log(requestedJobFunction);

  const { data, loading, error } = useQuery(requestedJobFunction);

  if (error) {
    // Ensure error is properly formatted
    return <h1>Error: {error.message}</h1>;
  }
  if (loading) {
    return <Loading/>
  }

  return (
    <>
        <JobsContainer>
          {data.job_info.map((job_info, index) => <JobCard {...job_info} key={index} />)}
        </JobsContainer>


    </>
  );
}

export default AllJobs;
