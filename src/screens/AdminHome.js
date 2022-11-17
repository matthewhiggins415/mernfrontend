import React, { useState, useEffect } from 'react'
import { Container, CourseContainer, H1, CourseHeader, NewCourseBtn } from '../styles/screens/AdminHome.styles'
import { getAllCourses } from '../api/course'
import AdminCourse from '../components/AdminCourse'
import { createACourse } from '../api/course'

const AdminHome = ({ user, notify }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async (user) => {
      let response = await getAllCourses(user);
      console.log(response);
      setCourses(response.data.courses)
    }

    fetchCourses(user);
  }, []);

  const addCourse = async (user) => {
    let response = await createACourse(user);
    console.log(response)
    setCourses(response.data.courses)
  }

  return (
    <Container>
      <CourseContainer>
        <CourseHeader>
          <H1>Admin Home</H1>
          <NewCourseBtn onClick={() => addCourse(user)}>Create</NewCourseBtn>
        </CourseHeader>
        {courses.map((course) => (
          <AdminCourse id={course._id} course={course} key={course._id}/>
        ))}
      </CourseContainer>
    </Container>
  )
}

export default AdminHome