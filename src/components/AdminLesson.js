import React from 'react';
import { Lesson, LessonHeader, TinyBtn } from '../styles/components/AdminLesson.styles'
import { BtnContainer } from '../styles/screens/AdminCourseScreen.styles';
 
const AdminLesson = ({ user, lesson, sectionID, index, removeLesson }) => {
  return (
    <Lesson>
      <LessonHeader>
        <p>{index + 1}.</p>
        <p>{lesson.title}</p>
      </LessonHeader>
      <BtnContainer>
        <TinyBtn>edit</TinyBtn>
        <TinyBtn onClick={() => removeLesson(user, sectionID, lesson._id)}>delete</TinyBtn>
      </BtnContainer>
    </Lesson>
  )
}

export default AdminLesson