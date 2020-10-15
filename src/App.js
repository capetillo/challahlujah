import React, {Component} from 'react'; 
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollAnimation from 'react-animate-on-scroll';



export default class App extends Component {
  render() {
  return (
  <div className="page-container">
      <Navigation />
      <Header />
      <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
      <About />
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
      <Reserve />
      </ScrollAnimation>
      <Contact />
      <Footer />
   </div>
  );
}
}
