import React from 'react';
// import Gallery  from '../page/Gallery';
import CarouselPage  from '../page/CarouselPage';
import routerPage from "../component/routerPage/routerPage";
// import Home  from '../page/Home';

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };
    
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

const Foo = asyncComponent(() =>
  import('../page/Home').then(module => module.default)
)


export default {
  routes: [
    {
      path: "/",
      component: Foo,
    },
    {
      path: "/home",
      component: ()=><p>home</p>,
    },
    {
      path: "/p",
      component: routerPage(({childRoute})=>{
        return <div>home{childRoute}</div>
      }),
      routes: [
        {
          path: "/yeah",
          component: ()=><p>yeah</p>
        }
      ]
    },
    // {
    //   path: "/gallery",
    //   component: Gallery,
    // },
    {
      path: "/carousel",
      component: CarouselPage,
    }
  ]
};
