import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { NavWrapper } from "../elements/NavElements"

//Navbar component
const Navbar = () => {
  return (
    <NavWrapper>
      <PageLinks />
    </NavWrapper>
  )
}

export default Navbar
