import React from 'react';
import { UserVideoContainer } from '../styles/components/VideoComponent.styles';

const UserLessonVideo = ({ lesson }) => {
  console.log("lesson from video component: ", lesson)
  return (
    <UserVideoContainer>
      {lesson.video ? <iframe src={lesson.video} style={{'width':'100%','height':'550px','left':'0','top':'0', 
"border":"none", "pointerEvents": "none" }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe> : <p>no vid</p> }
    </UserVideoContainer>
  )
}

export default UserLessonVideo