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
import CyberwareCatalogue from './pages/CyberwareCatalogue';
import CyborgMuseum from './pages/CyborgMuseum';
import Cybersecurity from './pages/Cybersecurity';
import Cyberware from './pages/Cyberware';
import Events from './pages/Events';
import History from './pages/History';
import HomePage from './pages/Homepage';
import Library from './pages/Library';
import LearnBiomedicalEngineeringMathsForBeginners from './pages/blogs/LearnBiomedicalEngineeringMathsForBeginners';
import LearnBookPublishingCourse from './pages/blogs/LearnBookPublishingCourse';
import LearnCosmeticPiercingForBeginners from './pages/blogs/LearnCosmeticPiercingForBeginners';
import LearnCyberwareCourse from './pages/blogs/LearnCyberwareCourse';
import LearnECGForBeginners from './pages/blogs/LearnECGForBeginners';
import LearnNeuroscienceForBeginners from './pages/blogs/LearnNeuroscienceForBeginners';
import LearnProgrammingForBeginners from './pages/blogs/LearnProgrammingForBeginners';
import LearnRFIDForBeginners from './pages/blogs/LearnRFIDForBeginners';
import Login from './pages/Login';
import Media from './pages/Media';
import Merchandise from './pages/Merchandise';
import NotFound from './pages/NotFound';
import OpenSourceProjects from './pages/OpenSourceProjects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PurchaseAndRefundPolicy from './pages/PurchaseAndRefundPolicy';
import SignUp from './pages/SignUp';
import Terminologies from './pages/blogs/Terminologies';
import TermsAndConditions from './pages/TermsAndConditions';
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
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/cyberwarecatalogue" element={<CyberwareCatalogue />} />
              <Route path="/cyborgmuseum" element={<CyborgMuseum />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/cyberware" element={<Cyberware />} />
              <Route path="/events" element={<Events />} />
              <Route path="/history" element={<History />} />
              <Route path="/library" element={<Library />} />
              <Route path="/LearnBiomedicalEngineeringMathsForBeginners" element={<LearnBiomedicalEngineeringMathsForBeginners />} />
              <Route path="/LearnBookPublishingCourse" element={<LearnBookPublishingCourse />} />
              <Route path="/LearnCosmeticPiercingForBeginners" element={<LearnCosmeticPiercingForBeginners />} />
              <Route path="/LearnCyberwareCourse" element={<LearnCyberwareCourse />} />
              <Route path="/LearnECGForBeginners" element={<LearnECGForBeginners />} />
              <Route path="/LearnNeuroscienceForBeginners" element={<LearnNeuroscienceForBeginners />} />
              <Route path="/LearnProgrammingForBeginners" element={<LearnProgrammingForBeginners />} />
              <Route path="/LearnRFIDForBeginners" element={<LearnRFIDForBeginners />} />
              <Route path="/media" element={<Media />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/opensourceprojects" element={<OpenSourceProjects />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/PurchaseAndRefundPolicy" element={<PurchaseAndRefundPolicy />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/terminologies" element={<Terminologies />} />
              <Route path="/termsandconditions" element={<TermsAndConditions />} />
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
