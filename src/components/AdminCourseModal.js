import React, {useState} from 'react';
import { ModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn } from '../styles/components/AdminModal.styles'

const AdminCourseModal = ({ activateModal, showModal, course}) => {
  return (
    <ModalContainer showModal={showModal}>
      <ModalFormContainer>
        <ModalHeader>
          <h3>Edit Course</h3>
          <ModalCloseBtn onClick={() => activateModal()}> &#10005; </ModalCloseBtn>
        </ModalHeader>
        <ModalForm>
          <input type="text" placeholder={course.title}/>
          <div>
            <label>Published</label>
            <input type="checkbox" checked={course.isPublished}/>
          </div>
          <button>Submit</button>
        </ModalForm>
      </ModalFormContainer>
    </ModalContainer>
  )
}

export default AdminCourseModal