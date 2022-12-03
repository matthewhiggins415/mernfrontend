import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleCourse } from '../api/course'
import { ScreenContainer, LearningContainer, LearningPortal, CourseNavigation, VideoContainer, ResourceContainer, CourseNavigationNav,  CourseNavigationContainer, CourseNavCollapseBtn, CourseNavTitle } from '../styles/screens/CourseScreen.styles'

const CourseScreen = ({ user }) => {
  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [courseNavActive, setCourseNavActive] = useState(true);

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getASingleCourse(user, id);
      console.log("this is the course screen", response)
      setCourse(response.data.course);
    }

    fetchCourse(user, id);
  }, [])
  
  const handleCourseNav = () => {
    setCourseNavActive(!courseNavActive)
  }

  return (
    <ScreenContainer>
      <LearningContainer>
        <LearningPortal>
           <VideoContainer></VideoContainer>
           <ResourceContainer></ResourceContainer>
        </LearningPortal>
        <CourseNavigation courseNavActive={courseNavActive}>
          <CourseNavigationNav>
            <CourseNavCollapseBtn onClick={handleCourseNav}>{ courseNavActive ? 'close' : 'open'}</CourseNavCollapseBtn>
            <CourseNavTitle courseNavActive={courseNavActive}>Course Nav</CourseNavTitle>
          </CourseNavigationNav>
          <CourseNavigationContainer courseNavActive={courseNavActive}></CourseNavigationContainer>
        </CourseNavigation>
      </LearningContainer>
    </ScreenContainer>
  )
}

export default CourseScreen