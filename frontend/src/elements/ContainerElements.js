import styled from "styled-components"

//The main container element which is used throughout the project
export const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: ${props => (props.display ? props.display : "block")};
  justify-content: ${props => (props.display === "flex" ? "center" : "")};

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }
`

//Container for the intro component
export const IntroContainer = styled.div`
  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 5px 5px 0 0;
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nav-wrapper nav-wrapper"
    "left-column right-column";

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav-wrapper"
      "left-column"
      "right-column";
  }
`
