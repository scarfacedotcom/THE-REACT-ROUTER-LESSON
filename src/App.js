import './App.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App