import React, {Component} from 'react'; 
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';
import Contact from './components/Contact/Contact';
import ChallahHacks from './components/ChallahHacks/ChallahHacks';
import Footer from './components/Footer/Footer';






export default class App extends Component {
  render() {
  return (
  <div className="page-container">
      <Navigation />
      <Header />
      <About />
      <Reserve />
      <Contact />
      <ChallahHacks />
      <Footer />
   </div>
  );
}
}
