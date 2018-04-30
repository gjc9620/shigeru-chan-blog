import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);


const routerPage = (Com)=>{
  return class extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {};
    // }
    // componentDidMount() {}
    render() {
      const { routes } = this.props;
      
      return (
        <Com
          routes={routes}
          childRouter={routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          />
      )
    }
  }
}

export default routerPage;

