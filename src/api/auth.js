import axios from 'axios'
import apiUrl from '../apiConfig'

//register
export const signUp = (data) => {

    console.log("apiUrl:", apiUrl)
  let { email, password, passwordConfirmation } = data
    
  return axios.post(apiUrl + '/register', {
    credentials: {
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}

//login
export const signIn = (data) => {
    let { email, password } = data
    return axios.post(apiUrl + '/login', {
      credentials: {
        email,
        password
      }
  })
}

//signout 
export const signOut = (user) => {
    return axios.delete(apiUrl + '/sign-out', {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }

  // change password
  export const changePassword = (oldPassword, newPassword, user) => {
    return axios.patch(
      apiUrl + '/change-password',
      {
        passwords: {
          old: oldPassword,
          new: newPassword
        }
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )
  }