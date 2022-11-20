import axios from 'axios'
import apiUrl from '../apiConfig'

// create a course 
export const createACourse = (user) => {
  let body = {}
  return axios.post(apiUrl + '/course', body, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get all courses 
export const getAllCourses = (user) => {
  return axios.get(apiUrl + '/courses', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get a single course 
export const getASingleCourse = (user, id) => {
  return axios.get(apiUrl + `/courses/${id}`, {
    headers: {
    Authorization: `Bearer ${user.token}`
    }
  })
}

// edit a single course 

// publish a single course 
export const publishACourse = (user, id) => {
  return axios.put(apiUrl + `/course/${id}/publish`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a course 
export const DestroyACourse = (user, id) => {
  return axios.delete(apiUrl + `/course/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}