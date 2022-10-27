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
require('./App.css')

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} exact />
        <Route path='/pricing' element={<Pricing/>} exact />
        <Route path='/home' element={<Home/>} exact />
        <Route path='/register' element={<Register />} exact />
        <Route path='/login' element={<Login />} exact />
      </Routes>    
    </Router>
  );
}

export default App;
