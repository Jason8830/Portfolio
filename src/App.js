import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import Waves from './components/Waves/Waves.js'
import Starter from './components/Starter/Starter';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import  Footer  from './components/Footer/Footer';
function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <Starter/>
      <Waves/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
