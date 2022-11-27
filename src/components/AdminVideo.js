import React from 'react';
import { VideoContainer } from '../styles/screens/AdminLessonScreen.styles'

const AdminVideo = ({ showModal, video }) => {
  return (
    <VideoContainer autoplay controls={!showModal} crossOrigin="anonymous" loop src={`http://localhost:5000/video/${video}`} type="video/quicktime"></VideoContainer>
  )
}

export default AdminVideo