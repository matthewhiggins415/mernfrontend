import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleLesson } from '../api/lesson';
import { Container, BackBtn, BtnContainer, InfoContainer, InfoContainerHeader, Btn} from '../styles/screens/AdminCourseScreen.styles';
import AdminLessonModal from '../components/AdminLessonModal';
import AdminVideo from '../components/AdminVideo';
import EditLessonModal from '../components/EditLessonModal';

const AdminLessonScreen = ({ user }) => {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showLessonEditModal, setShowLessonEditModal] = useState(false)
  const [hasVideo, setHasVideo] = useState(false)
  
  useEffect(() => {
    const fetchLesson = async () => {
      let response = await getASingleLesson(user, id)
      console.log("fetch lesson:", response)
      setLesson(response.data.lesson)

      if (response.data.lesson.video === "no video") {
        setHasVideo(false)
      } else {
        setHasVideo(true)
      }
    } 
    
    fetchLesson()
  }, [])

  const activateModal = () => {
    setShowModal(!showModal)
  }

  const ActiveEditLessonModal = () => {
    setShowLessonEditModal(!showLessonEditModal)
  }
  return (
    <>
      <AdminLessonModal user={user} activateModal={activateModal} showModal={showModal} lesson={lesson} setLesson={setLesson}/>
      <EditLessonModal user={user} ActiveEditLessonModal={ActiveEditLessonModal} showLessonEditModal={showLessonEditModal} lesson={lesson} setLesson={setLesson}/>
      <Container>
        <InfoContainer>
          <BackBtn to={`/admin/section/${lesson.section_id}`}>Back</BackBtn>
          <InfoContainerHeader>
            <h2>Lesson Info:</h2>
            <BtnContainer>
              <Btn onClick={() => activateModal()}>add video</Btn>
              <Btn onClick={() => ActiveEditLessonModal()}>edit</Btn>
              <Btn>delete</Btn>
            </BtnContainer>
          </InfoContainerHeader>
        </InfoContainer>
        <InfoContainer>
          {
            // only show vdieo component if the video property of lesson is NOT "no video"
            hasVideo ? (<AdminVideo showModal={showModal} video={lesson.video} />) : null
          }
        </InfoContainer>
        <InfoContainer>
          <p>{lesson.title}</p>
          <p>{lesson.video}</p>
          <p>{lesson.repo}</p>
          <p>{lesson.goal}</p>
        </InfoContainer>
      </Container>
    </>
  )
}

export default AdminLessonScreen