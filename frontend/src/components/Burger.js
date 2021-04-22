import React from "react"
import { MenuIcon } from "../elements/NavElements"
import { useState } from "react"
import BurgerLinks from "../components/BurgerLinks"

//Burger-component for mobile
const Burger = () => {
  const [nav, showNav] = useState(false)
  return (
    <>
      {/* click event to toggle the nav */}
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <BurgerLinks nav={nav} />
    </>
  )
}

export default Burger
