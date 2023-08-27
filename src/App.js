import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarr from './components/Navbarr';
import Header from './components/Header';
import About from './components/About';
import Certif from './components/Certif';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';


function App() {
    useEffect(() => {
    document.title = 'Nihel Hacine - Portfolio';
  }, []);
  return (
    <div>
      <Navbarr/>
      <Header/>
      <About/>
      <Certif/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
