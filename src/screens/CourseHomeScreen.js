import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseBasics } from '../api/course';
import { Screen, BackBtn, Container, InfoContainer, BuyBtn } from '../styles/screens/CourseHomeScreen.styles'

const CourseHomeScreen = ({ user }) => {
  let { id } = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getCourseBasics(user, id);
      console.log("course basics:", response)
      setCourse(response.data.course);
    }

     fetchCourse(user, id);
  }, []);

  return (
    <Screen>
      <Container>
        <BackBtn to={`/home`}>Back</BackBtn>
        <iframe src={course.video} style={{'width':'100%','height':'550px','left':'0','top':'0', 
"border":"none" }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe>
        <InfoContainer>
          <h1 styles={{color: "white"}}>{course.title}</h1>
          <p>{course.about}</p>
          <BuyBtn to={`/course/${course._id}`}>Continue to course</BuyBtn>
        </InfoContainer>
      </Container>
    </Screen>
  )
}

export default CourseHomeScreen