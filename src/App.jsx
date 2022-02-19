import {Routes, Route} from 'react-router-dom'
import ApartmentDetail from './pages/ApartmentDetail';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SearchResult from './pages/SearchResult';
import ErrorPage from './pages/ErrorPage';
// USER
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
// AGENT
import AgentSignup from './pages/agent/AgentSignup';
import AgentProfile from './pages/agent/AgentProfile';
import AgentOrders from './pages/agent/AgentOrders';
import AgentMessage from './pages/agent/AgentMessage';
import AgentTransactions from './pages/agent/AgentTransactions';
function App() {
  
  return (
		<Routes>
			{/* GENERAL ROUTES */}
			<Route exact path="/" element={<Home />} />
			<Route path="/contact-us" element={<Contact />} />
			<Route path="/about-us" element={<About />} />
			<Route path="/search-results" element={<SearchResult />} />
			<Route path="/apartment/:id" element={<ApartmentDetail />} />
			<Route path="*" element={<ErrorPage />} />
			{/* AGENT ROUTES */}
			<Route path="/agent-signup" element={<AgentSignup />} />
			<Route path="/agent-profile" element={<AgentProfile />} />
			<Route path="/agent-orders" element={<AgentOrders />} />
			<Route path="/agent-messages" element={<AgentMessage />} />
			<Route path="/agent-transactions" element={<AgentTransactions />} />
			{/* USER ROUTES */}
			<Route path="/login" element={<UserLogin />} />
			<Route path="/signup" element={<UserSignup />} />
		</Routes>
  );
}

export default App;
