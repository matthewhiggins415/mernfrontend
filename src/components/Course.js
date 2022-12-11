import React from 'react'
import { Container, H2, EditBtn, Button } from '../styles/components/Course.styles'

const Course = ({id, course}) => {
  return (
    <Container to={`/coursehome/${id}`}>
      <H2>{course.title}</H2>
      <H2>{"$" + course.price}</H2>
    </Container>
  )
}

export default Course