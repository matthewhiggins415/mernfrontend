import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleCourse } from '../api/course'
import { ScreenContainer } from '../styles/screens/CourseScreen.styles'

const CourseScreen = ({ user }) => {
  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState([])

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getASingleCourse(user, id);
      console.log(response)
      setCourse(response.data.course);
      setSections(response.data.course.sections);
    }

    fetchCourse(user, id);
  }, [])

  return (
    <ScreenContainer>
      <div>
      </div>
      <div>
        {sections.map((section, index) => (
          <div>
            <h2 key={index} style={{border: '2px solid white', color: 'white'}}>{section.title}</h2>
          </div>
        ))}
      </div>
    </ScreenContainer>
  )
}

export default CourseScreen