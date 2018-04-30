import React, { Component } from 'react';
import Header from '../Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routerPage from '../routerPage';

class BlogApp extends React.Component {
  render(){
    const { childRouter  }= this.props;
    
    return (
      <div >
        <div>
          <div className="App">
            <Header />
          </div>
        </div>
        {/*<ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>*/}
        { childRouter }
      </div>
    )
  }
}

export default routerPage(BlogApp);
// export default BlogApp;
