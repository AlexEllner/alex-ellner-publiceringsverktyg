import styled from "styled-components"

//The "safari" element on the intro component
export const Safari = styled.div`
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #c1c1c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  grid-area: ${props => props.area};
`

//Wrapper for the "safari-dots"
export const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`

//Each individual dot element in the "safari"
export const Dot = styled.div`
  margin: 5px;
  background-color: ${props => props.color};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
`

//Left column element in the intro
export const LeftColumn = styled.div`
  grid-area: ${props => props.area};
  padding-top: 50px;
  padding-bottom: 50px;
`

//Right column element in the intro
export const RightColumn = styled.div`
  grid-area: ${props => props.area};
  padding-top: 50px;
  padding-bottom: 50px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1rem;

    :hover {
      transform: scale(1.2);
    }
  }

  a {
    font-size: 2rem;
    color: #495057;
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin: 0 1rem;
    }
  }
`
