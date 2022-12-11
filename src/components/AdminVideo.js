import React from 'react';
import { VideoContainer } from '../styles/screens/AdminLessonScreen.styles'

const AdminVideo = ({ showModal, video }) => {
  console.log("video:", video)
  return (
    <iframe src={video} style={{'width':'100%','height':'550px','left':'0','top':'0', 
"border":"none" }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe>
  )
}

export default AdminVideo