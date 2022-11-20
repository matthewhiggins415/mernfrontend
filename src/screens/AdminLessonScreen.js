import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getASingleLesson } from '../api/lesson';
import { Container, BackBtn, InfoContainer, InfoContainerHeader, LessonHeader, TinyBtn} from '../styles/screens/AdminLessonScreen.styles';

const AdminLessonScreen = ({ user }) => {
  const { id } = useParams();
  const [lesson, setLesson] = useState({});

  useEffect(() => {
    const fetchLesson = async () => {
      let response = await getASingleLesson(user, id)
      console.log(response)
      setLesson(response.data.lesson)
    } 
    
    fetchLesson()
  }, [])

  return (
    <Container>
      <BackBtn to={`/admin/section/${lesson.section_id}`}>Back</BackBtn>
      <InfoContainer>
          <InfoContainerHeader>
            <p style={{color: 'white'}}>{lesson.title}</p>
            <TinyBtn>edit</TinyBtn>
          </InfoContainerHeader>
          <div>
            <p>{lesson.video}</p>
          </div>
          <p>{lesson.repo}</p>
      </InfoContainer>
    </Container>
  )
}

export default AdminLessonScreen