import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLesson from '../components/AdminLesson'
import { Container, InfoContainer, InfoContainerHeader, BtnContainer, Btn, SectionContainer, BackBtn, DeleteBtn } from '../styles/screens/AdminCourseScreen.styles';
import AdminSectionModal from '../components/AdminSectionModal';

import { getASingleSection } from '../api/section';
import { createALesson, deleteALesson } from '../api/lesson';

const AdminSectionScreen = ({ user }) => { 
  const { id } = useParams()
  const [section, setSection] = useState({});
  const [lessons, setLessons] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchSection = async (user, id) => {
      let response = await getASingleSection(user, id)
      console.log("section response:", response)
      setSection(response.data.section)
      setLessons(response.data.section.lessons)
    }

    fetchSection(user, id)
  }, [])

  const createLesson = async (user, course, section) => {
    let response = await createALesson(user, course, section)
    console.log(response)
    setLessons(response.data.newSection.lessons)
  }

  const deleteLesson = async (user, sectionId, lessonId) => {
    let response = await deleteALesson(user, sectionId, lessonId)
    console.log(response)
    setLessons(response.data.lessons)
  }

  const activateModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <AdminSectionModal user={user} activateModal={activateModal} showModal={showModal} section={section} setSection={setSection}/>
      <Container>
        <InfoContainer>
          <BackBtn to={`/admin/course/${section.course_id}`}>Back</BackBtn>
          <InfoContainerHeader>
              <h2>Section Info:</h2>
              <BtnContainer>
                <Btn onClick={() => activateModal()}>edit</Btn>
                <Btn>delete</Btn>
              </BtnContainer>
          </InfoContainerHeader>
          <div>
            <p>{section.title}</p>
            <p>created: {section.createdAt}</p>
          </div>
        </InfoContainer>
          
        <InfoContainer>
          <InfoContainerHeader>
            <h2>Section Lessons:</h2>
            <BtnContainer>
              <Btn onClick={() => createLesson(user, section.course_id, id)}>new lesson</Btn>
            </BtnContainer>
          </InfoContainerHeader>
          <SectionContainer>
            {lessons.length > 0 ? lessons.map((lesson, index) => (<AdminLesson index={index} user={user} lesson={lesson} sectionID={id} key={lesson._id} deleteLesson={deleteLesson}>{lesson.title}</AdminLesson>)) : "no lessons"}
          </SectionContainer>
        </InfoContainer>
      </Container>
    </>
  )
}

export default AdminSectionScreen