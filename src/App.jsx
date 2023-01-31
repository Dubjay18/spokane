import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ApartmentDetail from "./pages/ApartmentDetail";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SearchResult from "./pages/SearchResult";
import ErrorPage from "./pages/ErrorPage";
// USER
import UserLogin from "./pages/user/UserLogin";
import UserSignup from "./pages/user/UserSignup";
import UserProfile from "./pages/user/UserProfile";
import UserNotification from "./pages/user/UserNotification";
import UserMessage from "./pages/user/UserMessage";
import UserTransactions from "./pages/user/UserTransactions";
import UserEditProfile from "./pages/user/UserEditProfile";
// AGENT
import AgentSignup from "./pages/agent/AgentSignup";
import AgentProfile from "./pages/agent/AgentProfile";
import AgentOrders from "./pages/agent/AgentOrders";
import AgentProduct from "./pages/agent/AgentProduct";
import AgentProductDetail from "./pages/agent/AgentProductDetail";
import AgentMessage from "./pages/agent/AgentMessage";
import AddProduct from "./pages/agent/AddProduct";
import AgentNotification from "./pages/agent/AgentNotification";
import AgentEditProfile from "./pages/agent/AgentEditProfile";
import AgentTransactions from "./pages/agent/AgentTransactions";

import UserOtpVerification from "./pages/user/UserOtpVerification";
import UserPasswordReset from "./pages/user/UserPasswordReset";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from './redux/actions/userAction'
import Transaction from "./pages/Transaction";

function App(props) {
  const dispatch = useDispatch();
  const storedToken = localStorage.getItem("spokanetoken");
  const spokaneUser = JSON.parse(localStorage.getItem("spokaneuser"));
  const user = useSelector((state)=>state.user)

  // useEffect(() => {
  //   if (!user.email && spokaneUser.email) {
  //     dispatch(setUser(Object.assign(spokaneUser, {Token: storedToken})))
  //   }
  //   else if(!spokaneUser.email && user.email) {
  //     window.localStorage.setItem("spokaneuser", JSON.stringify(user));
  //   }
    
  // }, [user, spokaneUser]);

  return (
    <Routes>
      {/* GENERAL ROUTES */}
      <Route exact path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/search-results" element={<SearchResult />} />
      <Route path="/apartment/:id" element={<Outlet />}>
        <Route index element={<ApartmentDetail />} />
        {/* Transaction */}
        <Route path="purchase" element={<Transaction />} />
      </Route>
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
      <Route path="/login" element={<UserLogin props={props} />}></Route>
      <Route path="/signup" element={<UserSignup />} />
      <Route
        path="/edit-userprofile"
        element={<UserEditProfile props={props} />}
      />
      <Route path="/user-profile" element={<UserProfile props={props} />} />
      <Route path="/user-messages" element={<UserMessage />} />
      <Route path="/user-transactions" element={<UserTransactions />} />
      <Route path="/user-notification" element={<UserNotification />} />
      <Route path="/otp" element={<UserOtpVerification />} />
      <Route path="/forgot_password" element={<UserPasswordReset />} />
    </Routes>
  );
}

export default App;
