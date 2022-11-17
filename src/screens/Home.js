import React, { useState, useEffect } from 'react'; 
import { getAllCourses } from '../api/course';
import { HomeScreenContainer, Container } from '../styles/screens/HomeScreen.styles';
import Course from '../components/Course';

const Home = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async (user) => {
      let response = await getAllCourses(user)
      console.log("response", response)
      setCourses(response.data.courses)
    }

    fetchCourses(user)
  }, []);

  return (
    <HomeScreenContainer>
      <Container>
      {courses.map((course, index) => (
        <Course id={course._id} course={course} key={index}/>
      ))}
      </Container>
    </HomeScreenContainer>
  )
}

export default Home