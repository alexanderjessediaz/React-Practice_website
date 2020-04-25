import React, {Component} from 'react';

import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    stuff: [],
  }
  


  render() {
    return (
      <div className="page-wraper">
        <nav className="main-nav">
          <h1>This is the main nav bar</h1>
        </nav>
        <main>

        </main>
      </div>
    );
  }
}

export default App;
