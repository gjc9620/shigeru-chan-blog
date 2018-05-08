import React from 'react';
import { Route, Switch } from "react-router-dom";

export const genSwitch = (node, match = { url: '' })=>{
  return (
    <Switch>
      {
        node.routes.map(((r)=>{
          const {
            path,
            component: Component,
            // routes,
          } = r;
          
          return (
            <Route
              exact={path === '/'}
              path={match.url+path}
              render={(props)=><Component {...props} route={r} />}
            />
          )
        }))
      }
    </Switch>
  )
}
const routerPage = (Com)=>{
  
  return class extends React.Component {
    render() {
      const {
        route:{
          routes = [],
        } = {},
        route,
        match
      } = this.props;
      
      if(routes.length === 0) {
        return <Com {...this.props} />
      }
      
      return (
        <Com
          {...this.props}
          childRoute={genSwitch(route, match)}
        />
      )
    }
  }
};

export default routerPage;

