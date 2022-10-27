import React from 'react'
import { Container } from '../styles/Navbar.styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <Link to='/'>Landing</Link>
      <Link to='/pricing'>Pricing</Link>
      <Link to='/home'>Home</Link>
    </Container>
  )
}

export default Navbar