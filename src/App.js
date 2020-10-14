import React, {Component} from 'react'; 
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from './components/About/About';
import Reserve from './components/Reserve/Reserve';



export default class App extends Component {
  render() {
  return (
  <div className="page-container">
      <Navigation />
      <Header />
      <About />
      <Reserve />
   </div>
  );
}
}
