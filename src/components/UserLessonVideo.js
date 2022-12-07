import React from 'react';
import { UserVideoContainer, LessonVideo } from '../styles/components/VideoComponent.styles';

const UserLessonVideo = ({ lesson }) => {
  console.log("lesson from video component: ", lesson)
  let { video } = lesson
  return (
    <UserVideoContainer>
      <LessonVideo autoplay controls crossOrigin="anonymous" loop src={`http://localhost:5000/video/${video}`} type="video/quicktime"></LessonVideo>s
    </UserVideoContainer>
  )
}

export default UserLessonVideo