import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
        </nav>

        <Routes>
          <Route path="/">
            <Home />  
          </Route>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/contact">
            <Contact />  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App