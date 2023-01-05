import React from 'react'
import { Container, ProfileContainer } from '../styles/screens/ProfileScreen.styles'

const ProfileScreen = ({ user }) => {
  console.log(user)
  return (
    <Container>
      <h1>Profile:</h1>
      <ProfileContainer>
        <h3>{"Name: " + user.name}</h3>
        <h3>{"Email: " + user.email}</h3>
      </ProfileContainer>
    </Container>
  )
}

export default ProfileScreen