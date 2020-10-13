import React, {Component} from 'react'; 
import './App.css';
import About from './components/About/About'

export default class App extends Component {
  render() {
  return (
  <div className="page-container">
      <About />
   </div>
  );
}
}
