import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AuthForm from './components/AuthForm'; // Import AuthForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} /> {/* Route for AuthForm */}
      </Routes>
    </Router>
  );
}

export default App;
