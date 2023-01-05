import React, { useState, useEffect } from 'react'; 
import { getAllPublishedCourses } from '../api/course';
import { HomeScreenContainer, Container, Hero, Img, InspirationalDiv, CoursesContainer } from '../styles/screens/HomeScreen.styles';
import Course from '../components/Course';
import img from '../assets/homebackground.jpg'

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
      <Hero>
        <Img src={img} />
        <InspirationalDiv>"Experience is the name everyone gives to their mistakes."</InspirationalDiv>
      </Hero>
      <Container>
        <h1>Your courses:</h1>
      </Container>
      <Container style={{"backgroundColor": 'black', 'borderRadius': '20px'}}>
        <h1>Other Courses:</h1>
        <CoursesContainer>
          {courses.length > 0 ? courses.map((course, index) => (
            <Course id={course._id} course={course} key={index}/>
          )) : 'loading...'}
        </CoursesContainer>
      </Container>
    </HomeScreenContainer>
  )
}

export default Home