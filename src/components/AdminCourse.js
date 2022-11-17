import React from 'react';
import { Container, EditLink } from '../styles/components/AdminCourse.styles'

const AdminCourse = ({ id, course }) => {
  return (
    <Container>
      <h2>{course.title}</h2>
      <EditLink to={`/admin/course/${id}`}>edit</EditLink>
    </Container>
  )
}

export default AdminCourse