import React from 'react'
import { Input } from '../styles/components/Input.styles'
import { LoginButton } from '../styles/components/Button.styles'
import { RegisterScreenContainer, Container } from '../styles/screens/RegisterScreen.styles.js'

const Register = () => {
  return (
    <RegisterScreenContainer>
      <Container>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Input type="password" placeholder="confirm password"/>
        <LoginButton>Register</LoginButton>
      </Container>
    </RegisterScreenContainer>
  )
}

export default Register