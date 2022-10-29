import React from 'react'
import { Input } from '../styles/components/Input.styles'
import { LoginButton } from '../styles/components/Button.styles'
import { RegisterScreenContainer, FormContainer, Container, H2, PricingLink } from '../styles/screens/RegisterScreen.styles.js'

const Register = () => {
  return (
    <RegisterScreenContainer>
      <Container>
        <H2>Sign Up</H2>
        <FormContainer>
          <Input type="text" placeholder="email"/>
          <Input type="password" placeholder="password"/>
          <Input type="password" placeholder="confirm password"/>
          <LoginButton>Register</LoginButton>
        </FormContainer>
        <PricingLink to='/pricing'>view plans</PricingLink>
      </Container>
    </RegisterScreenContainer>
  )
}

export default Register