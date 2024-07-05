import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Event from './components/event'
import About from './components/about'
import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import Gallery from './components/gallery'
const App = () => (
  <Router>
    <Header />
    <main className='main'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Add more routes here */}

    </Routes>
    </main>
    <Footer />
  </Router>
  
);

export default App;
