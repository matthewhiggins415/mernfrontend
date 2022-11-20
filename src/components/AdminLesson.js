import React from 'react';
import { Lesson, LessonHeader, TinyBtn, TinyLink } from '../styles/components/AdminLesson.styles'
import { BtnContainer } from '../styles/screens/AdminCourseScreen.styles';
 
const AdminLesson = ({ user, lesson, sectionID, index, deleteLesson}) => {
  return (
    <Lesson>
      <LessonHeader>
        <p>{index + 1}.</p>
        <p>{lesson.title}</p>
      </LessonHeader>
      <BtnContainer>
        <TinyLink to={`/admin/lesson/${lesson._id}`}>edit</TinyLink>
        <TinyBtn onClick={() => deleteLesson(user, sectionID, lesson._id)}>delete</TinyBtn>
      </BtnContainer>
    </Lesson>
  )
}

export default AdminLesson