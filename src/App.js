import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreatePage from './CreatePage';
import JoinPage from './JoinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/create" />} /> {/* Redirect root */}
        <Route path="/create" element={<CreatePage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;
