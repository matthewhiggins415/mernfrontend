import React from 'react'
import { Container, Link, Description } from '../styles/components/DiscordComponent.styles'


const DiscordComponent = ({ course }) => {
  return (
    <Container>
      <Link href={course.discord} target="_blank">Discord</Link>
      <Description>This link is for questions, comments, constructive feedback, helping others in the course. If you need something related to this specific course, this is your place. I will answer questions just @mhiggie. Good luck everyone ! </Description>
    </Container>
  )
}

export default DiscordComponent