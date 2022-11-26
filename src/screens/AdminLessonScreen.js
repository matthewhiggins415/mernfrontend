import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleLesson } from '../api/lesson';
import { Container, BackBtn, BtnContainer, InfoContainer, InfoContainerHeader, Btn} from '../styles/screens/AdminCourseScreen.styles';
import AdminLessonModal from '../components/AdminLessonModal';

const AdminLessonScreen = ({ user }) => {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const fetchLesson = async () => {
      let response = await getASingleLesson(user, id)
      console.log("fetch lesson:", response)
      setLesson(response.data.lesson)
    } 
    
    fetchLesson()
  }, [])

  const activateModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <AdminLessonModal user={user} activateModal={activateModal} showModal={showModal} lesson={lesson} setLesson={setLesson}/>
      <Container>
        <InfoContainer>
          <BackBtn to={`/admin/section/${lesson.section_id}`}>Back</BackBtn>
          <InfoContainerHeader>
            <h2>Lesson Info:</h2>
            <BtnContainer>
              <Btn onClick={() => activateModal()}>edit</Btn>
              <Btn>delete</Btn>
            </BtnContainer>
          </InfoContainerHeader>
          <div>
            <p>{lesson.title}</p>
            <p>{lesson.video}</p>
            <p>{lesson.repo}</p>
          </div>
        </InfoContainer>
        <video autoplay controls crossOrigin="anonymous" loop src="http://localhost:5000/video" width="600px" type="video/quicktime"></video>

      </Container>
    </>
  )
}

export default AdminLessonScreen