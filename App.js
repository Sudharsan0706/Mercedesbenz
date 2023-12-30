import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Contact from './Contact';
import Insurance from './Insurance';
import Finance from './Finance';
import Allmodels from './Allmodels';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={< Page1/>} />
        <Route path="/page2" element={< Page2/>} />
        <Route path="/Contact" element={< Contact/>} />
        <Route path="/Insurance" element={< Insurance/>} />
        <Route path="/Finance" element={< Finance/>} />
        <Route path="/Allmodels" element={< Allmodels/>} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
