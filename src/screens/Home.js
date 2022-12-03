import React, { useState, useEffect } from 'react'; 
import { getAllPublishedCourses } from '../api/course';
import { HomeScreenContainer, Container } from '../styles/screens/HomeScreen.styles';
import Course from '../components/Course';

const Home = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async (user) => {
      let response = await getAllPublishedCourses(user)
      console.log("response", response)
      setCourses(response.data.courses)
    }

    fetchCourses(user)
  }, []);

  return (
    <HomeScreenContainer>
      <Container>
        <h1>Your courses:</h1>
      {courses.map((course, index) => (
        <Course id={course._id} course={course} key={index}/>
      ))}
      </Container>
      <Container>
        <h1>Other Courses:</h1>
      </Container>
    </HomeScreenContainer>
  )
}

export default Home