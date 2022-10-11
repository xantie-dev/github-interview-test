import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProfileDetail from './components/ProfileDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:login" element={<ProfileDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
