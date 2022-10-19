import React from 'react';

import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app">
      {
        !user ? <LoginScreen />
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
