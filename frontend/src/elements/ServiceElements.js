import styled from "styled-components"

//Wrapper for the posts
export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`

//Card element for the individual service
export const Card = styled.article`
  -webkit-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -4px rgba(0, 0, 0, 0.75);
  padding: 15px;
  transition: all 0.3s linear;
  border-radius: 0.25rem;

  :hover {
    background-color: #6272a4;
    color: #fff;
  }
`
