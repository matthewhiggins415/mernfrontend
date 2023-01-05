import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleLesson } from '../api/lesson';
import { Container, BackBtn, BtnContainer, InfoContainer, InfoContainerHeader, Btn} from '../styles/screens/AdminCourseScreen.styles';
import AdminVideo from '../components/AdminVideo';
import EditLessonModal from '../components/EditLessonModal';

const AdminLessonScreen = ({ user }) => {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});
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

  const ActiveEditLessonModal = () => {
    setShowLessonEditModal(!showLessonEditModal)
  }
  return (
    <>
      <EditLessonModal user={user} ActiveEditLessonModal={ActiveEditLessonModal} showLessonEditModal={showLessonEditModal} lesson={lesson} setLesson={setLesson}/>
      <Container>
        <InfoContainer>
          <BackBtn to={`/admin/section/${lesson.section_id}`}>Back</BackBtn>
          <InfoContainerHeader>
            <h2>Lesson Info:</h2>
            <BtnContainer>
              <Btn onClick={() => ActiveEditLessonModal()}>edit</Btn>
            </BtnContainer>
          </InfoContainerHeader>
        </InfoContainer>
        <InfoContainer>
          { hasVideo ? (<AdminVideo video={lesson.video} />) : null }
        </InfoContainer>
        <InfoContainer>
          <p>TITLE: {lesson.title}</p>
          <p>VIDEO LINK: {lesson.video}</p>
          <p>REPO LINK: {lesson.repo}</p>
          <p>GOAL: {lesson.goal}</p>
        </InfoContainer>
      </Container>
    </>
  )
}

export default AdminLessonScreen