import React, { useState } from 'react';
import { CourseSectionContainer, CourseSectionContainerHeader, CourseSectionHeaderNavBtn, CourseSectionHeaderTitle, CourseSectionLessonsContainer, LessonContainerBtn } from '../styles/components/CourseNavSection.styles'

const CourseNavSection = ({ section, handleLessonSelect }) => {
  const [sectionNavActive, setSectionNavActive] = useState(false);
  const [lessons, setLessons] = useState(section.lessons)

  const handleSectionActive = () => {
    setSectionNavActive(!sectionNavActive)
    console.log(lessons)
  }

  return (
    <CourseSectionContainer>
      <CourseSectionContainerHeader>
        <CourseSectionHeaderNavBtn onClick={handleSectionActive}>{ sectionNavActive ? '^': '>' }</CourseSectionHeaderNavBtn>
        <CourseSectionHeaderTitle>{ section.title }</CourseSectionHeaderTitle>
      </CourseSectionContainerHeader>
      <CourseSectionLessonsContainer sectionNavActive={sectionNavActive}>
        { lessons.length > 0 ? lessons.map((lesson) => (
            <LessonContainerBtn key={lesson._id} onClick={() => handleLessonSelect(lesson)} >{lesson.title}</LessonContainerBtn>
        )) : <div style={{color: 'white'}}>no lessons</div> }
      </CourseSectionLessonsContainer>
    </CourseSectionContainer>
  )
}

export default CourseNavSection