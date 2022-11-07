import React, { useState } from 'react'
import { NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer, NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, OpenLinksButton, NavbarLinkExtended } from '../styles/components/Navbar.styles'

const Navbar = ({ user }) => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  const closeExtendedNav = () => {
    setExtendNavbar(!extendNavbar)
  }

  const renderNav = () => {
    if (user && user.isAdmin) {
      return (
        <div>
          <NavbarLink to="/sign-out">Logout</NavbarLink>
        </div>)
    } else if (user) {
      return (
      <div>
        <NavbarLink to="/profile">Profile</NavbarLink>
        <NavbarLink to="/sign-out">Logout</NavbarLink>
      </div>)
    } else {
      return (
      <div>
        <NavbarLink to="/register">Register</NavbarLink>
        <NavbarLink to="/login">Login</NavbarLink>
      </div>)
    }
  }

  const renderExtended = () => {
    if (extendNavbar && user && user.isAdmin) {
      return (
        <NavbarExtendedContainer>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/sign-out">Logout</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )
    } else if (extendNavbar && user) {
      return (
        <NavbarExtendedContainer>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/profile">Profile</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/sign-out">Logout</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )
    } else {
      return (
        <NavbarExtendedContainer>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/register">Register</NavbarLinkExtended>
        <NavbarLinkExtended onClick={closeExtendedNav} to="/login">Login</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )
    }
  }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {renderNav()}
            <OpenLinksButton onClick={closeExtendedNav}>
              { extendNavbar ? <> &#10005; </> : <> &#8801; </> }
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">MERNguide</NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      
      {extendNavbar && (
      <NavbarExtendedContainer>
       {renderExtended()}
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar