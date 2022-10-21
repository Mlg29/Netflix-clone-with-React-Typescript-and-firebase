import React, { useEffect, useState } from 'react';

import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import { useAppSelector } from './app/hooks';
import { userToken } from './slice/authSlice';

function App() {
  
  var userTok = localStorage.getItem('token')

  const token = useAppSelector(userToken)


  console.log({userTok, token})
  

  return (
    <div className="app">
      {
        token?.length < 1 && !userTok ? <LoginScreen />
          :
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Router>
      }

    </div>
  );
}

export default App;
