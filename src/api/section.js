import axios from 'axios'
import apiUrl from '../apiConfig'

// create a section 

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

// destroy a single section 
export const deleteASection = (user, course, section) => {
  return axios.delete(apiUrl + `/course/${course}/section/${section}`, {
    header: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
