import styled from "styled-components"

//Wrapper for the projects
export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  grid-gap: 1.5rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

//Styling for the individual project
export const ProjectCard = styled.article`
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);
  padding: 15px;
  transition: all 0.3s linear;
  border-radius: 0.25rem;

  @media only screen and (min-width: 800px) {
    :nth-child(1) {
      grid-column: 2 / span 5;
      grid-row: 1 / 1;
    }

    :nth-child(2) {
      grid-column: 3 / span 5;
      grid-row: 2 / 2;
    }

    :nth-child(3) {
      grid-column: 2 / span 5;
      grid-row: 3 / 3;
    }

    :nth-child(4) {
      grid-column: 3 / span 5;
      grid-row: 4 / 4;
    }
  }
`

export const ProjectInfo = styled.div`
  padding: 1rem;
`

export const StackWrapper = styled.div`
  padding: 1rem;
`

export const StackItem = styled.div`
  background-color: #6272a4;
  padding: 0.5rem;
  margin: 0 0.3rem;
  border-radius: 0.25rem;
  color: #fff;
  display: inline-block;

  @media only screen and (max-width: 1000px) {
    margin-top: 0.5rem;
  }
`
