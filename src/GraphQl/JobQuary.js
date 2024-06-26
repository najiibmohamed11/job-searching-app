import { gql } from "@apollo/client";

export const GET_ALL_JOBS=gql`
query MyQuery {
  job_info {
    company
    date
    detail
    id
    imgeurl
    location
    salary
    title
    requirments
  }
}

`

export const FIVE_LATEST_JOBS = gql`
query MyQuery {
  job_info(limit: 6, order_by: {id: desc}) {
    company
    date
    detail
    id
    imgeurl
    location
    salary
    requirments
    title
  }
}

`
export const FIVE_RECOMMENDE_JOBS = gql`
query MyQuery {
  job_info(limit: 6) {
    company
    date
    detail
    id
    imgeurl
    location
    requirments
    salary
    title
  }
}

`
export const FIVE_HIGHEST_SALARY_JOBS = gql`
query MyQuery {
  job_info(limit: 6,order_by: {salary: desc}) {
    company
    date
    detail
    id
    imgeurl
    location
    requirments
    salary
    title
  }
}


`
export const GET_DETAILED_INFO = gql`
query MyQuery ($id: Int!) {
  job_info(where: {id: {_eq: $id}}) {
    company
    date
    detail
    id
    imgeurl
    location
    requirments
    salary
    title
    detailedRequirements
    Description
  }
}

`
