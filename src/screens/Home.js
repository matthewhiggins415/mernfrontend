import React, { useState, useEffect } from 'react'; 
import { getAllCourses } from '../api/course'

const Home = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      let response = await getAllCourses(user)
      console.log("response", response)
      setCourses(response.courses)
    }

    fetchCourses()
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home