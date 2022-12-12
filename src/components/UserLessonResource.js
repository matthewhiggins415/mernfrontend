import React, { useState } from 'react';
import { ResourceContainer, LessonResourceDiv } from '../styles/components/UserLessonResource.styles'

const UserLessonResource = ({ lesson }) => {
  const [resources, setResources] = useState(lesson.resources)
  console.log("lesson from lesson resource section: ", lesson)
  return (
    <ResourceContainer>
      <h1>{lesson.title + ":"}</h1>
      <LessonResourceDiv>
        <h4>{lesson.goal}</h4>
      </LessonResourceDiv>
      <LessonResourceDiv>
        <h4>{lesson.repo}</h4>
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
        <h4>{lesson.video}</h4>
      </LessonResourceDiv>
    </ResourceContainer>
  )
}

export default UserLessonResource