import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header';


const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class BlogApp extends React.Component {
  render(){
    const { routes  }= this.props;
    
    return (
      <div className={'asdas'}>
        <div>
          <div className="App">
            <Header />
          </div>
  
        </div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
        </ul>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default BlogApp;
