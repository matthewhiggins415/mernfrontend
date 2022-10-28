import React from 'react'
import { Container } from '../styles/screens/Container.styles'
import { Input } from '../styles/components/Input.styles'
import { LoginButton } from '../styles/components/Button.styles'
import { ScreenContainer } from '../styles/components/ScreenContainer.styles'

const Register = () => {
  return (
    <ScreenContainer>
      <Container>
        <Input type="text" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Input type="password" placeholder="confirm password"/>
        <LoginButton>Register</LoginButton>
      </Container>
    </ScreenContainer>
  )
}

export default Register