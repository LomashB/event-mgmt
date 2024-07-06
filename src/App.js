import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import EventList from './components/eventlist';
import EventDetail from './components/eventdetail';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact'; 
import Gallery from './components/gallery';
import Login from './components/login'
import Signup from './components/signup'


const App = () => (
  <Router>
    <Header />
    <main className='main'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/events" element={<EventList />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      {/* Add more routes here */}

    </Routes>
    </main>
    <Footer />
  </Router>
  
);

export default App;
