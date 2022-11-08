import React from 'react'
import { Container, CourseContainer, NewCourseBtn } from '../styles/screens/AdminHome.styles'
import Course from '../components/Course'

const AdminHome = () => {
  return (
    <Container>
      <CourseContainer>
        <NewCourseBtn>new course</NewCourseBtn>
        <Course />
        <Course />
      </CourseContainer>
    </Container>
  )
}

export default AdminHome