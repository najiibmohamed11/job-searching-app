import React from 'react';
import { FIVE_HIGHEST_SALARY_JOBS, FIVE_LATEST_JOBS, FIVE_RECOMMENDE_JOBS, SearchJob } from '../../../GraphQl/JobQuary';
import { useQuery } from '@apollo/client';
import JobCard from '../../Job Card/JobCard';
import { useSelector } from 'react-redux';
import { JobsContainer } from './style';
import Loading from '../../Loading/Loading';

function AllJobs() {
  const searchedValue = useSelector((store) => store.jobSearch);
  const requestedJob = useSelector((store) => store.filter);

  // Prepare the query and variables based on conditions
  let queryOptions = {};
  if (searchedValue) {
    queryOptions.query = SearchJob;
    queryOptions.variables = { title: searchedValue }; // Ensure correct field name 'title'
  } else {
    switch(requestedJob) {
      case "Recommended":
        queryOptions.query = FIVE_RECOMMENDE_JOBS;
        break;
      case "NewJobs":
        queryOptions.query = FIVE_LATEST_JOBS;
        break;
      case "HighSalaryJobs":
        queryOptions.query = FIVE_HIGHEST_SALARY_JOBS;
        break;
      default:
        queryOptions.query = FIVE_RECOMMENDE_JOBS;
        break;
    }
  }

  // Using useQuery with the selected query and variables
  const { data, loading, error } = useQuery(queryOptions.query, { variables: queryOptions.variables });

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  if (loading) {
    return <Loading />;
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
