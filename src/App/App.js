import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'normalize.css';
import routes from './router';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
//
// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>
//
//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );
//


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
        
      </Router>
    );
  }
}

export default App;
