import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//wrapper for the button element
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

//Button element which uses the gatsby Link
export const ButtonElement = styled(props => <Link {...props} />)`
  padding: 0.8rem;
  margin: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  background-color: #6272a4;
  transition: all 0.3s linear;
  color: #fff;

  :hover {
    transform: scale(1.1);
  }
`
