import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleCourse } from '../api/course'
import { ScreenContainer, LearningContainer, LearningPortal, CourseNavigation, VideoContainer, ResourceContainer, CourseNavigationNav,  CourseNavigationContainer, CourseNavCollapseBtn, CourseNavTitle} from '../styles/screens/CourseScreen.styles'
import CourseNavSection from '../components/CourseNavSection';


const CourseScreen = ({ user }) => {
  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState([]);
  const [courseNavActive, setCourseNavActive] = useState(true);

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getASingleCourse(user, id);
      console.log("this is the course screen", response)
      setCourse(response.data.course);
      setSections(response.data.course.sections)
    }

    fetchCourse(user, id);
  }, [])
  
  const handleCourseNav = () => {
    setCourseNavActive(!courseNavActive)
  }

  return (
    <ScreenContainer>
      <LearningContainer>
        <LearningPortal courseNavActive={courseNavActive}>
           <VideoContainer></VideoContainer>
           <ResourceContainer></ResourceContainer>
        </LearningPortal>
        <CourseNavigation courseNavActive={courseNavActive}>
          <CourseNavigationNav courseNavActive={courseNavActive}>
            <CourseNavCollapseBtn onClick={handleCourseNav} courseNavActive={courseNavActive}>{ courseNavActive ? '>' : '<'}</CourseNavCollapseBtn>
            <CourseNavTitle courseNavActive={courseNavActive}>Course Nav</CourseNavTitle>
          </CourseNavigationNav>
          <CourseNavigationContainer courseNavActive={courseNavActive}>
            { sections.length > 0 ?  sections.map((section) => (
              <CourseNavSection section={section}/>
            )) : 'no sections'}
          </CourseNavigationContainer>
        </CourseNavigation>
      </LearningContainer>
    </ScreenContainer>
  )
}

export default CourseScreen