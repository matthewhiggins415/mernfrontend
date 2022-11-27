import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleLesson } from '../api/lesson';
import { Container, BackBtn, BtnContainer, InfoContainer, InfoContainerHeader, Btn} from '../styles/screens/AdminCourseScreen.styles';
import AdminLessonModal from '../components/AdminLessonModal';
import AdminVideo from '../components/AdminVideo';

const AdminLessonScreen = ({ user }) => {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [sectionID, setSectionID] = useState('')
  
  useEffect(() => {
    const fetchLesson = async () => {
      let response = await getASingleLesson(user, id)
      console.log("fetch lesson:", response)
      setLesson(response.data.lesson)
      setSectionID(response.data.lesson.section_id)
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
          <BackBtn to={`/admin/section/${sectionID}`}>Back</BackBtn>
          <InfoContainerHeader>
            <h2>Lesson Info:</h2>
            <BtnContainer>
              <Btn onClick={() => activateModal()}>edit</Btn>
              <Btn>delete</Btn>
            </BtnContainer>
          </InfoContainerHeader>
        </InfoContainer>
        <InfoContainer>
          {
            lesson.video !== "no video" ? <AdminVideo showModal={showModal} video={lesson.video} /> : null
          }
        </InfoContainer>
        <InfoContainer>
          <p>{lesson.title}</p>
          <p>{lesson.video}</p>
          <p>{lesson.repo}</p>
        </InfoContainer>
      </Container>
    </>
  )
}

export default AdminLessonScreen