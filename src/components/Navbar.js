import React from 'react'
import { Nav } from '../styles/components/Navbar.styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>Landing</Link>
      <Link to='/pricing'>Pricing</Link>
      <Link to='/home'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </Nav>
  )
}

export default Navbar