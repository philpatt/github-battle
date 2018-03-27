import React, { Component } from 'react';
import '../index.css';
import Popular from './Popular.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path='/popular' component = {Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
