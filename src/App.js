import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navbar';
import Index from './pages/Index'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="app align-items-center">
      <Router>
        <Navigation />
        <Index />
        <Skills />
        <Experience />
        <Portfolio />
      </Router>
    </div>
  );
}

export default App;