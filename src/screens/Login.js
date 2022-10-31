import React from 'react'
import { LoginButton } from '../styles/components/Button.styles'
import { Input } from '../styles/components/Input.styles'
import { LoginScreenContainer, Container, H2, FormContainer } from '../styles/screens/LoginScreen.styles'
import { ToRegisterLink } from '../styles/screens/LoginScreen.styles'

const Login = () => {
  return (
    <LoginScreenContainer>
      <Container>
        <H2>Sign In</H2>
        <FormContainer>
          <Input type="text" placeholder="email"/>
          <Input type="password" placeholder="password"/>
          <LoginButton>Login</LoginButton>
        </FormContainer>
        <ToRegisterLink to="/register">Sign Up</ToRegisterLink>
      </Container>
    </LoginScreenContainer>
  )
}

export default Login