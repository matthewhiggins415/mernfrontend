import React, { useState, useEffect } from 'react'
import { Nav, DesktopNav, MobileNav, ExtendedMobileNav, NotExtendedMobileNav, MobileBtn, DesktopNavItem, MobileExtendedNavItem} from '../styles/components/Navbar.styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [extended, setExtended] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", function() {
      if (window.innerWidth < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  })

  const handleMobileClick = () => {
    setExtended(!extended)
  }

  const desktopNav = () => (
    <DesktopNav>
      <DesktopNavItem to="/pricing">Pricing</DesktopNavItem>
      <DesktopNavItem to="/register">Register</DesktopNavItem>
      <DesktopNavItem to="/login">Login</DesktopNavItem>
    </DesktopNav>
  )

  const extendedMobileNav = () => (
    <ExtendedMobileNav>
      <MobileBtn onClick={handleMobileClick}> &#10005; </MobileBtn> 
      <MobileExtendedNavItem onClick={handleMobileClick} to="/pricing">Pricing</MobileExtendedNavItem>
      <MobileExtendedNavItem onClick={handleMobileClick} to="/register">Register</MobileExtendedNavItem>
      <MobileExtendedNavItem onClick={handleMobileClick} to="/login">Login</MobileExtendedNavItem>
    </ExtendedMobileNav>
  )

  const notExtendedMobileNav = () => (
    <NotExtendedMobileNav>
      <MobileBtn onClick={handleMobileClick}> &#8801; </MobileBtn>
    </NotExtendedMobileNav>
  )

  const mobileNav = () => (
    <MobileNav>
      { extended ? extendedMobileNav() : notExtendedMobileNav() }
    </MobileNav>
  )

  return (
   <Nav>
     { isMobile ? mobileNav() : desktopNav() }
   </Nav>
  )

  
}

export default Navbar