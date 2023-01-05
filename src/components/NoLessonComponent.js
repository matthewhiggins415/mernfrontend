import React from 'react'
import { NoLessonContainer } from '../styles/screens/CourseScreen.styles'

const NoLessonComponent = ({ course }) => {
  return (
      <iframe src={course.introductionVideo} style={{'width':'100%','height':'550px','left':'0','top':'0', "border":"none", "pointerEvents": "none" }} allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe>
  )
}

export default NoLessonComponent