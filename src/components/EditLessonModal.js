import React, { useState } from 'react'
import { EditModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn, Input, Btn } from '../styles/components/EditLessonModal.styles';
import { updateALesson } from '../api/lesson';

const EditLessonModal = ({ user, ActiveEditLessonModal, showLessonEditModal, setLesson, lesson }) => {
  const [title, setTitle] = useState(lesson.title);
  const [repo, setRepo] = useState(lesson.repo);
  const [goal, setGoal] = useState(lesson.goal);
  const [slack, setSlack] = useState(lesson.slack);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      title: title,
      repo: repo, 
      goal: goal, 
      slack: slack
    }
    
    let response = await updateALesson(data, user, lesson._id)
    console.log("edit lesson res:", response)
    setLesson(response.data.newLesson)
    ActiveEditLessonModal()
  }

  return (
    <EditModalContainer showLessonEditModal={showLessonEditModal}>
      <ModalFormContainer>
        <ModalHeader>
          <h3>Edit Lesson</h3>
          <ModalCloseBtn onClick={() => ActiveEditLessonModal()}> &#10005; </ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit}>
          <Input defaultValue={title} type="text" placeholder={lesson.title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Input defaultValue={repo} type="text" placeholder={lesson.repo} onChange={(e) => {setRepo(e.target.value)}}/>
          <Input defaultValue={goal} type="textarea" rows="5" placeholder={lesson.goal} onChange={(e) => {setGoal(e.target.value)}}/>
          <Input defaultValue={slack} type="text" placeholder={lesson.slack} onChange={(e) => {setSlack(e.target.value)}}/>
          <Btn type="submit">Submit</Btn>
        </ModalForm>
      </ModalFormContainer>
    </EditModalContainer>
  )
}

export default EditLessonModal