import { useState } from 'react'
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home'
import AdminHome from './screens/AdminHome'
import Landing from './screens/Landing'
import Pricing from './screens/Pricing'
import Register from './screens/Register'
import Login from './screens/Login'
import SignOut from './components/SignOut'
import Faq from './screens/Faq'
import Payment from './screens/Payment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CourseScreen from './screens/CourseScreen';
import AdminCourseScreen from './screens/AdminCourseScreen';
import AdminSectionScreen from './screens/AdminSectionScreen';
import AdminLessonScreen from './screens/AdminLessonScreen';
import CourseHomeScreen from './screens/CourseHomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ProfileScreen from './screens/ProfileScreen'

require('./App.css')


const App = () => {
  const [user, setUser] = useState(null)

  const clearUser = () => {
    setUser(null)
    notify('sign out successful')
  }

  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`)};
  }


  return (
    <Router>
      <Navbar user={user} />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path='/' element={<Landing/>} exact />
        <Route path='/pricing' element={<Pricing/>} exact />
        <Route path='/home' element={<Home user={user}/>} exact />
        <Route path='/coursehome/:id' element={<CourseHomeScreen user={user}/>} exact/>
        <Route path='/adminhome' element={<AdminHome user={user} notify={notify}/>} exact />
        <Route path='/register' element={<Register notify={notify} setUser={setUser} />} exact />
        <Route path='/payment' element={<Payment user={user}/>} exact />
        <Route path='/course/:id' element={<CourseScreen user={user}/>} exact/>
        <Route path='/profile' element={<ProfileScreen user={user}/>} exact/>

        <Route path='/admin/course/:id' element={<AdminCourseScreen user={user} />} />
        <Route path='/admin/section/:id' element={<AdminSectionScreen user={user} />} />
        <Route path='/admin/lesson/:id' element={<AdminLessonScreen user={user} />} />

        <Route path='/login' element={<Login notify={notify} setUser={setUser} />} exact />
        <Route path='/faq' element={<Faq />} exact/>
        <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user} notify={notify} />} exact/>
        <Route path="*" element={<NotFoundScreen /> }/>
      </Routes>    
    </Router>
  );
}

export default App;
