import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
