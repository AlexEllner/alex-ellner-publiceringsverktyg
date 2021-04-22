import React from "react"
import { MenuLinks } from "../elements/NavElements"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks"

//Nav-links for mobile
const BurgerLinks = ({ nav }) => {
  return (
    <MenuLinks nav={nav}>
      <PageLinks />
      {/* <SocialLinks /> */}
    </MenuLinks>
  )
}

export default BurgerLinks
