import axios from 'axios'
import apiUrl from '../apiConfig'

// create a lesson
export const createALesson = (user, course, section) => {
  return axios.post(apiUrl + `/course/${course}/section/${section}/lesson`, {
    header: {
      Authorization: `Bearer ${user.token}`
    }
  })
};

// read all lessons of a section 
export const getLessonsOfSection = (user, section) => {
  return axios.get(apiUrl + `/section/${section}/lessons`, {
    header: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read a single lesson 
export const getASingleLesson = (user, lesson) => {
  return axios.get(apiUrl + `/lesson/${lesson}`, {
    header: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit a single lesson 

// delete a single lesson 
export const deleteALesson = (user, section, lesson) => {
  return axios.delete(apiUrl + `/section/${section}/lesson/${lesson}`, {
    header: {
      Authorization: `Bearer ${user.token}`
    }
  })
}