import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { signOut } from '../api/auth'

const SignOut = ({ user, clearUser, notify }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    const performSignOut = async () => {
      try {
        await signOut(user)
        clearUser()
        setShouldNavigate(true)
      } catch (e) {
        notify('something went wrong', 'danger')
      }
    }

    performSignOut()
  }, [])
  
  if (!user) {
    return <Navigate to="/"/>
  }

  return ''
}

export default SignOut 