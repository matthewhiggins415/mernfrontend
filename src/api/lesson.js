import axios from 'axios'
import apiUrl from '../apiConfig'

// create a lesson
export const createALesson = (user, course, section) => {
  let body = {};
  return axios.post(apiUrl + `/course/${course}/section/${section}/lesson`, body, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
};

// read all lessons of a section 
export const getLessonsOfSection = (user, section) => {
  return axios.get(apiUrl + `/section/${section}/lessons`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read a single lesson 
export const getASingleLesson = (user, lesson) => {
  return axios.get(apiUrl + `/lesson/${lesson}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit a single lesson 
export const updateALesson = (data, user, lesson) => {
  return axios.put(apiUrl + `/lesson/${lesson}`, {
    lesson: data
  }, {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateALessonVideo = (data, user, lesson) => {
  console.log("data in api post", data)
  return axios.post(apiUrl + `/lesson/${lesson}/video`, {
    video: data
  }, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a single lesson 
export const deleteALesson = (user, section, lesson) => {
  return axios.delete(apiUrl + `/section/${section}/lesson/${lesson}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}