import React from 'react'

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: ${rotate} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Loader =styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;


`

function Loading() {
  return (
    <Loader> <Spinner /></Loader>
  )
}

export default Loading