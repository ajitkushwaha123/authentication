import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Otp from './components/Otp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx';
import Home from './components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path='/home' 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          {/* <Route path='/' element={<Layout />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route path='/otp' element={<Otp />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  </React.StrictMode>,
);
