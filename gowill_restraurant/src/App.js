import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Menu from './pages/Menu.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About.js';
import Contact from './pages/Contact.js';



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes><Route path='/' element={<Home />}/></Routes>
        <Routes><Route path='/menu' exact Component={Menu}/></Routes>
        <Routes><Route path='/about' exact Component={About}/></Routes>
        <Routes><Route path='/contact' exact Component={Contact}/></Routes>
      </Router>
      <Footer />
      </div>
  );
}

export default App;
