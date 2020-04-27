import React, {Component} from 'react';

import './App.css';

class App extends Component {
  state = {
    stuff: [],
  }
  


  render() {
    return (
      <div className="page-wraper">
        
        <nav className="alert alert-secondary" role="alert">
          <h1>This is the main nav bar</h1>
          <a href="/about/">About</a> |
          <a href="/contact/">Contact</a> |
          <a href="/services/">Services</a> 
        </nav>
       
      </div>
    );
  }
}

export default App;
