import React from 'react'
import { Container, H2, EditBtn, Button } from '../styles/components/Course.styles'

const Course = ({id, course}) => {
  return (
    <Container to={`/course/${id}`}>
      <H2>{course.title}</H2>
      <Button>{"$" + course.price}</Button>
    </Container>
  )
}

export default Course