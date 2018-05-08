import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import router from './router';
import 'normalize.css';
import BlogApp  from '../component/BlogApp';
import { genSwitch }  from '../component/routerPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <BlogApp childRoute={ genSwitch(router) } />
        </div>
      </Router>
    );
  }
}

export default App;
