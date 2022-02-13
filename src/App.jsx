import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import AgentSignup from './pages/AgentSignup';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ApartmentDetail from './pages/ApartmentDetail';
import AgentProfile from './pages/AgentProfile';
import AgentOrders from './pages/AgentOrders';
import ErrorPage from './pages/ErrorPage';
function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/agent-signup' element={<AgentSignup/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/agent-profile' element={<AgentProfile/>}/>
      <Route path='/agent-orders' element={<AgentOrders/>}/>
      <Route path='/apartment/:id' element={<ApartmentDetail/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
