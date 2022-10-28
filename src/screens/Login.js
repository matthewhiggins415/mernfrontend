import React from 'react'
import { LoginButton } from '../styles/components/Button.styles'
import { Input } from '../styles/components/Input.styles'
import { LoginScreenContainer, Container } from '../styles/screens/LoginScreen.styles'

const Login = () => {
  return (
    <LoginScreenContainer>
      <Container>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <LoginButton>Login</LoginButton>
      </Container>
    </LoginScreenContainer>
  )
}

export default Login