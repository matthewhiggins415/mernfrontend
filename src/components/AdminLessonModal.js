import React, { useState } from 'react';
import { ModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn, Input, Btn } from '../styles/components/AdminModal.styles';
import { updateALesson } from '../api/lesson';

const AdminLessonModal = ({ user, activateModal, showModal, setLesson, lesson }) => {
    console.log("lesson:", lesson)
  const [title, setTitle] = useState(lesson.title);
  const [video, setVideo] = useState(lesson.video);
  const [repo, setRepo] = useState(lesson.repo);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newLesson = {
      title: title, 
      video: video, 
      repo: repo
    };

    let response = await updateALesson(newLesson, user, lesson._id);
    console.log('submitted:', response);
    setLesson(response.data.newLesson)
    activateModal();
  }

  return (
    <ModalContainer showModal={showModal}>
      <ModalFormContainer>
        <ModalHeader>
          <h3>Edit Lesson</h3>
          <ModalCloseBtn onClick={() => activateModal()}> &#10005; </ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit}>
          <Input value={title} type="text" placeholder={lesson.title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Input value={video} type="text" placeholder={lesson.video} onChange={(e) => {setVideo(e.target.value)}}/>
          <Input value={repo} type="text" placeholder={lesson.repo} onChange={(e) => {setRepo(e.target.value)}}/>
          <Btn type="submit">Submit</Btn>
        </ModalForm>
      </ModalFormContainer>
    </ModalContainer>
  )
}
export default AdminLessonModal