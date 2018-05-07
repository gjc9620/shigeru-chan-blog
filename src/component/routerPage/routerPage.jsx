import React from 'react';
import { Route, Switch } from "react-router-dom";
import Gallery  from '../../page/Gallery';
import CarouselPage  from '../../page/CarouselPage';
import Home  from '../../page/Home';


export const RouteWithSubRoutes = props => {
  const { route = {}, match = {} } = props;
  debugger
  return (
    <Route
      path={`${match.url || ""}${route.path}`}
      exact={route.path === '/'}
      render={props => {
        debugger
        return <route.component {...props} routes={route.routes} />
      }}
    />
  );
};

const routerPage = (Com)=>{
  return class extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {};
    // }
    // componentDidMount() {}
    render() {
      const { routes = [], match } = this.props;
      
      if(routes.length === 0) {
        return <Com {...this.props} />
      }
      
      return (
        <Com
          {...this.props}
          childRouter={
            <Switch>

            </Switch>
          }
          />
      )
    }
  }
}

export default routerPage;

