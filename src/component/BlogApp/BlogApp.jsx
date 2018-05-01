import React, { Component } from 'react';
import Header from '../Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routerPage from '../routerPage';

class BlogApp extends React.Component {
  render(){
    const { childRouter  }= this.props;
    
    return (
      <div className='blog-app'>
        <div className='page'>
          <Header />
          <main className='mian'>
            { childRouter }
          </main>
          <footer>
            © 2017 Yuli. Proudly created
          </footer>
        </div>
        {/*<ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>*/}
      </div>
    )
  }
}

export default routerPage(BlogApp);
// export default BlogApp;
