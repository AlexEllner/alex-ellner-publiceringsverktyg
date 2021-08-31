import React from "react"
import { MainSection } from "../elements/SectionElements"

//Section component
const Section = ({ children, color }) => {
  return <MainSection color={color}>{children}</MainSection>
}

export default Section
