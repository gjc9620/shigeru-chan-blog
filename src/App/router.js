import React from 'react';
import Gallery  from '../page/Gallery';
// import Home  from '../page/Home';
import BlogApp  from '../component/BlogApp';

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


export default [{
  path: "/",
  component: BlogApp,
  routes: [
    {
      path: "/",
      component: Foo,
    },
    {
      path: "/home",
      component: Foo,
    },
    {
      path: "/gallery",
      component: Gallery,
    }
  ]
}];
