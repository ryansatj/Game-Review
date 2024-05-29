import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Loginpage from './pages/Loginpage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AboutUs from './pages/AboutUsPage.jsx';
import MainPage from './pages/MainPage.jsx';
import AboutUsLog from './pages/AboutUsLogPage.jsx';
import CreateReviewPage from './pages/CreateReviewPage.jsx';
import EditPage from './pages/EditPage.jsx';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Loginpage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="games" element={<MainPage />} />
      <Route path="aboutus" element={<AboutUsLog />} />
      <Route path="create" element={<CreateReviewPage />} />
      <Route path="edit/:id" element={<EditPage />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById("root")
);
