import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gallery  from '../page/Gallery';
import CarouselPage  from '../page/CarouselPage';
import Home  from '../page/Home';
import 'normalize.css';

// import routes from './router';
// import routerPage, { RouteWithSubRoutes } from '../component/routerPage';

// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     exact={route.path === '/'}
//     render={props => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

const routerPage = (Com)=>{
  return class extends React.Component {
    render() {
      const { routes = [], match } = this.props;
      
      if(routes.length === 0) {
        return <Com {...this.props} />
      }
      
      debugger
      
      const rs = routes.map(((r)=>{
        const {
          path,
          component: Component,
          routes,
        } = r;
        
        debugger
        
        return (
          <Route
            exact={path === '/'}
            // path={match.url+path}
            path={path}
            render={(props)=><Component {...props} routes={routes} />}
          />
        )
      }));
      
      debugger
      return (
        <Com
          {...this.props}
          // childRouter={
          //   <Switch>{rs}</Switch>
          // }
          childRouter={
            rs
          }
        />
      )
    }
  }
}

const routes = {
  component: ()=>{
    return (<p>XXXX</p>)
  },
  routes: [
    {
      path: "/",
      component: ()=><p>/</p>,
    },
    {
      path: "/A",
      component: routerPage((props)=><p>
        /A
        { props.childRoute }
      </p>),
      routes: [
        {
          path: "/",
          component: ()=><p>/</p>,
        },
        {
          path: "/a",
          component: ()=><p>/a</p>,
        },
        {
          path: "/b",
          component: ()=><p>/b</p>,
        },
      ],
    },
    {
      path: "/home",
      component: ()=><p>home</p>,
    },
    {
      path: "/gallery",
      component: ()=><p>gallery</p>,
    },
    {
      path: "/carousel",
      component: ()=><p>carousel</p>,
    }
  ],
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            {
              routes.routes.map(((r)=>{
                const {
                  path,
                  component: Component,
                  routes,
                } = r;
                return (
                  <Route
                    exact={path === '/'}
                    path={path}
                    render={(props)=><Component {...props} routes={routes} />}
                    />
                )
              }))
            }
          </Switch>
          {/*<Switch>*/}
            {/*<Route exact path={`/`} render={(props)=><Home {...props} />} />*/}
            {/*<Route path={`/home`} render={Home} />*/}
            {/*<Route path={`/Gallery`} render={(props)=><Gallery {...props}  />} />*/}
            {/*<Route path={`/CarouselPage`} render={CarouselPage} />*/}
          
          {/*</Switch>*/}
{/*
            <Route
              path={routes.path}
              components={routes.components}
              // render={({ match })=>{
              //   routes.routes
              //   return <div>BB</div>
              // }}
              />
*/}
        </div>
        
      </Router>
    );
  }
}

export default App;
