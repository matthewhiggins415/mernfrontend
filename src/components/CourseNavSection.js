import React, { useState } from 'react';
import { CourseSectionContainer, CourseSectionContainerHeader, CourseSectionHeaderNavBtn, CourseSectionHeaderTitle, CourseSectionLessonsContainer, LessonContainer } from '../styles/components/CourseNavSection.styles'

const CourseNavSection = ({ section }) => {
  const [sectionNavActive, setSectionNavActive] = useState(false);
  const [lessons, setLessons] = useState(section.lessons)

  const handleSectionAcitve = () => {
    setSectionNavActive(!sectionNavActive)
    console.log(lessons)
  }

  return (
    <CourseSectionContainer>
      <CourseSectionContainerHeader>
        <CourseSectionHeaderNavBtn onClick={handleSectionAcitve}>{ sectionNavActive ? '^': '>' }</CourseSectionHeaderNavBtn>
        <CourseSectionHeaderTitle>{ section.title }</CourseSectionHeaderTitle>
      </CourseSectionContainerHeader>
      <CourseSectionLessonsContainer sectionNavActive={sectionNavActive}>
        { lessons.length > 0 ? lessons.map((lesson) => (
            <LessonContainer>{lesson.title}</LessonContainer>
        )) : <div style={{color: 'white'}}>no lessons</div> }
      </CourseSectionLessonsContainer>
    </CourseSectionContainer>
  )
}

export default CourseNavSection