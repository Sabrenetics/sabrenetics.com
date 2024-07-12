// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Account from './pages/Account';
import Books from './pages/Books';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Cybersecurity from './pages/Cybersecurity';
import CyborgMuseum from './pages/CyborgMuseum';
import Events from './pages/Events';
import History from './pages/History';
import HomePage from './pages/Homepage';
import Library from './pages/Library';
import Login from './pages/Login';
import Media from './pages/Media';
import NotFound from './pages/NotFound';
import OpenSourceProjects from './pages/OpenSourceProjects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PurchaseAndRefundPolicy from './pages/PurchaseAndRefundPolicy';
import SignUp from './pages/SignUp';
import TermsAndConditions from './pages/TermsAndConditions';
import WritePublishBook from './pages/WritePublishBook';
import './App.css';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null); // Clear authToken state
    navigate('/'); // Navigate to home page after logout
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header authToken={authToken} handleLogout={handleLogout} />
        <div className="row">
          <div className="column1"></div>
          <div className="column2">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/books" element={<Books />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cyborgmuseum" element={<CyborgMuseum />} />
              <Route path="/events" element={<Events />} />
              <Route path="/history" element={<History />} />
              <Route path="/library" element={<Library />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/media" element={<Media />} />
              <Route path="/opensourceprojects" element={<OpenSourceProjects />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/PurchaseAndRefundPolicy" element={<PurchaseAndRefundPolicy />} />
              <Route path="/termsandconditions" element={<TermsAndConditions />} />
              <Route path="/writepublishbook" element={<WritePublishBook />} />
              <Route path="/signup" element={<SignUp />} />
              {!authToken ? (
                <Route path="/login" element={<Login />} />
              ) : (
                <>
                  <Route path="/account" element={<Account />} />
                </>
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="column3"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
