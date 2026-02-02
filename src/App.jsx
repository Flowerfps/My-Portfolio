import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Top from './pages/Top'
import About from './pages/About'
import Gallery from './pages/Gallery'
import SNS from './pages/SNS'
import Works from './pages/Works'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sns" element={<SNS />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
