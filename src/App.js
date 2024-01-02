import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './auth/RegisterPage'
import LogInPage from './auth/LogInPage'
import DonatePage from './pages/DonatePage'
import DonationPage from './pages/DonationPage'

function App() {
  return (
    <>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/donate-page" element={<DonatePage/>}/>
          <Route path="/donation-page" element={<DonationPage/>}/>
       </Routes>
    </>
  );
}

export default App;
