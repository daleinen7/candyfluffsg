import React from "react"
import Layout from "../components/Layout"
import GridSquare from '../components/GridSquare';

import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export default function Shop() {
  return (
    <Layout>
      <StyledDiv>
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
        <GridSquare />
      </StyledDiv>
    </Layout>
  )
}
