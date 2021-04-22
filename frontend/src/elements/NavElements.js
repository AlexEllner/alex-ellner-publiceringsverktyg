import styled from "styled-components"

//Wrapper for the nav
export const NavWrapper = styled.nav`
  min-height: 15vh;
  background-color: #eaeaea;

  ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    background-color: #fff;
  }
  li {
    padding: 2rem;
  }

  a {
    font-size: 1.5rem;
    color: black;
    transition: all 0.3s linear;

    :hover {
      color: #e4abfe;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

//styling for the burger-button
export const MenuIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  outline: none;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    /* animations for the burger-menu-icon */
    :first-child {
      transform: ${props => (props.nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${props => (props.nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${props => (props.nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  /* if we're on the breakpoint of desktop, we want to hide this element
  and instead the "regular" navigation will be shown */
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

//styling for the burger-navigation and its links
export const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  background: #d7d7d7;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${props => (props.nav ? "translateX(0)" : "translateX(100%)")};
  transition: transform 300ms;
  z-index: 99;

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    :hover {
      color: #b8f2e6;
    }
  }
`
