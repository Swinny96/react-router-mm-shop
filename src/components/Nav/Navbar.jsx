import React from "react"
import styled from "styled-components"
import Burger from "./Burger"

const Nav = styled.nav`
  display: flex;
  align-self: stretch;
  grid-area: sidebar;
`

const NavBar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default NavBar
