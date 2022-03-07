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
import UserProfile from "./pages/user/UserProfile";
import UserNotification from "./pages/user/UserNotification";
import UserMessage from "./pages/user/UserMessage";
import UserTransactions from "./pages/user/UserTransactions";
import UserEditProfile from "./pages/user/UserEditProfile";
// AGENT
import AgentSignup from './pages/agent/AgentSignup';
import AgentProfile from './pages/agent/AgentProfile';
import AgentOrders from './pages/agent/AgentOrders';
import AgentProduct from './pages/agent/AgentProduct';
import AgentProductDetail from './pages/agent/AgentProductDetail';
import AgentMessage from './pages/agent/AgentMessage';
import AddProduct from './pages/agent/AddProduct';
import AgentNotification from './pages/agent/AgentNotification';
import AgentEditProfile from './pages/agent/AgentEditProfile';
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
			<Route path="/agent-products" element={<AgentProduct />} />
			<Route path="/agent-notification" element={<AgentNotification />} />
			<Route path="/agent-detail" element={<AgentProductDetail />} />
			<Route path="/add-product" element={<AddProduct />} />
			<Route path="/edit-profile" element={<AgentEditProfile />} />
			<Route path="/agent-transactions" element={<AgentTransactions />} />
			{/* USER ROUTES */}
			<Route path="/login" element={<UserLogin />} />
			<Route path="/signup" element={<UserSignup />} />
			<Route path="/edit-userprofile" element={<UserEditProfile />} />
			<Route path="/user-profile" element={<UserProfile />} />
			<Route path="/user-messages" element={<UserMessage />} />
			<Route path="/user-transactions" element={<UserTransactions />} />
			<Route path="/user-notification" element={<UserNotification />} />
		</Routes>
  );
}

export default App;
