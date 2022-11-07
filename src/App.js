import { useState } from 'react'
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home'
import Landing from './screens/Landing'
import Pricing from './screens/Pricing'
import Register from './screens/Register'
import Login from './screens/Login'
import Faq from './screens/Faq'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

require('./App.css')


const App = () => {
  const [user, setUser] = useState(null)

  const clearUser = () => setUser(null)

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
      <Navbar />
      <ToastContainer theme="light" position="top-right" autoClose={1500}/>
      <Routes>
        <Route path='/' element={<Landing/>} exact />
        <Route path='/pricing' element={<Pricing/>} exact />
        <Route path='/home' element={<Home/>} exact />
        <Route path='/register' element={<Register notify={notify} setUser={setUser} />} exact />
        <Route path='/login' element={<Login notify={notify} setUser={setUser} />} exact />
        <Route path='/faq' element={<Faq />} exact/>
      </Routes>    
    </Router>
  );
}

export default App;
