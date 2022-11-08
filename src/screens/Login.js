import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { signIn } from '../api/auth'
import { LoginButton } from '../styles/components/Button.styles'
import { Input } from '../styles/components/Input.styles'
import { LoginScreenContainer, Container, H2, FormContainer } from '../styles/screens/LoginScreen.styles'
import { ToRegisterLink } from '../styles/screens/LoginScreen.styles'

const Login = ({ notify, setUser }) => {
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })

  const [navigate, setNavigate] = useState(false) 
  const [adminNavigate, setAdminNavigate] = useState(false)

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSignIn = async (e) => {
    e.preventDefault()

    try {
      let res = await signIn(formData)
      console.log(res.data.user)
      // set the user   
      setUser(res.data.user)

      if (res.data.user.isAdmin) {
        setAdminNavigate(true)
      } else {
        setNavigate(true)
      }

      // notify user of successful login
      notify('login successful')
    } catch(e) {
      setFormData({ email: '', password: '' })
      notify('login denied', 'danger')
    }
  }

  if (navigate) {
    return <Navigate to='/home' /> 
  }

  if (adminNavigate) {
    return <Navigate to='/adminhome' />
  }
  
  return (
    <LoginScreenContainer>
      <Container>
        <H2>Sign In</H2>
        <FormContainer onSubmit={onSignIn}>
          <Input type="text" name="email" value={email} placeholder="enter email" onChange={onChange} required/>
          <Input type="password" name="password" value={password} placeholder="enter pw" onChange={onChange} required/>
          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
        <ToRegisterLink to="/register">Sign Up</ToRegisterLink>
      </Container>
    </LoginScreenContainer>
  )
}

export default Login