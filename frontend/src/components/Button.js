import React from "react"
import { ButtonWrapper, ButtonElement } from "../elements/ButtonElements"

//Simple button component
const Button = ({ children, href }) => {
  return (
    <ButtonWrapper>
      <ButtonElement to={href}>{children}</ButtonElement>
    </ButtonWrapper>
  )
}

export default Button
