import React from 'react'
import { Input } from '../styles/components/Input.styles'
import { LoginButton } from '../styles/components/Button.styles'
import { RegisterScreenContainer, FormContainer, Container, H2 } from '../styles/screens/RegisterScreen.styles.js'
import { GreenBorderLink } from '../styles/components/GreenBorderLink.styles'

const Register = () => {
  return (
    <RegisterScreenContainer>
      <Container>
        <H2>Sign Up</H2>
        <FormContainer>
          <Input type="text" placeholder="email" required/>
          <Input type="password" placeholder="password" required/>
          <Input type="password" placeholder="confirm password" required/>
          <LoginButton>Sign Up</LoginButton>
        </FormContainer>
        <GreenBorderLink to='/pricing'>view plans</GreenBorderLink>
      </Container>
    </RegisterScreenContainer>
  )
}

export default Register