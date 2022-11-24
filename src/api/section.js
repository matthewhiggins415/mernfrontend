import axios from 'axios'
import apiUrl from '../apiConfig'

// create a section
export const createASection = (user, courseId) => {
  let body = {}
  return axios.post(apiUrl + `/course/${courseId}/section`, body, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read all sections 
export const getAllSections = (user, id) => {
  return axios.get(apiUrl + `/course/${id}/section`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read a single section 
export const getASingleSection = (user, id) => {
  return axios.get(apiUrl + `/section/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit a single section 
export const editASection = (data, user, id) => {
  return axios.put(apiUrl + `/section/${id}`, {
    section: data 
  }, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// destroy a single section 
export const deleteASection = (user, course, section) => {
  return axios.delete(apiUrl + `/course/${course}/section/${section}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    }
  })
}
