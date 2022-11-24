import React, { useState } from 'react';
import { ModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn, Input, Btn } from '../styles/components/AdminModal.styles';
import { editASection } from '../api/section';

const AdminSectionModal = ({ user, activateModal, showModal, setSection, section }) => {
  const [title, setTitle] = useState(section.title)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newSection = {
      title: title
    };

    let response = await editASection(newSection, user, section._id)
    console.log('submited:', response)
    setSection(response.data.updatedSection)
    activateModal();
  }

  return (
    <ModalContainer showModal={showModal}>
      <ModalFormContainer>
        <ModalHeader>
          <h3>Edit Section</h3>
          <ModalCloseBtn onClick={() => activateModal()}> &#10005; </ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit}>
          <Input value={title} type="text" placeholder={section.title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Btn type="submit">Submit</Btn>
        </ModalForm>
      </ModalFormContainer>
    </ModalContainer>
  )
}

export default AdminSectionModal