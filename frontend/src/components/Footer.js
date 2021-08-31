import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper, SocialWrapper } from "../elements/FooterElements"

//Footer component
const Footer = () => {
  return (
    <FooterWrapper>
      <SocialWrapper>
        <SocialLinks />
        {/* <h4>copyright&copy;{new Date().getFullYear()}</h4> */}
      </SocialWrapper>
    </FooterWrapper>
  )
}

export default Footer
