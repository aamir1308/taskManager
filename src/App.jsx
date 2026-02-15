import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="*" element={<div className="text-center p-8"><h1>404</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}