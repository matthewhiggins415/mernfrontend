import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleCourse } from '../api/course'
import { ScreenContainer, LearningContainer, LearningPortal, CourseNavigation, CourseNavigationNav,  CourseNavigationContainer, CourseNavCollapseBtn, CourseNavTitle} from '../styles/screens/CourseScreen.styles'
import CourseNavSection from '../components/CourseNavSection';
import UserLessonVideo from '../components/UserLessonVideo';
import UserLessonResource from '../components/UserLessonResource';
import NoLessonComponent from '../components/NoLessonComponent';
import DiscordComponent from '../components/DiscordComponent';

const CourseScreen = ({ user }) => {
  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState([]);
  const [courseNavActive, setCourseNavActive] = useState(true);
  const [activeLesson, setActiveLesson] = useState({})

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getASingleCourse(user, id);
      setCourse(response.data.course);
      setSections(response.data.course.sections)
    }

    fetchCourse(user, id);
  }, [])
  
  const handleCourseNav = () => {
    setCourseNavActive(!courseNavActive)
  }

  const handleLessonSelect = (lesson) => {
    setActiveLesson(lesson)
  }

  return (
    <ScreenContainer>
      <LearningContainer>
        <LearningPortal courseNavActive={courseNavActive}>
           {Object.keys(activeLesson).length > 0 ? <UserLessonVideo lesson={activeLesson}/> : <NoLessonComponent course={course} />}
           {Object.keys(activeLesson).length > 0 ? <UserLessonResource lesson={activeLesson}/> : null }
           <DiscordComponent course={course} />
        </LearningPortal>
        <CourseNavigation courseNavActive={courseNavActive}>
          <CourseNavigationNav courseNavActive={courseNavActive}>
            <CourseNavCollapseBtn onClick={handleCourseNav} courseNavActive={courseNavActive}>{ courseNavActive ? '>' : '<'}</CourseNavCollapseBtn>
            <CourseNavTitle courseNavActive={courseNavActive}>Course Nav</CourseNavTitle>
          </CourseNavigationNav>
          <CourseNavigationContainer courseNavActive={courseNavActive}>
            { sections.length > 0 ? sections.map((section) => (
              <CourseNavSection key={section._id} section={section} handleLessonSelect={handleLessonSelect}/>
            )) : 'no sections'}
          </CourseNavigationContainer>
        </CourseNavigation>
      </LearningContainer>
    </ScreenContainer>
  )
}

export default CourseScreen