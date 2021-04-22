import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Burger from "./Burger"
import { createGlobalStyle } from "styled-components"

//Global styles
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Ubuntu";
    overflow-x: hidden;
    
  }
  ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
`

//Layout component
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Burger />
      {children}
      <Footer />
    </>
  )
}

export default Layout
