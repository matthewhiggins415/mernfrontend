import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getASingleCourse, DestroyACourse } from '../api/course';
import { Container, InfoContainer, InfoContainerHeader, BtnContainer, Btn, SectionContainer, BackBtn, DeleteBtn } from '../styles/screens/AdminCourseScreen.styles'
import AdminSection from '../components/AdminSection';
import AdminCourseModal from '../components/AdminCourseModal';

import { createASection, deleteASection } from '../api/section'

const AdminCourseScreen = ({ user }) => {
  let {navigate} = useNavigate()

  let { id } = useParams();
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState([]);
  const [refire, setRefire] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchCourse = async (user, id) => {
      let response = await getASingleCourse(user, id);
      setCourse(response.data.course);
      setSections(response.data.course.sections);
    }

     fetchCourse(user, id);
  }, []);

  const addSection = async (user, id) => {
    let response = await createASection(user, id);
    console.log(response); 
    setSections(response.data.updatedCourse.sections);
    setRefire(!refire)
  }

  const removeSection = async (user, course, section) => {
    let response = await deleteASection(user, course, section)
    console.log(response)
    setSections(response.data.sections)
    setRefire(!refire)
  }

  const deleteCourse = async (user, id) => {
    let response = await DestroyACourse(user, id)
    console.log(response)
    setRedirect(true)
  }

  const activateModal = () => {
    setShowModal(!showModal)
  }

  if (redirect) {
    return <Navigate to="/adminhome" />
  }

  return (
    <>
      <AdminCourseModal activateModal={activateModal} showModal={showModal} course={course} user={user} setCourse={setCourse}/>
      <Container>
      <InfoContainer>
        <BackBtn to={'/adminhome'}>back</BackBtn>
        <InfoContainerHeader>
          <h2>General Course Info:</h2>
          <BtnContainer>
            <Btn onClick={() => activateModal()}>edit</Btn>
            <Btn onClick={() => deleteCourse(user, id)}>delete</Btn>
          </BtnContainer>
        </InfoContainerHeader>
        <div>
          <p>{course.title}</p>
          <p>published: {`${course.isPublished}`}</p>
          <p>created: {course.createdAt}</p>
        </div>
      </InfoContainer>

      <InfoContainer>
        <InfoContainerHeader>
          <h2>Course Sections:</h2>
          <BtnContainer>
            <Btn onClick={() => addSection(user, id)}>new section</Btn>
          </BtnContainer>
        </InfoContainerHeader>
        <SectionContainer>
          {sections.length > 0 ? sections.map((section) => (
            <AdminSection section={section} user={user} id={section._id} removeSection={removeSection} key={section._id}/>
          )) : "no sections" }
        </SectionContainer>
      </InfoContainer>
    </Container>
  </>
  )
}

export default AdminCourseScreen