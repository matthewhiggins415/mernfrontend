import React, { useState, useEffect } from 'react'
import { DesktopNav, MobileNav, MobileButton } from '../styles/components/Navbar.styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [extended, setExtended] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", function() {
      if (window.innerWidth < 520) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  }, [])

  const handleMobileClick = () => {
    setExtended(!extended)
  }

  const desktopNav = () => {
    return (
      <DesktopNav>
        <Link to='/'>Landing</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/home'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </DesktopNav>
    )
  }

  const mobileNav = () => {
    return (
      <MobileNav extended={extended}>
        { extended ? <MobileButton onClick={handleMobileClick}> &#10005; </MobileButton> : <MobileButton onClick={handleMobileClick}> &#8801; </MobileButton> }
      </MobileNav>
    )
  }

  return (
    <>
    { isMobile ? mobileNav() : desktopNav()}
    </>
  )
}
export default Navbar