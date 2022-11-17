import React from 'react'
import { Container, H2, EditBtn } from '../styles/components/Course.styles'

const Course = ({id, course}) => {
  return (
    <Container to={`/course/${id}`}>
      <H2>{course.title}</H2>
    </Container>
  )
}

export default Course