import React, { useState } from 'react';
import { ResourceContainer, LessonResourceDiv } from '../styles/components/UserLessonResource.styles'

const UserLessonResource = ({ lesson }) => {
  const [resources, setResources] = useState(lesson.resources)
  console.log("lesson from lesson resource section: ", lesson)
  return (
    <ResourceContainer>
      <h1>{`${lesson.title} Information`}</h1>
      <LessonResourceDiv>
        <h3>Goal</h3>
        <p>{lesson.goal}</p>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Repo</h3>
        <p>{lesson.repo}</p>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Resources</h3>
        {/* { resources.length > 0 ? resources.map((resource) => (
          <div>
            <p>{resource.link}</p>
            <p>{resource.description}</p>
          </div>
        )) : <p>no resources</p> } */}
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h3>Slack</h3>
        <p>{lesson.slack}</p>
      </LessonResourceDiv>
    </ResourceContainer>
  )
}

export default UserLessonResource