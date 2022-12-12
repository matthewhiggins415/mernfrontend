import React, {useState} from 'react';
import { ModalContainer, ModalFormContainer, ModalForm, ModalHeader, ModalCloseBtn, Input, Btn, CheckboxContainer} from '../styles/components/AdminModal.styles';
import { editACourse } from '../api/course';

const AdminCourseModal = ({ user, activateModal, showModal, course, setCourse}) => {
  const [title, setTitle] = useState(course.title);
  const [published, setPublished] = useState(course.isPublished);
  const [thumbnail, setThumbnail] = useState(course.thumbnail);
  const [about, setAbout] = useState(course.about);
  const [discord, setDiscord] = useState(course.discord);
  const [video, setVideo] = useState(course.setVideo);
  const [price, setPrice] = useState(course.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')

    let newCourse = {
      title: title,
      isPublished: published,
      thumbnail: thumbnail, 
      about: about, 
      discord: discord, 
      video: video, 
      price: price
    }

    const response = await editACourse(newCourse, user, course._id)
    console.log(response)
    setCourse(response.data.updatedCourse)
    activateModal()
  }

  return (
    <ModalContainer showModal={showModal}>
      <ModalFormContainer>
        <ModalHeader>
          <h3>Edit Course</h3>
          <ModalCloseBtn onClick={() => activateModal()}> &#10005; </ModalCloseBtn>
        </ModalHeader>
        <ModalForm onSubmit={handleSubmit}>
          <Input value={title} type="text" placeholder={course.title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Input value={thumbnail} type="text" placeholder={course.thumbnail} onChange={(e) => {setThumbnail(e.target.value)}}/> 
          <Input value={about} type="text" placeholder={course.about} onChange={(e) => {setAbout(e.target.value)}}/> 
          <Input value={discord} type="text" placeholder={course.discord} onChange={(e) => {setDiscord(e.target.value)}}/> 
          <Input value={video} type="text" placeholder={course.video} onChange={(e) => {setVideo(e.target.value)}}/> 
          <Input value={price} type="text" placeholder={course.price} onChange={(e) => {setPrice(e.target.value)}}/> 
          <CheckboxContainer>
            <label>Published</label>
            <input type="checkbox" value={published} onChange={(e) => {setPublished(!published)}} />
          </CheckboxContainer>
          <Btn type="submit">Submit</Btn>
        </ModalForm>
      </ModalFormContainer>
    </ModalContainer>
  )
}

export default AdminCourseModal