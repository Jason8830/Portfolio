import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Starter from './components/Starter/Starter';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import  Footer  from './components/Footer/Footer';

/*
  const [username, setUsername] = useState('Default username');
  return (
    <>
      <Sibling1 setUsername={setUsername} />
      <Sibling2 username={username} />

*/



function App() {
  
  return (
    <>
    <Router> 
      
      <Starter/>
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
