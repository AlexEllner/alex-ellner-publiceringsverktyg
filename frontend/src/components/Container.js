import React from "react"
import { MainContainer } from "../elements/ContainerElements"

//Main container component for the layout
const Container = ({ children, display }) => {
  return <MainContainer display={display}>{children}</MainContainer>
}

export default Container
