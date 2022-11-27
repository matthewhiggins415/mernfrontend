import React, { useState } from 'react';
import { ModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn, Input, Btn } from '../styles/components/AdminModal.styles';
import { updateALessonVideo } from '../api/lesson';

const AdminLessonModal = ({ user, activateModal, showModal, setLesson, lesson }) => {
  console.log("lesson:", lesson)
  // const [title, setTitle] = useState(lesson.title);
  // const [repo, setRepo] = useState(lesson.repo);
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let response = await updateALessonVideo(video, user, lesson._id);
    console.log('submitted:', response);
    setLesson(response.data.updatedLesson)
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
          {/* <Input defaultValue={title} type="text" placeholder={lesson.title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Input defaultValue={repo} type="text" placeholder={lesson.repo} onChange={(e) => {setRepo(e.target.value)}}/> */}
          <Input defaultValue={video} type="file" placeholder={lesson.video} accept=".mov,.mp4" onChange={(e) => {setVideo(e.target.files[0])}}/>
          <Btn type="submit">Submit</Btn>
        </ModalForm>
      </ModalFormContainer>
    </ModalContainer>
  )
}
export default AdminLessonModal