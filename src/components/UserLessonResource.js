import React from 'react';
import { ResourceContainer, LessonResourceDiv } from '../styles/components/UserLessonResource.styles'

const UserLessonResource = ({ lesson }) => {
  console.log("lesson from lesson resource section: ", lesson)
  return (
    <ResourceContainer>
      <h1>{`${lesson.title} Information`}</h1>
      <LessonResourceDiv>
        <h3>Goal</h3>
        <p></p>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Repo</h3>
        <p>{lesson.repo}</p>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Resources</h3>
        <p></p>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Slack</h3>
        <p></p>
      </LessonResourceDiv>
    </ResourceContainer>
  )
}

export default UserLessonResource