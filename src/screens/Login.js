import React from 'react'
import { Container } from "../styles/screens/Container.styles"
import { LoginButton } from '../styles/components/Button.styles'
import { Input } from '../styles/components/Input.styles'
import { ScreenContainer } from '../styles/components/ScreenContainer.styles'

const Login = () => {
  return (
    <ScreenContainer>
      <Container>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <LoginButton>Login</LoginButton>
      </Container>
    </ScreenContainer>
  )
}

export default Login