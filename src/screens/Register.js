import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Input } from '../styles/components/Input.styles'
import { LoginButton } from '../styles/components/Button.styles'
import { RegisterScreenContainer, FormContainer, Container, H2 } from '../styles/screens/RegisterScreen.styles.js'
import { GreenBorderLink } from '../styles/components/GreenBorderLink.styles'
import { signUp } from '../api/auth'


const Register = ({ notify, setUser }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
    passwordConfirmation: ''
  })

  const { email, password, passwordConfirmation } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onRegister = async (e) => {
    e.preventDefault()
    try {
      // api call 
      if (formData.password !== formData.passwordConfirmation) {
        notify('passwords do NOT match', 'danger')
      } else if (!formData.password || !formData.passwordConfirmation || !formData.email) {
        notify('missing input', 'danger')
        return
      } else {
        let res = await signUp(formData)
        console.log("res", res)
        // success message
        notify('registration successful')
        // create the cart
        // set user 
        setUser(res.data.user)

        // redirect to products 
        setShouldNavigate(true)
      }

    } catch(e) {
      console.log(e)
      // empty form inputs
      setFormData({
        email: '', 
        password: '', 
        passwordConfirmation: ''
      })

      // danger message 
      notify('registration failed', 'danger')
    }
  }

  if (shouldNavigate) {
    return <Navigate to="/payment" />
  }

  return (
    <RegisterScreenContainer>
      <Container>
        <H2>Sign Up</H2>
          <p style={{"color": "white"}}>This email will be used to invite you to Discord & Github</p>
        <FormContainer onSubmit={onRegister}>
          <Input type="text" name="email" value={email} placeholder="email" onChange={onChange} required/>
          <Input type="password" name="password" value={password} placeholder="password" onChange={onChange} required/>
          <Input type="password" name="passwordConfirmation" value={passwordConfirmation} placeholder="confirm password" onChange={onChange} required/>
          <LoginButton type="submit">Sign Up</LoginButton>
        </FormContainer>
        <GreenBorderLink to='/pricing'>view offer</GreenBorderLink>
      </Container>
    </RegisterScreenContainer>
  )
}

export default Register