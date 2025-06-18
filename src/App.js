import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from './CreatePage';
import JoinPage from './JoinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;