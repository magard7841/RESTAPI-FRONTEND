import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';

const App = () => {
   return (
       <Router>
           <Navbar />
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/register" element={<RegisterForm />} />
               <Route path="/login" element={<LoginForm />} />
               <Route path="/profile" element={<ProfilePage />} />
           </Routes>
       </Router>
   );
};

export default App;
