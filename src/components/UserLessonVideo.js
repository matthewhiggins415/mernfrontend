import React from 'react';
import { UserVideoContainer, LessonVideo } from '../styles/components/VideoComponent.styles';

const UserLessonVideo = ({ lesson }) => {
  console.log("lesson from video component: ", lesson)
  let { video } = lesson
  return (
    <UserVideoContainer>
      <iframe src={lesson.video} style={{'width':'100%','height':'550px','left':'0','top':'0', 
"border":"none" }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe>
    </UserVideoContainer>
  )
}

export default UserLessonVideo