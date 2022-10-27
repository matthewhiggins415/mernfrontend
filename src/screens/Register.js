import React from 'react'
import { Container } from '../styles/screens/Container.styles'

const Register = () => {
  return (
    <div>
      <Container>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="confirm password"/>
        <button>Register</button>
      </Container>
    </div>
  )
}

export default Register