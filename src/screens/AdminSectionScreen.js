import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import { getASingleSection } from '../api/section'

const AdminSectionScreen = ({ user }) => { 
  const { id } = useParams()
  const [section, setSection] = useState({})
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    const fetchSection = async (user, id) => {
      let response = await getASingleSection()
      console.log(response)
    }

    fetchSection(user, id)
  }, [])

  return (
    <div>
        {/* <LessonContainer>
        {lessons.length > 0 ? lessons.map((lesson, index) => (
          <AdminLesson user={user} sectionID={section._id} lesson={lesson} index={index} removeLesson={removeLesson} key={lesson._id} />
        )) : "no lessons"}
      </LessonContainer> */}
    </div>
  )
}

export default AdminSectionScreen