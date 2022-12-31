import React from 'react';
import { ResourceContainer, LessonResourceDiv } from '../styles/components/UserLessonResource.styles'

const UserLessonResource = ({ lesson }) => {
  return (
    <ResourceContainer>
      <h1>{lesson.title + ":"}</h1>
      <LessonResourceDiv>
        <h4>{lesson.goal}</h4>
      </LessonResourceDiv>
      {lesson.repo !== 'http://repo-link.com' ? 
        <LessonResourceDiv>
          <a style={{ "color": "white", "letterSpacing": "1.3px"}} href={lesson.repo} target="_blank">github repo</a>
        </LessonResourceDiv> 
      : null}
    </ResourceContainer>
  )
}

export default UserLessonResource