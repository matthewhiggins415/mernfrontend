import React, { useState, useEffect } from 'react';
import { Section, SectionBtnContainer, BtnContainer, LessonContainer, Lesson, LessonHeader, TinyBtn } from '../styles/components/AdminSection.styles'
import AdminLesson from '../components/AdminLesson';
import { createALesson, getLessonsOfSection, deleteALesson } from '../api/lesson';

const AdminSection = ({ section, user, id, removeSection }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // get all lessons of a section
    let fetchLessons = async () => {
      let response = await getLessonsOfSection(user, section._id)
      console.log("useFetch of lesssons: ", response)
      setLessons(response.data.lessons)
    }

    fetchLessons(user, section._id)
  }, [])

  const addLesson = async (user, courseId, sectionId) => {
    let response = await createALesson(user, courseId, sectionId);
    console.log(response);
    setLessons(response.data.lessons)
  }

  const removeLesson = async (user, sectionId, lessonId) => {
    let response = await deleteALesson(user, sectionId, lessonId)
    console.log(response)
    setLessons(response.data.lessons)
  }

  return (
    <Section>
      <SectionBtnContainer>
        <h2>{section.title}</h2>
        <BtnContainer>
          <TinyBtn onClick={() => addLesson(user, id, section._id)}>new lesson</TinyBtn>
          <TinyBtn>edit</TinyBtn>
          <TinyBtn onClick={() => removeSection(user, id, section._id)}>delete</TinyBtn>
        </BtnContainer>
      </SectionBtnContainer>
      <LessonContainer>
        {lessons.length > 0 ? lessons.map((lesson, index) => (
          <AdminLesson user={user} sectionID={section._id} lesson={lesson} index={index} removeLesson={removeLesson} key={lesson._id} />
        )) : "no lessons"}
      </LessonContainer>
    </Section>
  )
}

export default AdminSection